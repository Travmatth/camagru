import * as React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import * as UIkit from 'uikit';
import * as Icons from 'uikit/dist/js/uikit-icons';
import ApiManager from './ApiManager';
import { Home, NavBar, NotFound, Studio } from './Components'

const InitUIKit = () => {
    UIkit.use(Icons)
}

type CamagruProps = {
	api: ApiManager
}

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