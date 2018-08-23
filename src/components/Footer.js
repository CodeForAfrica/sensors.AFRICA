import React, { Component } from 'react';
import '../assets/css/App.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Input } from '@material-ui/core';

import partnerlogo from '../assets/images/landing/partnerslogoswhite.png';

const fa = {
  color:'white',
  padding:'0.5rem'
}

class Footer extends Component {
    render() { 
        return ( 
              <Grid container item xs={24} style={{backgroundColor:'#424143',color:'white'}}>
              <Grid container spacing={0} direction="row" justify="center" alignItems="center" style={{paddingLeft:'10rem', paddingRight:'10rem',paddingTop:'2rem',paddingBottom:'2rem'}}>
                  <Grid item xs={4} align="center">
                    <Typography variant="heading">CONNECT WITH US</Typography>
                    <div container direction="row" justify="center" style={{paddingTop:'1rem'}}> 
                        <a href="/facebook"><i class="fab fa-facebook-f fa-lg" style={fa}></i></a>
                        <a href="/twitter"><i class="fab fa-twitter fa-lg" style={fa}></i></a>
                        <a href="/instagram"><i class="fab fa-instagram fa-lg" style={fa} ></i></a>
                      </div>
                      <div style={{paddingTop:'2rem'}}>
                        <Input type="text" name="you@gmail.com" value="you@gmail.com" style={{border:'1px solid white',backgroundColor:'white',width:'190px'}}/> 
                        <p><Button variant="contained" style={{backgroundColor:'#2A2A2B', color:'white',borderRadius:'0'}}>SUBSCRIBE TO UPDATES</Button></p> 
                      </div>
                    </Grid>
                  <Grid item xs={4} style={{borderLeft:'1px solid white', borderRight:'1px solid white',padding:'2rem',textAlign:'center'}}>
                    <Typography variant="heading">ABOUT SENSORS.AFRICA</Typography>
                    <p>sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water
                      and sound polution to give citizens actionable information about their cities.
                    </p>
                    <Button variant="contained" color="upload" style={{backgroundColor:'#2A2A2B', color:'white',borderRadius:'0'}}>READ MORE</Button>
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