import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HardwareInfo from '../../components/HardwareInfo';

class HowSensorsWork extends Component {
  render() { 
    return ( 
      <Grid>
        <Typography variant="subheading" style={{textAlign:'center',paddingTop:'2rem'}}>THE SCIENCE AND HARDWARE</Typography>
        <HardwareInfo />
      </Grid>
     );
  }
}
 
export default HowSensorsWork;