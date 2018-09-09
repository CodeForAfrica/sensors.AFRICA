import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Home from 'pages/Home'
import About from 'pages/About';
import City from 'pages/City';
import AirLanding from 'pages/air/AirLanding';
import HowSensorsWork from './pages/air/HowSensorsWork';

import '../src/assets/css/index.css';
import fontawesome from '@fortawesome/fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/fontawesome-free-solid';


fontawesome.library.add(fab, faSearch);

ReactDOM.render(
    <BrowserRouter>
    {/* Declare routes for the app*/}
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/city" component={City}/>
          <Route path="/air/home" component={AirLanding}/>
          <Route path="/air/how-sensors-work" component={HowSensorsWork}/>
        </Switch>
      </div>
    </BrowserRouter>, 
    document.getElementById('root'));

