import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/config/routes.js'
import {  ContextOneProvider } from './components/contexts/contextOne.js';


ReactDOM.render(
  <ContextOneProvider>
    <Routes />
    </ContextOneProvider>,
 
  document.getElementById('root')
);


