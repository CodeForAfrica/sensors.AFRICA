import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import air from '../../assets/images/landing/airbtn.png';
import water from '../../assets/images/landing/waterbtn.png';
import sound from '../../assets//images/landing/soundbtn.png';

const gridContainer = {
    paddingTop:'2rem',
}

const img = {
    height:'200px',
    width:'250px'
}

class Quality extends Component {
    render() { 
        return ( 
            <Grid style={gridContainer}>
              <Typography variant="display1" gutterBottom align="center" style={{color:'white'}}>Test the quality of the city's</Typography>
                <Grid container direction="row" justify="center" alignItems="center">
                    <img src={air} alt="Air" style={img}/>
                    <img src={water} alt="water" style={img}/>
                    <img src={sound} alt="sound" style={img}/>
                </Grid>
            </Grid>
           
         );
    }
}
 
export default Quality;