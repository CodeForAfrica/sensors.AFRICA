import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import material components
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

//import components
import MenuBar from '../Header/MenuBar';
import AirHeaderContent from '../Header/JumbotronContent/AirHeaderContent';

const styles = {
    jumbotron: {
        backgroundColor: '#2FB56B',
        height: '400px',
        borderRadius: 'none'
    },
}

class AirHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.jumbotron}>
                <MenuBar />
                <AirHeaderContent />
            </Grid>
        );
    }
}

AirHeader.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AirHeader);