import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/css/App.css';
import partnerlogo from '../assets/images/logos/partners.png';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Input } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles  = theme =>({
  root:{
    flexGrow:1,
    color:'white',
    backgroundColor:'#424143'
  },
  titles:{
    color:'white'
  },
  fa:{
    padding:'0.5rem'
  },
  connectContainer:{
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5, 
    paddingRight: theme.spacing.unit * 5
  },
  icons:{
    paddingTop:theme.spacing.unit * 1,
    paddingBottom:theme.spacing.unit * 2,
  },
  aboutContainer:{
    textAlign:'center',
    padding: theme.spacing.unit * 3,
    borderLeft:'1px solid white',
    borderRight:'1px solid white'
  },
  footerButton:{
    color:'white',
    backgroundColor:'#2A2A2B', 
    borderRadius:'0'
  },
  footerInput:{
    width:'190px',
    backgroundColor:'white',
    border:'1px solid white',
  },
  logoText:{
    textAlign:'center',
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 3
  }, 
  logoItems:{
    textAlign:'center',
    paddingLeft: theme.spacing.unit * 3
  }
});

class Footer extends Component {
    render() { 
      const { classes } = this.props;
        return ( 
              <Grid container item xs={12} item lg={12} className={classes.root}>
                <Grid container spacing={0} direction="row" justify="center" alignItems="center" className={classes.connectContainer}>
                  <Grid item xs={4} align="center">
                      <Typography variant="title" className={classes.titles}>CONNECT WITH US</Typography>
                        <div container direction="row" justify="center" alignItems="center" className={classes.icons}> 
                           <FontAwesomeIcon 
                             className={classes.fa}
                              icon={['fab', 'facebook-f']} 
                              size="lg"
                            />
                            <FontAwesomeIcon 
                              className={classes.fa}
                              icon={['fab', 'twitter']} 
                              size="lg" 
                            />
                            <FontAwesomeIcon
                              className={classes.fa}
                              icon={['fab', 'instagram']} 
                              size="lg"
                            />
                          </div>
                          <Grid direction="column" justify="space-around" alignItems="center" className={classes.footerMargin}>
                            <Input type="text" name="you@gmail.com" value="you@gmail.com" className={classes.footerInput}/> 
                            <p><Button variant="contained" className={classes.footerButton}>SUBSCRIBE TO UPDATES</Button></p>
                          </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.aboutContainer}>
                      <Typography variant="title" className={classes.titles}>ABOUT SENSORS.AFRICA</Typography>
                         <p>sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water
                          and sound polution to give citizens actionable information about their cities.
                        </p>
                        <Button variant="contained" className={classes.footerButton}>READ MORE</Button>
                    </Grid>
                    <Grid item xs={4} >
                      <p className={classes.logoText}>This initiative was seed-funded by innovateAFRICA, and is being 
                        incubated by Code for Africa</p>
                      <p><img src={partnerlogo} alt="Partner Logos" className={classes.logoText}/></p>
                    </Grid>
                 </Grid>
              </Grid>
         );
    }
}

Footer.PropTypes = {
  classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer);