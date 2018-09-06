import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import material components
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

//import components
import MenuBar from './MenuBar.js';
import JumbotronContent from '../Jumbotron/JumbotronContent'

const styles = {
    jumbotron:{
        backgroundColor:'#454545',
        height:'400px',
        borderRadius:'none'
    },
}

class Jumbotron extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid className={classes.jumbotron}>
                <MenuBar/>
                <JumbotronContent />
            </Grid>
         );
    }
}
 
Jumbotron.PropTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Jumbotron);