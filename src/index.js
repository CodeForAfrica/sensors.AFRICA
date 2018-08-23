import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import App from 'App'
import About from 'pages/About';
import City from 'pages/City';

import '../src/assets/css/index.css';

ReactDOM.render(
    <BrowserRouter>
    {/* Declare routes for the app*/}
      <div>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/city" component={City}/>
        </Switch>
          <App />
      </div>
    </BrowserRouter>, 
    document.getElementById('root'));

