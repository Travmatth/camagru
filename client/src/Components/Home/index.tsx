import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { ApiProps } from '../../Application';
import SignupForm from './Signup';
import LoginForm from './Login';

const Buttons = () => (
	<div className="uk-child-width-1-2" data-uk-grid>
		<div className="">
			<button className="uk-button">Sign Up</button>
		</div>
		<div className="">
			<button className="uk-button">Log In</button>
		</div>
	</div>
)

type ToggleState = {
	active: string,
	username: string,
	email: string,
	password: string
	passwordConfirmation: string
}

type FormProps = {
	state: ToggleState,
	action: () => void,
	onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
}

class Home extends React.Component<ApiProps & RouteComponentProps, ToggleState> {
	public readonly state: ToggleState = {
		active: "signup",
		username: "",
		email: "",
		password: "",
		passwordConfirmation: ""
	}

	toggleForm(form: string) {
		return () => {
			if (this.state.active != form) {
				this.setState({active: form})
			}
		}
	}

	onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;
		this.setState({ [name]: value } as any)
	}

	render() {
		const { signup, login } = this.props.api
		const { state } = this

		return (
			<div className="uk-container uk-background-primary uk-text-center">
				<div className="uk-container uk-background-primary uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l">
					<Buttons/>
					<SignupForm
						action={signup}
						state={state}
						onChange={this.onChange}
					/>
					<LoginForm
						action={login}
						state={state}
						onChange={this.onChange}
					/>
				</div>
			</div>
		);
	}
}

export default Home
export { FormProps }