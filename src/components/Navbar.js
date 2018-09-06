import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';

import{ withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root:{
        flex:1,
        backgroundColor:'#2e2e2e'
    },
    toolbar:{
      paddingRight:'8%',
      paddingLeft:'8%'
    },
    airText:{
      color:'#2FB56B'
    },
    waterText:{
      color:'#4972B8'
    },
    soundText:{
      color:'#B64598'
    },
    fa:{
      padding:theme.spacing.unit * 1.5,
      color:'#2FB56B'
    },
    searchFa:{
      padding:theme.spacing.unit * 1.5,
      color:'#454545'
    }
})

class Navbar extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid>
                <AppBar position="static" className={classes.root} item xs={12}>
                    <Toolbar className={classes.toolbar}>
                      <Grid container direction="row" justify="flex-start" alignItems="center">
                        <MenuItem className={classes.airText}>AIR</MenuItem>
                        <MenuItem className={classes.waterText}>WATER</MenuItem>
                        <MenuItem className={classes.soundText}>SOUND</MenuItem>
                      </Grid>

                      <Grid container direction="row" justify="flex-end" alignItems="center"> 
                      <FontAwesomeIcon 
                            className={classes.searchFa}
                            icon="search"
                            size="lg"
                            />
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
                      </Grid>
                    </Toolbar>
                </AppBar>
            </Grid>
         );
    }
}

Navbar.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar);