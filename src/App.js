import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ScrollToTop from './ScrollToTop';
import Home from './pages';
import Air, {
  About as AirAbout,
  HowSensorsWork as AirHowSensorsWork,
  City as AirCity,
  JoinNetwork as AirJoinNetwork
} from './pages/air';

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
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    h2: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    h3: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    h4: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    h5: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    h6: {
      color: '#424143',
      fontFamily: HEADINGS_FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    useNextVariants: true
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      }
    },
    MuiCard: {
      root: {
        borderRadius: 0,
        boxShadow: 'none'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#F3F3F3'
      }
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/air" component={Air} />
            <Route path="/air/about" component={AirAbout} />
            <Route path="/air/how-sensors-work" component={AirHowSensorsWork} />
            <Route path="/air/city" component={AirCity} />
            <Route path="/air/join-network" component={AirJoinNetwork} />
            {/* <Route exact path="/water" component={WaterHome} />
            <Route exact path="/sound" component={SoundHome} /> */}
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
