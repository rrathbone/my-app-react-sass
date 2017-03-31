import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Bootstrap CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

// Custom CSS
import './index.css';
import './components/app.css';
import './components/homepage/styles/homepage.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
