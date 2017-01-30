import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppStore from './AppStore';
import './index.css';

ReactDOM.render(
  <App store={AppStore}/>,
  document.getElementById('root')
);
