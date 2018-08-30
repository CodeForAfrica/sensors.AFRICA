import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import{ withStyles } from '@material-ui/core/styles';

const styles = {
    navbar:{
        backgroundColor:'#2e2e2e'
    } 
}

class Navbar extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar></Toolbar>
                </AppBar>
            </Grid>
            
         );
    }
}
 
Navbar.PropTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar);