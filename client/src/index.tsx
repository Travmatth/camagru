import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application, {InitUIKit} from './Application';

InitUIKit();
ReactDOM.render(<Application/>, document.getElementById('app'));