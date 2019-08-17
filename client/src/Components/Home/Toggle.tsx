import * as React from 'react';
import { ToggleProps } from './index';

const Toggle = (props: ToggleProps) => (
	<div className="uk-child-width-1-2" data-uk-grid>
		<div className="">
			<button className="uk-button">Sign Up</button>
		</div>
		<div className="">
			<button className="uk-button">Log In</button>
		</div>
	</div>
)

export default Toggle