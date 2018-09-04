import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    kickstart:{
        paddingTop:'2rem',
        paddingBottom:'2rem',
        height:'350px'
    },
    card:{
        height:'150px',
        width:'150px',
        margin:'2rem',  
    },
    cardContent:{
        backgroundColor:'#E8E8E8'
    },
    typography:{
      margin:'2rem'
    },
    button:{
      backgroundColor:'green',
      color:'white',
      borderRadius:'0'
    },
    uploadButton:{
      color:'green',
      borderRadius:'0'
    }
}

class Kickstart extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid container direction="row" justify="center" align="center" className={classes.kickstart}>
                    <Grid item xs={3} className={classes.card}>
                        <Card className={classes.cardContent}>
                            <CardContent className={classes.titleContent}>
                                <Typography variant="title" className={classes.typography}>SUPPORT EXISTING SENSORS NETWORKS</Typography>
                                  <Button variant="outlined" color="Upload" className={classes.uploadButton}>VIEW DATABASE</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className={classes.card}>
                        <Card className={classes.cardContent}>
                            <CardContent className={classes.titleContent}>
                                <Typography variant="title" className={classes.typography} >KICKSTART YOUR CITY'S OWN SENSOR PROGRAM</Typography>
                                <Button variant="contained" className={classes.button}>SIGN UP HERE</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3} className={classes.card}>
                        <Card className={classes.cardContent}>
                            <CardContent className={classes.titleContent}>
                                <Typography variant="title" className={classes.typography}>LET YOUR CITY KNOW THAT CLEAN AIR MATTERS TO YOU</Typography>
                                <Button variant="contained" className={classes.button}>SIGN UP HERE</Button>
                            </CardContent>
                        </Card>
                    </Grid>
            </Grid>
         );
    }
}

Kickstart.PropTypes ={
    classes:PropTypes.object.isRequired
}
 
export default withStyles(styles)(Kickstart);