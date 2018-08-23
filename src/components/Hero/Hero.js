import React,{ Component } from 'react';

import TestQuality from './TestQuality';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import '../../assets/css/App.css';
import logowhite from '../../assets/images/logos/logowhite.png';


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
                    We are here to give you actionable information
                    about the quality of your air, water and sound.
                    </Typography>
                 </Grid>
                 <TestQuality /> 
            </Grid> 
         );
    }
}
 
export default Hero;