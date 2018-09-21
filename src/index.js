import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";
import City from "pages/air/City";
import AirHome from "pages/air/AirHome";
import SoundHome from "pages/sound/SoundHome";
import WaterHome from "pages/water/WaterHome";
import JoinNetwork from "pages/air/JoinNetwork";
import HowSensorsWork from "./pages/air/HowSensorsWork";

import "../src/assets/css/index.css";
import fontawesome from "@fortawesome/fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(fab, faSearch);

ReactDOM.render(
  <BrowserRouter>
    {/* Declare routes for the app*/}
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/air/city" component={City} />
        <Route path="/air/home" component={AirHome} />
        <Route path="/air/join-network" component={JoinNetwork} />
        <Route path="/air/how-sensors-work" component={HowSensorsWork} />
        <Route path="/water/home" component={WaterHome} />
        <Route path="/sound/home" component={SoundHome} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
