import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const styles = theme =>({
    root:{
      flexGrow:1,
      paddingBottom: theme.spacing.unit * 3,
      paddingTop:theme.spacing.unit * 3
    },
    card:{
        height:'200px',
        width:'300px',
        margin: theme.spacing.unit * 3,
        backgroundColor: theme.palette.primary.light
    },
    cardMedia:{
       height:'100%'
    }
});

class Staff extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <React.Fragment>
             <Typography variant="heading" align="center">COLLABORATION AND STAFF</Typography>
              <Grid container direction="row" justify="center" align="center" className={classes.root}>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardMedia 
                            className={classes.cardMedia}
                            title="Team"
                        />
                    </Card>
                    <Typography variant="title">Name.Surname</Typography>
                    <Typography variant="subheading">Editor at codeforafrica.org</Typography>
                </Grid>
                <Grid  item xs={4}>
                  <Card className={classes.card}>
                    <CardMedia 
                        className={classes.cardMedia}
                        title="Team"
                        />
                  </Card>
                  <Typography variant="title">Name.Surname</Typography>
                  <Typography variant="subheading">Editor at codeforafrica.org</Typography>
                </Grid>
                <Grid  item xs={4}>
                  <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        title="Team"
                        />
                  </Card>
                  <Typography variant="title">Name.Surname</Typography>
                  <Typography variant="subheading">Editor at codeforafrica.org</Typography>
                </Grid>
                <Grid  item xs={4}>
                  <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        title="Team"
                        />
                  </Card>
                  <Typography variant="title">Name.Surname</Typography>
                  <Typography variant="subheading">Editor at codeforafrica.org</Typography>
                </Grid>

                <Grid  item xs={4}>
                  <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        title="Team"
                        />
                  </Card>
                  <Typography variant="title">Name.Surname</Typography>
                  <Typography variant="subheading">Editor at codeforafrica.org</Typography>
                </Grid>
                <Grid  item xs={4}>
                  <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        title="Team"
                        />
                  </Card>
                  <Typography variant="title">Name.Surname</Typography>
                  <Typography variant="subheading">Editor at codeforafrica.org</Typography>
                </Grid>
             </Grid>
            </React.Fragment>
         );
    }
}
 

Staff.PropTypes ={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Staff);