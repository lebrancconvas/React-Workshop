import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import 'bulma/css/bulma.css';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
)


ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
registerServiceWorker();
