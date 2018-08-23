import React, { Component } from 'react';

import logowhite from '../assets/images/landing/logowhite.png';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import MenuIcon from "@material-ui/core/Menu";

const styles = {
    jumbotron:{
        backgroundColor:'#454545',
        height:'500px'
    },
    titleSection:{
        textAlign:'center',
        color:'white',
        paddingTop:'2rem',
        paddingRight:'25%',
        paddingLeft:'25%'
    },
    img:{
        height:'2rem'
    },
    menuButton:{
        color:'white'
    }

}
class Jumbotron extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Paper className={classes.jumbotron}>
            <Grid container direction="row" justify="sapce-between" alignItems="flex-start">
                <img src={logowhite} alt="Sensors Africa Logo" classname={classes.img}/>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
            </Grid>
                <div className={classes.titleSection}>
                    <Typography variant="display1" style={{color:'white'}}>About sensors.AFRICA</Typography>
                    <Typography variant="headline"  style={{color:'white'}}>sensors.AFRICA is a pan-African citizen science initiative
                     that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their citizens
                     .The initiative was seed-funded by innovateAFRICA, and is being incubated by Code For Africa</Typography>
                </div>
            </Paper>
         );
    }
}
 
Jumbotron.PropTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Jumbotron);