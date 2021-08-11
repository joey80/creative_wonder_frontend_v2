import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import '@fontsource/homemade-apple';
import '@fontsource/lato';
import '@fontsource/pt-sans-narrow';
import './index.scss';

render(<App />, document.getElementById('root'));
registerServiceWorker();
