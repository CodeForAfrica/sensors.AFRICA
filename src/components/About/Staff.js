import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import jack from 'assets/images/team/jack.jpeg';
import kirah from 'assets/images/team/kirah.jpeg';
import constant from 'assets/images/team/constant.jpeg';
import gideon from 'assets/images/team/gideon.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    backgroundColor: 'white',
  },
  staffRoot: {
    textAlign: 'center',
  },
  card: {
    // height: 200,
    width: '100%',
    // margin: theme.spacing.unit * 3,
    backgroundColor: '#fff',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '0.1rem',
      marginRight: '0.1rem',
      width: '18.5rem',
      display: 'inline-block',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '1rem',
      marginRight: '1rem',
      width: '20.75rem',
    },
  },
  cardMedia: {
    height: 250,
    objectFit: 'cover',
    maxWidth: '20.75rem',
    margin: 'auto',
  },
  carContent: {
    padding: 0,
  },
  title: {
    fontWeight: 800,
    fontSize: '1rem',
    marginBottom: theme.spacing(3),
  },
  h6: {
    textTransform: 'Uppercase',
    fontWeight: 'bolder',
  },
  a: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}));

function Staff(props) {
  const classes = useStyles(props);
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h6" align="center" className={classes.title}>
          CONTRIBUTORS AND STAFF
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.staffRoot}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Chege"
              className={classes.cardMedia}
              image={constant}
              title="Chege"
            />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                CONSTANT CAP
              </Typography>
              <Typography variant="subtitle1">
                constant@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a className={classes.a} href="https://twitter.com/ConstantCap">
                  @ConstantCap
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              title="kirah"
              component="img"
              alt="Kirah"
              className={classes.cardMedia}
              image={kirah}
            />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                WARUKIRA THEURI
              </Typography>
              <Typography variant="subtitle1">
                kirah@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a className={classes.a} href="https://twitter.com/warukira_m">
                  @warukira_m
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Chege"
              className={classes.cardMedia}
              image={jack}
              title="Chege"
            />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                JACK MCLEANS
              </Typography>
              <Typography variant="subtitle1">
                jack@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a
                  className={classes.a}
                  href="https://twitter.com/jack_the_nerd"
                >
                  @jack_the_nerd
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Chege"
              className={classes.cardMedia}
              image={gideon}
              title="Chege"
            />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                GIDEON MAINA
              </Typography>
              <Typography variant="subtitle1">
                gideon@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a className={classes.a} href="https://twitter.com/gmaina">
                  @gmaina
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Staff;
