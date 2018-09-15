import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Router from './components/Router';

ReactDOM.hydrate(
  <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
