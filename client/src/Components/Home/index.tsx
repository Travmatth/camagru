import * as React from 'react';
import { RouteComponentProps, RouteProps, Redirect } from "react-router-dom";
import { AuthProps, AuthConsumer } from '../../Application';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Toggle from './Toggle';

type ToggleProps = {
	setSignup: () => void
	setLogin: () => void
}

type LoginProps = {
	active: string
	username: string
	password: string
	setUsername: React.Dispatch<React.SetStateAction<string>>
	setPassword: React.Dispatch<React.SetStateAction<string>>
}

type SignupProps = {
	email: string
	passwordConfirmation: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	setPasswordConfirmation: React.Dispatch<React.SetStateAction<string>>
	setAuthenticated:React.Dispatch<React.SetStateAction<boolean>>
	history: RouteProps
}

const createInputProps = (
	name: string,
	type: string,
	value: string,
	onChange: React.ChangeEventHandler<HTMLInputElement>,
) => ({
	name,
	type,
	placeholder: name,
	value,
	onChange,
	className: 'uk-input',
})

const HomeWithContext = (props: AuthProps & RouteComponentProps) => {
	const [active, setActive] = React.useState('signup'); 
	const [username, setUsername] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

	const loginProps = { active, username, setUsername, password, setPassword, }
	const signupProps = { email, setEmail, passwordConfirmation, setPasswordConfirmation, history: props.history }
	const toggle = (next: string) => () => {
		setActive(next)
		setUsername('')
		setEmail('')
		setPassword('')
		setPasswordConfirmation('')
	}

	if (props.authenticated) {
		return <Redirect to='/studio'/>
	}

	return (
		<div data-uk-height-viewport="expand: true" className='uk-container uk-background-primary uk-text-center'>
			<div className='uk-container uk-background-primary uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l'>
				<Toggle setSignup={toggle('signup')} setLogin={toggle('login')}/>
				<SignupForm api={props.api} {...props} {...loginProps} {...signupProps}/>
				<LoginForm api={props.api} {...props} {...loginProps}/>
			</div>
		</div>
	);
}

const Home = (routeProps: RouteComponentProps) => (
	<AuthConsumer>
		{ (value) => <HomeWithContext {...routeProps} {...value}/>}
	</AuthConsumer>
)

export default Home
export { ToggleProps, LoginProps, SignupProps, createInputProps }