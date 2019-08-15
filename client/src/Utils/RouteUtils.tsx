import * as React from 'react';
import { Route } from 'react-router-dom';

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
	: null
)

const AuthRouteWithProps = ({component: Component
							, withProps
							, isLoggedIn
							,  ...rest}: RouteProps & AuthRouteProps) => (
	isLoggedIn()
	? <RouteWithProps {...rest} component={Component} withProps={withProps}/>
	: null
)

export {
	RouteWithProps,
	AuthRoute,
	AuthRouteWithProps
}