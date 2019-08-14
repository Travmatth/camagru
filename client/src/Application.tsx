import * as React from 'react';
import * as UIkit from 'uikit';
import * as Icons from 'uikit/dist/js/uikit-icons';

const InitUIKit = () => {
    UIkit.use(Icons)
    UIkit.notification('hello world')
}

class Application extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}

	render() {
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