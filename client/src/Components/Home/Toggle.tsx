import * as React from 'react';
import { ToggleProps } from './index';

const Toggle = ({ setSignup, setLogin }: ToggleProps) => (
    <div className='uk-child-width-1-2' data-uk-grid>
        <div>
            <button className='uk-button uk-margin-top uk-margin-bottom' onClick={setSignup}>Sign Up</button>
        </div>
        <div>
            <button className='uk-button uk-margin-top uk-margin-bottom' onClick={setLogin}>Log In</button>
        </div>
    </div>
)

export default Toggle