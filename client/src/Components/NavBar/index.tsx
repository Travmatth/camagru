import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import { ApiProps } from "../../Application";

const LoggedIn = (props: ApiProps) => (
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

const LoggedOut = (props: ApiProps) => (
	<div className="uk-navbar-center">
		<h1>Camagru</h1>
	</div>
)

const NavBar = (props: ApiProps) => (
	<nav className="uk-navbar-container">
		<div className="uk-navbar">
			{ props.api.isLoggedIn()
				? <LoggedIn {...props}/>
				: <LoggedOut {...props}/>
			}
		</div>
	</nav>
);

export default NavBar