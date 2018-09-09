import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles } from '@material-ui/core/styles';

const styles = {
    titleSection:{
        textAlign:'center',
        paddingTop:'2rem',
        paddingRight:'25%',
        paddingLeft:'25%'
    },
    menuButton:{
        color:'white'
    }
}

class LandingHeaderContent extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid className={classes.titleSection}>
                <Typography variant="display2" style={{color:'white'}}>WE HAVE TESTED THE QUALITY OF YOUR CITY'S AIR</Typography>
            </Grid>
         );
    }
}

LandingHeaderContent.PropTypes = {
    classes:PropTypes.object.isRequired,
}
 
export default withStyles(styles)(LandingHeaderContent);