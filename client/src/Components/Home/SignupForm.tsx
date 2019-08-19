import * as React from 'react';
import { LoginProps, SignupProps, createInputProps } from './index'
import { RouteComponentProps } from "react-router-dom";
import { AuthProps } from '../../Application';
import Modal from './SignupModal';

const SignupForm = ({
		api,
		active,
		username,
		setUsername,
		password,
		setPassword,
		email,
		setEmail,
		passwordConfirmation,
		setPasswordConfirmation,
		setAuthenticated,
		history,
	}: AuthProps & RouteComponentProps & LoginProps & SignupProps) => {
	const [showModal, setShowModal] = React.useState(false); 
	const modalProps = { api, setAuthenticated, modalRef: React.useRef(null), showModal, setShowModal } 
	const setEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setEmail(e.currentTarget.value) }
	const setUsernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setUsername(e.currentTarget.value) }
	const setPasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setPassword(e.currentTarget.value) }
	const setPasswordConfirmationOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setPasswordConfirmation(e.currentTarget.value) }
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (password == passwordConfirmation) {
			const loggedIn = await api.signup(email, username, password)
			if (loggedIn) {
				setShowModal(true)
			}
		}
    }

	return (
		<React.Fragment>
			<form className='uk-form-stacked' onSubmit={onSubmit} hidden={active != 'signup'}>
				<input {...createInputProps('email', 'text', email, setEmailOnChange)}/>
				<input {...createInputProps('username', 'text', username, setUsernameOnChange)}/>
				<input {...createInputProps('password', 'password',  password, setPasswordOnChange)}/>
				<input {...createInputProps('confirm password', 'password', passwordConfirmation, setPasswordConfirmationOnChange)}/>
				<input className='uk-button uk-button-default uk-margin-top uk-margin-bottom uk-background-muted' type='submit' value='Submit'/>
			</form>
			<Modal {...modalProps}/>
		</React.Fragment>
	);
}

export default SignupForm