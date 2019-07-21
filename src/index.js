// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './../semantic/dist/semantic.css';
import './style/main.less';

declare var module: any;

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

console.log('MY_ENV:' + process.env.MY_ENV);

import App from './components/App/index';

let mountNode = document.getElementById('app');

if (mountNode !== null) {
  ReactDOM.render(<App />, mountNode);
}

module.hot.accept();
