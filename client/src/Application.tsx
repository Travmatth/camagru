import * as React from 'react';
import * as UIkit from 'uikit';
import * as Icons from 'uikit/dist/js/uikit-icons';
import ApiManager from './ApiManager';

const InitUIKit = () => {
    UIkit.use(Icons)
    UIkit.notification('hello world')
}

type CamagruProps = {
	api: ApiManager
}

class Application extends React.Component<CamagruProps , any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		this.props.api.login();
		return (
			<div className="uk-container">
				<div className="uk-card uk-card-body uk-card-primary">
					<h3 className="uk-card-title">Hello World</h3>
					<button className="uk-button uk-button-default" uk-tooltip="title: Hover Working">Hover</button>
				</div>
			</div>
		)
	}
}

export default Application
export {InitUIKit}