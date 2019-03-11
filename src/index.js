import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Homemade Apple', 'PT Sans Narrow']
    }
});

render(<App />, document.getElementById('root'));
registerServiceWorker();
