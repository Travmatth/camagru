import * as React from 'react';
import { LoginProps, SignupProps, createInputProps } from './index'
import { RouteComponentProps } from "react-router-dom";
import { AuthProps } from '../../Application';
import Modal from './SignupModal';
import * as UIkit from 'uikit';

const SignupForm = ({
		api,
		active,
		username,
		setUsername,
		password,
		setPassword,
		email,
		setEmail,
		passwordConfirmation,
		setPasswordConfirmation,
		setAuthenticated,
		history,
	}: AuthProps & RouteComponentProps & LoginProps & SignupProps) => {
	const [showModal, setShowModal] = React.useState(false); 
	const modalProps = { api, setAuthenticated, modalRef: React.useRef(null), showModal, setShowModal } 
	const setOnChange = (set: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => { set(e.currentTarget.value) }
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (password !== passwordConfirmation) {
			UIkit.notification("Error: Please enter matching passwords");
			return;
		}
		try {
			const loggedIn = await api.signup(email, username, password)
			setShowModal(true)
		} catch (error) {
			console.log("onSubmit error: ", error)
			if (typeof error === 'string') {
				UIkit.notification(error)
			} else if (typeof error === 'object' && error !== null) {
				UIkit.notification(error.message)
			}
		}
    }

	return (
		<React.Fragment>
			<form className='uk-form-stacked' onSubmit={onSubmit} hidden={active != 'signup'}>
				<input {...createInputProps('email', 'text', email, setOnChange(setEmail))}/>
				<input {...createInputProps('username', 'text', username, setOnChange(setUsername))}/>
				<input {...createInputProps('password', 'password',  password, setOnChange(setPassword))}/>
				<input {...createInputProps('confirm password', 'password', passwordConfirmation, setOnChange(setPasswordConfirmation))}/>
				<input className='uk-button uk-button-default uk-margin-top uk-margin-bottom uk-background-muted' type='submit' value='Submit'/>
			</form>
			<Modal {...modalProps}/>
		</React.Fragment>
	);
}

export default SignupForm