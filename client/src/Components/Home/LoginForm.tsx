import * as React from 'react';
import { LoginProps, SignupProps, createInputProps } from './index'
import { RouteComponentProps } from "react-router-dom";
import { AuthProps } from '../../Application';

const LoginForm = ({
		api,
		active,
		username,
		setUsername,
		password,
		setPassword,
	}: AuthProps & RouteComponentProps & LoginProps) => {
	const setUsernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setUsername(e.currentTarget.value) }
	const setPasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setPassword(e.currentTarget.value) }
	const onSubmit = () => {
		console.log("boolean: ", api.login(username, password))
	}

	return (
		<form className='uk-form-stacked' onSubmit={onSubmit} hidden={active != "login"}>
			<input {...createInputProps('username', 'text', username, setUsernameOnChange)}/>
			<input {...createInputProps('password',  'password', password, setPasswordOnChange)}/>
			<input className='uk-button uk-button-default uk-margin-top uk-margin-bottom uk-background-muted' type='submit' value='Submit'/>
		</form>
	);
}

export default LoginForm