import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

//import asserts
import graph from '../../../src/assets/images/Graphs.png';

const styles = {
    root: {
        flexGrow: 1,
        paddingBottom: '4rem'
    },
    subheading: {
        paddingTop: '1rem',
        paddingBottom: '0.5rem'
    },
    caption: {
        paddingTop: '1rem'
    }
}
class Issues extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
                <Typography variant="subheading" className={classes.subheading}>THE ISSUES</Typography>
                <Typography variant="title">Air polution causes 1 in 9 deaths.</Typography>
                <Typography variant="title">It is the biggest environmental health crisis we face</Typography>
                <Typography variant="caption" className={classes.caption}>We may not always see it, but air pollution is the cause of some of our most common illnesses</Typography>
                <Grid>
                    <img src={graph} alt="Graphs" height="200px" />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Issues);
