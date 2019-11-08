FROM node:latest

# install git-crypt
RUN cd /tmp                                         && \
    git clone https://github.com/AGWA/git-crypt.git && \
    cd git-crypt                                    && \
    make                                            && \
    make install PREFIX=/usr/local

# Install gnupgp && gnupg-agent (used to keep and relase passphrase to git-crypt)
RUN apt-get update                                  && \
    apt-get install -y gnupg                        && \
    apt-get install -y gnupg-agent

ARG GPG_UID=EMPTY
ENV GPG_UID ${GPG_UID}

ARG GPG_KEY=EMPTY
ENV GPG_KEY ${GPG_KEY}

ARG GPG_PASSPHRASE=EMPTY
ENV GPG_PASSPHRASE ${GPG_PASSPHRASE}

WORKDIR /src

COPY ./ /src
RUN touch ~/.gnupg/gpgconf.conf
 
# 1. import the key into the gpg keyring
RUN echo "${GPG_KEY}" | gpg --passphrase "${GPG_PASSPHRASE}" --import       && \
# 2. configure gpg to use the gpg-agent
    echo 'use-agent' >> ~/.gnupg/gpgconf.conf                                  && \
# 3. configure gpg to operate in non-tty mode
    echo "no-tty" >> ~/.gnupg/gpgconf.conf                                      && \
# 4. start gpg-agent as a daemon and allow preset-passphrase
# |- GPG_AGENT_INFO=/tmp/gpg-wWKjdv/S.gpg-agent:8:1; export GPG_AGENT_INFO;
# |- eval output from gpg-agent start
    eval `gpg-agent --daemon --allow-preset-passphrase`                     && \
# 5. convert gpg passphrase to hex
    GPG_PASSPHRASE_HEX=`echo -n "$GPG_PASSPHRASE"                              \
                          | od -A n -t x1                                      \
                          | sed 's/ *//g'`                                  && \
# 6. extract gpg key's sub key fingerprint
    GPG_FINGERPRINT=`gpg --fingerprint --fingerprint $GPG_UID                  \
                      | grep -Po "Key fingerprint = (.*)"                      \
                      | tail -1                                                \
                      | sed 's/Key fingerprint = //' | sed 's/ *//g'`       && \
# 7. store gpg key's passphrase in agent
    gpg-connect-agent                                                          \
        "PRESET_PASSPHRASE $GPG_FINGERPRINT -1 $GPG_PASSPHRASE_HEX"            \
        /bye                                                                && \
# 8. ensure there is a git repo (incase this is a bare repository)
    git-crypt unlock

WORKDIR /src/client

RUN npm build
CMD npm run start