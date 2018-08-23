import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from 'pages/Home';

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Home/> 
        </React.Fragment>
    );
  }
}
export default App;