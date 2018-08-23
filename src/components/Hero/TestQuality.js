import React, { Component } from 'react';

//import material componenets
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

//import images
import air from '../../assets/images/button/airbtn.png';
import water from '../../assets/images/button/waterbtn.png';
import sound from '../../assets//images/button/soundbtn.png';

const gridContainer = {
    paddingTop:'3rem',
    textTransform:'Uppercase'
}
const img = {
    height:'200px',
    width:'250px'
}

class TestQuality extends Component {
    render() { 
        return ( 
            <Grid style={gridContainer}>
              <Typography variant="subheading" gutterBottom align="center" style={{color:'white'}}>Test the quality of the city's</Typography>
                <Grid container direction="row" justify="center" alignItems="center" style={{paddingTop:'1rem'}}>
                    <img src={air} alt="Air" style={img}/>
                    <img src={water} alt="water" style={img}/>
                    <img src={sound} alt="sound" style={img}/>
                </Grid>
            </Grid>
           
         );
    }
}
 
export default TestQuality;