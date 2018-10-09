import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

import Home from './pages';
import Air, {
  About as AirAbout,
  HowSensorsWork as AirHowSensorsWork,
  City as AirCity,
  JoinNetwork as AirJoinNetwork
} from './pages/air';
import SoundHome from './pages/sound/SoundHome';
import WaterHome from './pages/water/WaterHome';

import './assets/css/index.css';

fontawesome.library.add(fab, faSearch);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/air" component={Air} />
      <Route path="/air/about" component={AirAbout} />
      <Route path="/air/how-sensors-work" component={AirHowSensorsWork} />
      <Route path="/air/city" component={AirCity} />
      <Route path="/air/join-network" component={AirJoinNetwork} />
      <Route path="/water/home" component={WaterHome} />
      <Route path="/sound/home" component={SoundHome} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
