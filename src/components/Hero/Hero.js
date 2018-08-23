import React,{ Component } from 'react';
import '../../assets/css/App.css';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import logowhite from '../../assets/images/landing/logowhite.png';
import Quality from './Quality';


const mainContainer = {
    paddingLeft:'33%', 
    paddingRight:'33%'
}

class Hero extends Component { 
    render() { 
        return ( 
            <Grid spacing={0} className="Image-section">
                <Grid container justify="center" style={mainContainer}>
                    <img src={logowhite} alt="partners logo"/>
                    <Typography variant="headline" align="center" style={{color:'white'}}>
                    <h3>We are here to give you actionable information
                    about the quality of your city, water and sound</h3>
                    </Typography>
                 </Grid>
                 <Quality /> 
            </Grid> 
         );
    }
}
 
export default Hero;