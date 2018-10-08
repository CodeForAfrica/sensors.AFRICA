import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

import Home from './pages/Home';
import About from './pages/air/About';
import City from './pages/air/City';
import AirHome from './pages/air/AirHome';
import SoundHome from './pages/sound/SoundHome';
import WaterHome from './pages/water/WaterHome';
import JoinNetwork from './pages/air/JoinNetwork';
import HowSensorsWork from './pages/air/HowSensorsWork';

import './assets/css/index.css';

fontawesome.library.add(fab, faSearch);

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/air/about" component={About} />
        <Route path="/air/city" component={City} />
        <Route path="/air/home" component={AirHome} />
        <Route path="/air/join-network" component={JoinNetwork} />
        <Route path="/air/how-sensors-work" component={HowSensorsWork} />
        <Route path="/water/home" component={WaterHome} />
        <Route path="/sound/home" component={SoundHome} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
