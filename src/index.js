import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Home from 'pages/Home'
import About from 'pages/About';
import City from 'pages/City';

import '../src/assets/css/index.css';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
//import { } from '@fortawesome/fontawesome-free-solid'

library.add(fab);

ReactDOM.render(
    <BrowserRouter>
    {/* Declare routes for the app*/}
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/city" component={City}/>
        </Switch>
      </div>
    </BrowserRouter>, 
    document.getElementById('root'));

