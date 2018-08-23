import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import business from '../assets/images/logos/business.png';
import premium from '../assets/images/logos/premium.png';
import guardian  from '../assets/images/logos/guardian.png';
import nation from '../assets/images/logos/nation.png';
import star from '../assets/images/logos/star.jpg';
import womanng from '../assets/images/logos/womanng.png';
import dailynation from '../assets/images/logos/dailynation.png';
import cable from '../assets/images/logos/cable.png';

import code from '../assets/images/logos/codeforafrica.png';
import innovate from '../assets/images/logos/innovate.jpg';

const styles = {
    typography:{
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        paddingTop:'5rem',
        textTransform:'Uppercase'
    }
}

class Partners extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
           <Grid container>
               
                    <Grid container direction="row" justify="center">
                        <Typography variant="subheading" item xs={3}  className={classes.typography}>Media partners</Typography>
                        <Grid contianer direction="row" justify="center" align="center">
                            <img item xs={3} src={business} alt="Business Daily Logo"/>
                            <img item xs={3} src ={premium} alt="Premium Times Logo"/>
                            <img item xs={3} src={guardian} alt="The guardian Logo"/>
                            <img item xs={3} src={nation} alt="The nation Logo" />
                            <img item xs={3} src={star} alt="The Star Logo"/>
                            <img item xs={3} src={womanng} alt="Woman NG Logo"/>
                            <img item xs={3} src={dailynation} alt="Daily Nation Logo"/>
                            <img item xs={3} src={cable} alt="The Cable Logo"/>
                        </Grid>
                    </Grid>
                    
                    <Grid container direction="column" justify="center" style={{paddingTop:'1rem', paddingBottom:'1rem'}}>
                        <Typography variant="subheading" className={classes.typography}>In partnership with</Typography>
                        <div contianer direction="row" justify="center" align="center">
                            <img src={code} item xs={3} alt="Code For Africa Logo"/>
                            <img src={innovate} item xs={3} alt="innovateAFRICA Logo"/>
                        </div>
                    </Grid>
           </Grid>
         );
    }
}

 
Partners.PropTypes = {
    classes : PropTypes.object.isRequired

}
export default withStyles(styles)(Partners);