import * as React from 'react';
import { LoginProps, SignupProps, createInputProps } from './index'
import { RouteComponentProps } from "react-router-dom";
import { AuthProps } from '../../Application';

const LoginForm = ({
		login,
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
	const onSubmit = () => { login(username, password) }

	return (
		<form className='uk-form-stacked' onSubmit={onSubmit} hidden={active != "signup"}>
			<input {...createInputProps('username', username, setUsernameOnChange)}/>
			<input {...createInputProps('password',  password, setPasswordOnChange)}/>
			<input type="submit" value="Submit"/>
		</form>
	);
}

export default LoginForm