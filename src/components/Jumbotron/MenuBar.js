import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

//import assets
import logowhite from '../../assets/Logo-White.png';

import Grid from '@material-ui/core/Grid';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const styles = {
  root:{
    paddingRight:'8%',
    paddingLeft:'8%'
  },
  icon:{
    color:'white',
    paddingTop:'4%'
  }
}

class MenuBar extends Component {
    render() { 
      const { classes } = this.props;
        return ( 
            <Grid container item xs={12} spacing={24} direction="row" justify="space-between" alignItems="flex-start" className={classes.root}>
              <img src={logowhite} alt="Sensors Africa Logo" height="100px"/>
              <SkipPreviousIcon className={classes.icon}/>
            </Grid>
         );
    }
}
 

export default withStyles(styles)(MenuBar);