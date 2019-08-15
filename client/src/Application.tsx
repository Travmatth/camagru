import * as React from 'react';
import { BrowserRouter, Route, Link, Switch, RouteComponentProps } from "react-router-dom";
import ApiManager from './ApiManager';
import { Home, NavBar, NotFound, Studio } from './Components'
import { RouteWithProps } from './Utils';

type ApiProps = {
	api: ApiManager
}

class Application extends React.Component<ApiProps , any> {
	constructor(props: ApiProps) {
		super(props);
	}

	render() {
		const { props } = this
		return (
			<BrowserRouter>
				<NavBar {...props}/>
				<Switch>
					<RouteWithProps exact
						path="/"
						component={Home}
						withProps={props}
					/>
					<RouteWithProps
						path="/studio"
						component={Studio}
						withProps={props}
					/>
					<RouteWithProps
						component={NotFound}
						withProps={props}
					/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Application
export { ApiProps }