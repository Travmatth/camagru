import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './Application';
import * as UIkit from 'uikit';
import * as Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons)
const anchor = document.getElementById('app')
ReactDOM.render(<Application/>, anchor);