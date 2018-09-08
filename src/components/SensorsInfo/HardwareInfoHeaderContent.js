import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles } from '@material-ui/core/styles';

const styles = {
    titleSection:{
        textAlign:'center',
        paddingTop:'2rem',
        paddingRight:'20%',
        paddingLeft:'20%'
    },
    menuButtton:{
        color:'white'
    },
    headerText:{
        color:'white',
        paddingTop:'1rem'
    }
}

class HardwareInfoHeaderContent extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Grid className={classes.titleSection}>
                <Typography variant="display1" className={classes.headerText}>THE SENSORS & THEIR INNER WORKING</Typography>
                <Typography variant="subheading" className={classes.headerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam efficitur turpis id ipsum volutpat laoreet. Nunc tempor tincidunt ex consequat rhoncus. Aenean condimentum 
                metus enim, et congue lorem ultricies vitae. Vestibulum nec orci a nisl volutpat faucibus eget sit amet mauris.</Typography>

                <Typography variant="subheading" className={classes.headerText}>Suspendisse varius tortor augue, sit amet pulvinar leo mollis et. Morbi cursus non urna a vulputate. Proin fermentum 
                vitae ipsum sit amet viverra. Cras ut libero rhoncus, pellentesque ipsum a, lobortis nisi. Etiam sed risus ultricies,
                 tempus dui a, accumsan quam. </Typography>
                
            </Grid>
         );
    }
}

HardwareInfoHeaderContent.PropTypes = {
    classes:PropTypes.object.isRequired,
}
 
export default withStyles(styles)(HardwareInfoHeaderContent);