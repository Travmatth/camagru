import * as React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import * as UIkit from 'uikit';
import * as Icons from 'uikit/dist/js/uikit-icons';
import ApiManager from './ApiManager';

const InitUIKit = () => {
    UIkit.use(Icons)
}

type CamagruProps = {
	api: ApiManager
}

const NavBar = () => (
	<div>
		<Link to="/">Home</Link>
		<Link to="/studio">Studio</Link>
	</div>
);

const Home = () => (
	<div className="uk-container">
		<div className="uk-card uk-card-body uk-card-primary">
			<h3 className="uk-card-title">Home</h3>
			<button className="uk-button uk-button-default" uk-tooltip="title: Hover Working">Hover</button>
		</div>
	</div>
);

const Studio = () => (
	<div className="uk-container">
		<div className="uk-card uk-card-body uk-card-primary">
			<h3 className="uk-card-title">Studio</h3>
			<button className="uk-button uk-button-default" uk-tooltip="title: Hover Working">Hover</button>
		</div>
	</div>
);

const NotFound = () => (
	<div className="uk-container">
		<div className="uk-card uk-card-body uk-card-primary">
			<h3 className="uk-card-title">NotFound</h3>
			<button className="uk-button uk-button-default" uk-tooltip="title: Hover Working">Hover</button>
		</div>
	</div>
);

class Application extends React.Component<CamagruProps , any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		this.props.api.login();
		return (
			<BrowserRouter>
				<NavBar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/studio" component={Studio}/>
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Application
export {InitUIKit}