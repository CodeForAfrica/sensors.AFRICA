import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/css/App.css';
import partnerlogo from '../assets/images/logos/partners.png';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Input } from '@material-ui/core';


const fa = {
  color:'white',
  padding:'0.5rem'
}
const title = {
  color:'white'
}

class Footer extends Component {
    render() { 
        return ( 
              <Grid container item xs={12} style={{backgroundColor:'#424143',color:'white'}}>
              <Grid container spacing={0} direction="row" justify="center" alignItems="center" style={{paddingLeft:'10rem', paddingRight:'10rem',paddingTop:'2rem',paddingBottom:'2rem'}}>
                  <Grid item xs={4} align="center">
                    <Typography variant="title" style={title}>CONNECT WITH US</Typography>
                    <div container direction="row" justify="center" style={{paddingTop:'1rem'}}> 
                      <FontAwesomeIcon 
                        style={fa}
                        icon={['fab', 'facebook-f']} 
                        size="lg"
                      />
                      <FontAwesomeIcon 
                        style={fa}
                        icon={['fab', 'twitter']} 
                        size="lg" 
                      />
                      <FontAwesomeIcon
                        style={fa} 
                        icon={['fab', 'instagram']} 
                        size="lg"
                      />
                    </div>
                      <div style={{paddingTop:'2rem'}}>
                        <Input type="text" name="you@gmail.com" value="you@gmail.com" style={{border:'1px solid white',backgroundColor:'white',width:'190px'}}/> 
                        <p><Button variant="contained" style={{backgroundColor:'#2A2A2B', color:'white',borderRadius:'0'}}>SUBSCRIBE TO UPDATES</Button></p> 
                      </div>
                    </Grid>
                  <Grid item xs={4} style={{borderLeft:'1px solid white', borderRight:'1px solid white',padding:'2rem',textAlign:'center'}}>
                    <Typography variant="title" style={title}>ABOUT SENSORS.AFRICA</Typography>
                    <p>sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water
                      and sound polution to give citizens actionable information about their cities.
                    </p>
                    <Button variant="contained" style={{backgroundColor:'#2A2A2B', color:'white',borderRadius:'0'}}>READ MORE</Button>
                  </Grid>

                  <Grid item xs={4}>
                     <p style={{paddingTop:'4rem',paddingLeft:'4rem', textAlign:'center'}}>This initiative was seed-funded by innovateAFRICA, and is being 
                       incubated by Code for Africa</p>
                       <p>
                         <img src={partnerlogo} alt="Partner Logos" style={{paddingLeft:'3rem'}}/>
                       </p>
                  </Grid>
              </Grid>
              </Grid>
         );
    }
}

export default Footer;