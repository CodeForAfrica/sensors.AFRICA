import React, { Component } from 'react';

import PropTypes from 'prop-types';
import{ withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
    navbar:{
        backgroundColor:'#2e2e2e'

    }
    
}

class Navbar extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <div>
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar >
                        <Typography variant="headline" style={{color:'white'}}>sensors.AFRICA</Typography>
                    </Toolbar>
                </AppBar>
            </div>
            
         );
    }
}
 

Navbar.PropTypes ={
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Navbar);