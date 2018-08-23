import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    kickstart:{
        paddingTop:'2rem',
        paddingBottom:'2rem',
        height:'300px'

    },
    card:{
        height:'150px',
        width:'150px',
        margin:'2rem',
       
    },
    cardContent:{
        backgroundColor:'#E8E8E8'
    },

}

class Kickstart extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid container direction="row" justify="center" align="center" className={classes.kickstart}>
                    <Grid item xs={3} className={classes.card}>
                        <Card className={classes.cardContent}>
                            <CardContent className={classes.titleContent}>
                                <Typography variant="title" >SUPPORT EXISTING SENSORS NETWORKS</Typography>
                  
                                  <Button variant="contained" color="Upload">VIEW DATABASE</Button>
            
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={3} className={classes.card}>
                        <Card className={classes.cardContent}>
                            <CardContent className={classes.titleContent}>
                                <Typography variant="title" >KICKSTART YOUR CITY'S OWN SENSOR PROGRAM</Typography>
                                <Button variant="contained" color="primary">SIGN UP HERE</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={3} className={classes.card}>
                        <Card className={classes.cardContent}>
                            <CardContent className={classes.titleContent}>
                                <Typography variant="title" >LET YOUR CITY KNOW THAT CLEAN AIR MATTERS TO YOU</Typography>
                                <Button variant="contained" color="primary">SIGN UP HERE</Button>
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