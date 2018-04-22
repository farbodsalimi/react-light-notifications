import React from 'react';
import { render } from 'react-dom';
import './demo.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.querySelector('#demo'));
