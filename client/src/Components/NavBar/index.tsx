import * as React from 'react';
import { Link } from "react-router-dom";
import { AuthProps, AuthConsumer } from '../../Application';

const LoggedIn = (props: AuthProps) => (
	<React.Fragment>
		<div className="uk-navbar-right">
			<h1>Camagru</h1>
		</div>
		<div className="uk-navbar-right">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/studio">Studio</Link>
				</li>
			</ul>
		</div>
	</React.Fragment>
)

const LoggedOut = () => (
	<div className="uk-navbar-center">
		<h1>Camagru</h1>
	</div>
)

const NavBarWithContext = (props: AuthProps) => {
	return (
		<nav className="uk-navbar-container">
			<div className="uk-navbar">
				{ props.authenticated
					? <LoggedIn {...props}/>
					: <LoggedOut/>
				}
			</div>
		</nav>
	);
}

const NavBar = () => (
	<AuthConsumer>
		{ (props) =>  <NavBarWithContext {...props}/> }
	</AuthConsumer>
)

export default NavBar