import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom' 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from '../src/components/pages/Login/Auth0-Provider-with-history';
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

            
ReactDOM.render(
  <Router> 
    <Auth0ProviderWithHistory>
      <React.StrictMode>
        <App classname="fullpage" />
      </React.StrictMode>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();