import * as React from 'react';
import { FormProps } from './index'

const SignupForm = ({state, action, onChange}: FormProps) => (
	<form className='uk-form-stacked' onSubmit={action} hidden={state.active != "signup"}>
		<input
			name='email'
			type='text'
			placeholder='email'
			value={state.email}
			onChange={onChange}
			className='uk-input'
		/>
		<input
			name='username'
			type='text'
			placeholder='username'
			value={state.username}
			onChange={onChange}
			className='uk-input'
		/>
		<input
			name='password'
			type='text'
			placeholder='password'
			value={state.password}
			onChange={onChange}
			className='uk-input'
		/>
		<input
			name='passwordConfirmation'
			type='text'
			placeholder='confirm password'
			value={state.passwordConfirmation}
			onChange={onChange}
			className='uk-input'
		/>
		<button className="uk-button" onClick={action}>Submit</button>
	</form>
)

export default SignupForm