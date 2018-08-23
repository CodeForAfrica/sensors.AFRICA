import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/index.css';
import Home from '/pages/Home';
import About from 'pages/About';
import City from 'pages/City';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/city" component={City}/>
          </Switch>
      </div>
    </BrowserRouter>, 
    document.getElementById('root'));

