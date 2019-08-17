import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

/*
Util Components for Managing Authenticated Routes & Passing Props to Components:
https://medium.com/@robjtede/the-real-routewithprops-react-component-in-typescript-defacde01991
https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
*/

type RouteProps = {
	component: any
	withProps?: any
	[propName: string]: any
}

type AuthRouteProps = {
	component: any
	isLoggedIn: () => boolean
	[propName: string]: any
}

const RouteWithProps = ({component: Component, withProps = {}, ...props}: RouteProps) => (
	<Route {...props} render={props => <Component {...props} {...withProps}/>}/>
)

const AuthRoute = ({component: Component, isLoggedIn, ...rest}: AuthRouteProps) => (
	isLoggedIn()
	? <Route {...rest} render={props => <Component {...props} {...rest}/>}/>
	: <Redirect to="/"/>
)

const AuthRouteWithProps = ({component: Component
							, withProps
							, isLoggedIn
							,  ...rest}: RouteProps & AuthRouteProps) => (
	isLoggedIn()
	? <RouteWithProps {...rest} component={Component} withProps={withProps}/>
	: <Redirect to="/"/>
)

export {
	ContextRoute,
	RouteWithProps,
	AuthRoute,
	AuthRouteWithProps
}