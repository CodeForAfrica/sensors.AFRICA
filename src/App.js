import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ScrollToTop from './ScrollToTop';
import { URLS } from './components/DocumentHead/PageHeads';
import Home from './pages';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Air, {
  About as AirAbout,
  Data as AirData,
  HowSensorsWork as AirHowSensorsWork,
  City as AirCity,
  JoinNetwork as AirJoinNetwork,
  HealthAndClimateImpacts as AirHealthAndClimateImpacts
} from './pages/air';

const FONT_FAMILY = '"Montserrat", "sans-serif"';
const HEADINGS_FONT_FAMILY = '"Anton", "sans-serif"';

const THEME = createMuiTheme({
  // Green palette
  palette: {
    primary: { main: '#1a995b', light: '#2FB56B', dark: '#164B3E' },
    secondary: { main: '#424143', dark: '#2A2A2B' }
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
      fontFamily: FONT_FAMILY,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    fontSmallDefault: {
      fontSize: 14
    },
    buttonNext: {
      fontWeight: 700
    },
    useNextVariants: true
  },
  overrides: {
    MuiBadge: {
      badge: {
        color: '#bbb',
        fontFamily: HEADINGS_FONT_FAMILY,
        fontWeight: 500,
        textTransform: 'uppercase',
        borderRadius: 0
      }
    },
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
            <Route exact path={URLS.HOME} component={Home} />
            <Route
              exact
              path={URLS.AIR.HOME}
              render={props => <Air {...props} url={URLS.AIR.HOME} />}
            />
            <Route path={URLS.ABOUT} component={About} />
            <Route
              path={URLS.AIR.DATA}
              render={props => <AirData {...props} url={URLS.AIR.DATA} />}
            />
            <Route
              path={URLS.AIR.ABOUT}
              render={props => <AirAbout {...props} url={URLS.AIR.ABOUT} />}
            />
            <Route
              path={URLS.AIR.HOW_SENSORS_WORK}
              render={props => (
                <AirHowSensorsWork {...props} url={URLS.AIR.HOW_SENSORS_WORK} />
              )}
            />
            <Route
              exact
              path={URLS.AIR.CITY_HOME}
              render={() => <Redirect to={URLS.AIR.CITY_DEFAULT} />}
            />
            <Route
              path={URLS.AIR.CITY}
              render={props => <AirCity {...props} url={URLS.AIR.CITY} />}
            />
            <Route
              path={URLS.AIR.JOIN}
              render={props => (
                <AirJoinNetwork {...props} url={URLS.AIR.JOIN} />
              )}
            />
            <Route
              path={URLS.AIR.IMPACT}
              render={props => (
                <AirHealthAndClimateImpacts {...props} url={URLS.AIR.IMPACT} />
              )}
            />
            <Route
              render={props => <NotFound {...props} url={URLS.NOT_FOUND} />}
            />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
