import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import material components
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

//import components
import MenuBar from '../Jumbotron/MenuBar';
import LandingHeaderContent from './LandingHeaderContent.js';

const styles = {
    jumbotron:{
        backgroundColor:'#2FB56B',
        height:'400px',
        borderRadius:'none'
    },
}

class HeaderIndex extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid className={classes.jumbotron}>
                <MenuBar/>
                <LandingHeaderContent />
            </Grid>
         );
    }
}
 
HeaderIndex.PropTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(HeaderIndex);