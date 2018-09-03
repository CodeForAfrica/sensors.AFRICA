import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';

import{ withStyles } from '@material-ui/core/styles';

const styles = {
    root:{
        flex:1,
        backgroundColor:'#2e2e2e'
    },
    toolbar:{
      paddingRight:'8%',
      paddingLeft:'8%'
    },
    airText:{
      color:'green'
    },
    waterText:{
      color:'blue'
    },
    soundText:{
      color:'purple'
    },
    list:{

    }
}

class Navbar extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid>
                <AppBar position="static" className={classes.root}>
                    <Toolbar className={classes.toolbar} item xs={12}>
                        <List>
                          <MenuItem className={classes.airText}>AIR</MenuItem>
                          <MenuItem className={classes.waterText}>WATER</MenuItem>
                          <MenuItem className={classes.soundText}>SOUND</MenuItem>
                        </List>
                        <div>
                        <FontAwesomeIcon 
                             className={classes.fa}
                              icon={['fab', 'facebook-f']} 
                              size="lg"
                            />
                            <FontAwesomeIcon 
                              className={classes.fa}
                              icon={['fab', 'twitter']} 
                              size="lg" 
                            />
                            <FontAwesomeIcon
                              className={classes.fa}
                              icon={['fab', 'instagram']} 
                              size="lg"
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </Grid>
            
         );
    }
}
 
Navbar.PropTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar);