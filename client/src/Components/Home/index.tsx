import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { AuthProps, AuthConsumer } from '../../Application';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Toggle from './Toggle';

type ToggleProps = {
	active: string,
	setActive: React.Dispatch<React.SetStateAction<string>>,
}

type LoginProps = {
	active: string,
	username: string,
	setUsername: React.Dispatch<React.SetStateAction<string>>,
	password: string
	setPassword: React.Dispatch<React.SetStateAction<string>>,
}

type SignupProps = {
	email: string,
	setEmail: React.Dispatch<React.SetStateAction<string>>,
	passwordConfirmation: string
	setPasswordConfirmation: React.Dispatch<React.SetStateAction<string>>,
}

const createInputProps = (
	name: string,
	value: string,
	onChange: React.ChangeEventHandler<HTMLInputElement>,
) => ({
	name: name,
	type: 'text',
	placeholder: name,
	value: value,
	onChange: onChange,
	className: 'uk-input',
})

const HomeWithContext = (props: AuthProps & RouteComponentProps) => {
	const [active, setActive] = React.useState("signup"); 
	const [username, setUsername] = React.useState("signup");
	const [email, setEmail] = React.useState("signup");
	const [password, setPassword] = React.useState("signup");
	const [passwordConfirmation, setPasswordConfirmation] = React.useState("signup");
	const loginProps = {
		active,
		username,
		setUsername,
		password,
		setPassword,
	}
	const signupProps = {
		email,
		setEmail,
		passwordConfirmation,
		setPasswordConfirmation,
	}
	return (
		<div className="uk-container uk-background-primary uk-text-center">
			<div className="uk-container uk-background-primary uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l">
				<Toggle active={active} setActive={setActive}/>
				<SignupForm {...props} {...loginProps} {...signupProps}/>
				<LoginForm {...props} {...loginProps}/>
			</div>
		</div>
	);
}

const Home = (routeProps: RouteComponentProps) => (
	<AuthConsumer>
		{ (props) =>  <HomeWithContext {...routeProps} {...props}/> }
	</AuthConsumer>
)

export default Home
export { ToggleProps, LoginProps, SignupProps, createInputProps }