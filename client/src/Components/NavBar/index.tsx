import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import { ApiProps } from "../../Application";

const LoggedIn = (props: ApiProps) => (
	<div className="uk-navbar">
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
	</div>
)

const LoggedOut = (props: ApiProps) => (
	<div className="uk-navbar">
		<div className="uk-navbar-center">
			<h1>Camagru</h1>
		</div>
	</div>
)

const NavBar = (props: ApiProps) => (
	<nav className="uk-navbar-container">
		{ props.api.isLoggedIn()
			? <LoggedIn {...props}/>
			: <LoggedOut {...props}/>
		}
	</nav>
);

export default NavBar