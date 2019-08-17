import * as React from 'react';
import { BrowserRouter, Route, Link, Switch, RouteComponentProps } from "react-router-dom";
import ApiManager from './ApiManager';
import { Home, NavBar, NotFound, Studio } from './Components'

type AuthProps = {
	authenticated: boolean
	signup: (email: string, username: string, password: string) => Promise<void>
	login: (username: string, password: string) => Promise<void>
	logout: (username: string, password: string) => Promise<void>
}

const AuthContext = React.createContext<AuthProps>(undefined as any as AuthProps)
const AuthProvider = AuthContext.Provider
const AuthConsumer = AuthContext.Consumer

const Application = () => {
	const [authenticated, setAuthenticated] = React.useState(false); 
	const api = new ApiManager();
	const signup = async (email: string, username: string, password: string): Promise<void> => { setAuthenticated(await api.signup(email, username, password)) }
	const login = async (username: string, password: string): Promise<void> => { setAuthenticated(await api.login(username, password)) }
	const logout = async (username: string, password: string): Promise<void> => { setAuthenticated(await api.logout()) }

	const authContext = {
		authenticated,
		signup,
		login,
		logout
	};


	return (
		<BrowserRouter>
			<NavBar/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/studio" component={Studio}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Application
export { AuthProps, AuthConsumer }