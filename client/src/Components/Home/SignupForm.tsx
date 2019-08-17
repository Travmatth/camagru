import * as React from 'react';
import { LoginProps, SignupProps, createInputProps } from './index'
import { RouteComponentProps } from "react-router-dom";
import { AuthProps } from '../../Application';

const SignupForm = ({
		signup,
		active,
		username,
		setUsername,
		password,
		setPassword,
		email,
		setEmail,
		passwordConfirmation,
		setPasswordConfirmation,
	}: AuthProps & RouteComponentProps & LoginProps & SignupProps) => {
	const setEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setEmail(e.currentTarget.value) }
	const setUsernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setUsername(e.currentTarget.value) }
	const setPasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setPassword(e.currentTarget.value) }
	const setPasswordConfirmationOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		{ setPasswordConfirmation(e.currentTarget.value) }
	const onSubmit = () => {
		if (password == passwordConfirmation) {
			signup(email, username, password)
		}
	}

	return (
		<form className='uk-form-stacked' onSubmit={onSubmit} hidden={active != "signup"}>
			<input {...createInputProps('email', email, setEmailOnChange)}/>
			<input {...createInputProps('username', username, setUsernameOnChange)}/>
			<input {...createInputProps('password',  password, setPasswordOnChange)}/>
			<input {...createInputProps('passwordConfirmation', passwordConfirmation, setPasswordConfirmationOnChange)}/>
			<input type="submit" value="Submit"/>
		</form>
	);
}

export default SignupForm