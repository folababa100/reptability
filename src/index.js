import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import * as serviceWorker from './serviceWorker';

import './styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
serviceWorker.unregister();
