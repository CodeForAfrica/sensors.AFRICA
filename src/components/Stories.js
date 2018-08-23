import React, { Component } from 'react';

import  '../assets/css/App.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../assets/images/landing/background.jpg';


const styles = {
    titleSection:{
        textAlign:'center',
        color:'white',
        paddingTop:'5rem',
        paddingRight:'25%',
        paddingLeft:'25%'
    },
    button:{
        paddingTop:'2rem'
    }

}
class Stories extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Paper className="Jumbotron">
                <div className={classes.titleSection}>
                    <Typography variant="display2" style={{color:'white',textTrandform:'Uppercase'}}>SENSORS STORIES</Typography>
                    <div className={classes.button}>
                    <Button variant="contained" >READ ON MEDIUM</Button>
                    </div>
                </div>
            </Paper>
         );
    }
}
 
Stories.PropTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Stories);