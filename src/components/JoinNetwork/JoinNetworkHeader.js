import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles } from '@material-ui/core/styles';

const styles = {
    jumbotron:{
        backgroundColor:'black',
        height:'400px',
        borderRadius:'none'
    },
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

class JoinNetworkHeader extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid className={classes.titleSection}>
                <Typography variant="display2" style={{color:'white',paddingBottom:'2rem'}}>JOIN THE NETWORK</Typography>
                <Typography variant="subheading"  style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nam ut purus quis massa interdum egestas quis id velit. Proin non nisi porta sem placerat blandit in eget turpis.
                 Quisque faucibus auctor ligula et posuere. Vestibulum ultrices lobortis turpis eu vulputate. 
                 Fusce eget erat libero.</Typography>
            </Grid>
         );
    }
}

JoinNetworkHeader.PropTypes = {
    classes:PropTypes.object.isRequired,
}
 
export default withStyles(styles)(JoinNetworkHeader);