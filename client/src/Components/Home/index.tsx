import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { ApiProps } from '../../Application';

class Home extends React.Component<ApiProps & RouteComponentProps, any> {
	render() {
		return (
			<div className="uk-container uk-background-primary uk-text-center">
				<div className="uk-container uk-background-primary uk-width-1-1@s uk-width-1-3@m uk-width-1-4@l">
					<div className="uk-child-width-1-2" data-uk-grid>
						<div className="">
							<button className="uk-button">Sign Up</button>
						</div>
						<div className="">
							<button className="uk-button">Log In</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home