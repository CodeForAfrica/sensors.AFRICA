import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

//import assets
import logowhite from '../../assets/Logo-White.png';

import Grid from '@material-ui/core/Grid';
import ViewHeadline from '@material-ui/icons/ViewHeadline';

const styles = {
  root:{
    paddingRight:'8%',
    paddingLeft:'8%'
  },
  icon:{
    color:'white',
    paddingTop:'3%'
  }
}

class MenuBar extends Component {
    render() { 
      const { classes } = this.props;
        return ( 
            <Grid container item xs={12} spacing={24} direction="row" justify="space-between" alignItems="flex-start" className={classes.root}>
              <img src={logowhite} alt="Sensors Africa Logo" height="100px"/>
              <ViewHeadline className={classes.icon}/>
            </Grid>
         );
    }
}
 

export default withStyles(styles)(MenuBar);