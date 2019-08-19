import * as React from 'react';
import { BrowserRouter, Route, Link, Switch, RouteComponentProps } from "react-router-dom";
import ApiManager from './ApiManager';
import { Home, NavBar, NotFound, Studio, Footer } from './Components'
import { AuthRoute } from './Utils'

type AuthProps = {
	authenticated: boolean
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
	api: ApiManager
}

const AuthContext = React.createContext<AuthProps>(undefined as any as AuthProps)
const AuthProvider = AuthContext.Provider
const AuthConsumer = AuthContext.Consumer

const Application = () => {
	const api = new ApiManager();
	const [authenticated, setAuthenticated] = React.useState(false); 

	const authContext = {
		authenticated,
		setAuthenticated,
		api,
	};


	return (
		<AuthProvider value={authContext}>
			<BrowserRouter>
				<NavBar/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<AuthRoute authenticated={authenticated} path='/studio' component={Studio}/>
					<Route component={NotFound}/>
				</Switch>
				<Footer/>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default Application
export { AuthProps, AuthConsumer }