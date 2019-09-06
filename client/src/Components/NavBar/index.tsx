import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { AuthProps, AuthConsumer } from '../../Application';

const LoggedIn = (props: AuthProps & RouteComponentProps) => {
    const logout = async () => {
        const result = await props.api.logout()
        if (result) {
            props.setAuthenticated(false)
            props.history.push('/')
        }
    }

    return (
        <React.Fragment>
            <div className='uk-navbar-right'>
                <h1>Camagru</h1>
            </div>
            <div className='uk-navbar-right'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/studio">Studio</Link>
                    </li>
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

const LoggedOut = () => (
    <div className='uk-navbar-center'>
        <h1 className='uk-margin-top'>Camagru</h1>
    </div>
)

const NavBarWithContext = (props: AuthProps & RouteComponentProps) => {
    return (
        <nav className='uk-navbar-container'>
            <div className='uk-navbar uk-background-secondary'>
                { props.authenticated
                    ? <LoggedIn {...props}/>
                    : <LoggedOut/>
                }
            </div>
        </nav>
    );
}

const NavBar = (routeProps: RouteComponentProps) => (
    <AuthConsumer>
        { (props) =>  <NavBarWithContext {...routeProps} {...props}/> }
    </AuthConsumer>
)

export default withRouter(NavBar)