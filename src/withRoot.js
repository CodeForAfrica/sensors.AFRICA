import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@materieal-ui/core/styles';
import CssBaseline from '@material/core/CssBaseline';

const theme = createMuiTheme({
  // Green palette
  palette: {
    primary: { main: '#2FB56B', light: '#2FB56B', dark: '#164B3E' }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
}

export default withRoot;
