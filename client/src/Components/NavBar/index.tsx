import * as React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
	<div>
		<Link to="/">Home</Link>
		<Link to="/studio">Studio</Link>
	</div>
);

export default NavBar