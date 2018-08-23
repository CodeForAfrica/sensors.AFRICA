import React, { Component } from 'react';

//Import assets
import logowhite from '../assets/images/logos/logowhite.png';

//Import material components
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
        height:'400px',
        borderRadius:'none'
    },

    titleSection:{
        textAlign:'center',
        color:'white',
        paddingTop:'2rem',
        paddingRight:'25%',
        paddingLeft:'25%'
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
                <img src={logowhite} alt="Sensors Africa Logo" height="100px"/>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
            </Grid>
                <div className={classes.titleSection}>
                    <Typography variant="display2" style={{color:'white'}}>About sensors.AFRICA</Typography>
                    <Typography variant="subheading"  style={{color:'white'}}>sensors.AFRICA is a pan-African citizen science initiative
                     that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their cities.
                    The initiative was seed-funded by innovateAFRICA, and is being incubated by Code For Africa</Typography>
                </div>
            </Paper>
         );
    }
}
 
Jumbotron.PropTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Jumbotron);