import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { Grid, Card, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import air from '../../assets/images/button/airbtn.png';
import water from '../../assets/images/button/waterbtn.png';
import sound from '../../assets/images/button/soundbtn.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  img: {
    height: 200,
    width: 'auto',
    padding: '3rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  airCard: {
    backgroundColor: '#2FB56B',
    borderRadius: 0,
    height: 250,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  waterCard: {
    backgroundColor: '#4972B8',
    borderRadius: 0,
    height: 250,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  soundCard: {
    backgroundColor: '#B64598',
    borderRadius: 0,
    height: 250,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  popup: {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '2',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: '0',
    visibility: 'hidden',
    transform: 'scale(1.1)',
    transition: 'visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s',
  },
  popupcontent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    backgroundColor: 'white',
    padding: '1rem 1.5rem',
    width: '24rem',
  },
  closeButton: {
    float: 'right',
    width: '1.5rem',
    lineHeight: '1.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    backgroundColor: 'lightgray',

    '&:hover': {
      backgroundColor: 'darkgray'
    }
 },
  showpopup: {
    opacity: '1',
    visibility: 'visible',
    transform: 'scale(1.0)',
    transition: 'visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s'
  }
});

class TestQuality extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false};

    this.showAlert = this.showAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  showAlert() {
    this.setState(state => ({
      show: true
    }));
  }

  closeAlert() {
    this.setState(state => ({
      show: false
    }));
  }

  render() {

    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h6"
            gutterBottom
            align="center"
            style={{ color: 'white', textTransform: 'uppercase' }}
          >
            Test the quality of the city&apos;s
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ paddingTop: '1rem' }}
          >
            <Grid id='popupbox' className={classNames(classes.popup, {
            [classes.showpopup]: this.state.show,  })}>
                <div className={classes.popupcontent}>
                    <span onClick={this.closeAlert} className={classes.closeButton}>&times;</span>
                    <h1>Coming Soon</h1>
                </div>
            </Grid>
            <Grid item>
              <Link to="/air">
                <Card className={classes.airCard}>
                  <CardMedia
                    component="img"
                    className={classes.img}
                    image={air}
                    title="Air"
                  />
                </Card>
              </Link>
            </Grid>
            <Grid item>
              <a onClick={this.showAlert}>
                <Card className={classes.waterCard}>
                  <CardMedia
                    component="img"
                    className={classes.img}
                    image={water}
                    title="water"
                  />
                </Card>
              </a>
            </Grid>
            <Grid item>
              <a onClick={this.showAlert}>
                <Card className={classes.soundCard}>
                  <CardMedia
                    component="img"
                    className={classes.img}
                    image={sound}
                    title="sound"
                  />
                </Card>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TestQuality.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TestQuality);
