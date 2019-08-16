import * as React from 'react';
import { FormProps } from './index'

const LoginForm = ({state, action, onChange}: FormProps) => (
	<form className='uk-form-stacked' onSubmit={action} hidden={state.active != "login"}>
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
		<button className="uk-button" onClick={action}>Submit</button>
	</form>
)

export default LoginForm