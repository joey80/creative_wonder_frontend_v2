import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import './index.css';

WebFont.load({
  google: {
    families: ['Homemade Apple', 'PT Sans Narrow'],
  },
});

render(<App />, document.getElementById('root'));
registerServiceWorker();
