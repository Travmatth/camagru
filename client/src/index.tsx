import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApiManager from './ApiManager';
import Application, {InitUIKit} from './Application';

InitUIKit();
ReactDOM.render(<Application api={new ApiManager()}/>, document.getElementById('app'));