import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/App.css';
import '../../assets/images/background/bgstories.jpg';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    titleSection: {
        textAlign: 'center',
        color: 'white'
    },
    button: {
        paddingTop: '2rem'
    }
}

class Stories extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className="Jumbotron" container item xs={12}>
                <Grid className={classes.titleSection} container direction="column" justify="center" alignItems="center">
                    <Typography variant="display2" style={{ color: 'white', textTrandform: 'Uppercase' }}>SENSORS STORIES</Typography>
                    <div className={classes.button}>
                        <Button variant="contained" >READ ON MEDIUM</Button>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

Stories.PropTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Stories);