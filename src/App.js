import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './pages';
import Air, {
  About as AirAbout,
  HowSensorsWork as AirHowSensorsWork,
  City as AirCity,
  JoinNetwork as AirJoinNetwork
} from './pages/air';
import SoundHome from './pages/sound/SoundHome';
import WaterHome from './pages/water/WaterHome';

const FONT_FAMILY = '"Montserrat", "sans-serif"';
const HEADINGS_FONT_FAMILY = '"Anton", "sans-serif"';

const THEME = createMuiTheme({
  // Green palette
  palette: {
    primary: { main: '#1a995b', light: '#2FB56B', dark: '#164B3E' }
  },
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    h1: {
      fontFamily: HEADINGS_FONT_FAMILY
    },
    h2: {
      fontFamily: HEADINGS_FONT_FAMILY
    },
    h3: {
      fontFamily: HEADINGS_FONT_FAMILY
    },
    h4: {
      fontFamily: HEADINGS_FONT_FAMILY
    },
    h5: {
      fontFamily: HEADINGS_FONT_FAMILY
    },
    h6: {
      fontFamily: HEADINGS_FONT_FAMILY
    },
    useNextVariants: true
  }
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/air" component={Air} />
          <Route path="/air/about" component={AirAbout} />
          <Route path="/air/how-sensors-work" component={AirHowSensorsWork} />
          <Route path="/air/city" component={AirCity} />
          <Route path="/air/join-network" component={AirJoinNetwork} />
          <Route exact path="/water" component={WaterHome} />
          <Route exact path="/sound" component={SoundHome} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
