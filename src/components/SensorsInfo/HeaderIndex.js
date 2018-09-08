import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import material components
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

//import components
import MenuBar from '../Jumbotron/MenuBar';
import HeaderInfoHeaderContent from '../SensorsInfo/HardwareInfoHeaderContent'

const styles = {
    jumbotron:{
        backgroundColor:'#2FB56B',
        height:'450px',
        borderRadius:'none'
    },
}

class Jumbotron extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid className={classes.jumbotron}>
                <MenuBar/>
                <HeaderInfoHeaderContent />
            </Grid>
         );
    }
}
 
Jumbotron.PropTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Jumbotron);