import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

import IndoorIcon from '../assets/images/indooricon.png';
import OutdoorIcon from '../assets/images/outdooricon.png';


const styles = {
    root:{
        position:'absolute',
        display:'center',
        paddingTop:'3rem',
        paddingBotton:'3rem',
        paddingRight:'20%',
        paddingLeft:'20%',
        textAlign:'center'
    },
    card:{
        height:'250px',
        width:'350px',
        backgroundColor:'#164B3E',
        borderRadius:0,
        color:'white'
    },
    indoor:{
        backgroundColor:'#164B3E',

    },
    outdoor:{
        backgroundColor:'#164B3E',
    }

}
class IndoorOutdoor extends Component {
    render() { 
        const { classes } = this.props;
        return (  
            <Grid container item xs={12} direction="row" justify="space-around" alignItems="center" className={classes.root}>
                   <Card className={classes.card}>
                        <CardContent style={{color:'white'}}>
                            <img src={IndoorIcon} Alt="Housing" height="80px"/>
                            <Typography variant="title" style={{color:'white'}}>INDOOR POLLUTION</Typography>
                            <Typography variant="caption" style={{paddingTop:'0.5rem',paddingBottom:'1rem', color:'#F3F3F3'}} >Indoor pollution causes an estimated 4.3 million premature deaths each year</Typography>
                            <Button variant="outlined" color="upload" style={{color:'#F3F3F3', borderColor:'white'}}>READ MORE</Button>
                        </CardContent>
                   </Card>

                   <Card className={classes.card} >
                   <CardContent>
                        <img src={OutdoorIcon} Alt="Housing" height="80px"/>
                        <Typography variant="title" style={{color:'white'}}>OUTDOOR POLLUTION</Typography>
                            <Typography variant="caption" style={{paddingTop:'0.5rem',paddingBottom:'1rem', color:'#F3F3F3'}} >Indoor pollution causes an estimated 3 million premature deaths each year</Typography>
                            <Button variant="contained" color="upload" style={{ borderColor:'white'}}>READ MORE</Button>
                   </CardContent>
                
                   </Card>
            </Grid>
        );
    }
}
 
export default withStyles(styles)(IndoorOutdoor);