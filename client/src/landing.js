import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import React from 'react';
import ReactDOM from 'react-dom';

UIkit.use(Icons)
UIkit.notification('hello world')

ReactDOM.render(
    <div class="uk-container">
        <div class="uk-card uk-card-body uk-card-primary">
            <h3 class="uk-card-title">Hello World</h3>
            <button class="uk-button uk-button-default" uk-tooltip="title: Hover Working">Hover</button>
        </div>
    </div>,
  document.getElementById('app')
);