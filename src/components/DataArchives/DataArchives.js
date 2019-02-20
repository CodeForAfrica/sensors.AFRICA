import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  },
  main: {
    paddingBottom: '3rem',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem'
    }
  },
  link: { color: theme.palette.primary.dark },
  typography: {
    paddingTop: theme.spacing.unit * 6,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 700,
    fontSize: '1rem',
    paddingTop: '2rem',
    paddingBottom: '1rem'
  },
  dlFirst: {
    padding: '1rem 0.5rem',
    borderTop: '1px solid #f0f4f7',
    borderBottom: '1px solid #f0f4f7',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  dl: {
    padding: '1rem 0.5rem',
    borderBottom: '1px solid #f0f4f7',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  dt: {
    [theme.breakpoints.up('md')]: {
      width: '29.8125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '39.75rem'
    },
    marginBottom: '0.5rem'
  },
  dd: {
    [theme.breakpoints.up('md')]: {
      width: '29.8125rem',
      float: 'left'
    },
    [theme.breakpoints.up('lg')]: {
      width: '39.75rem'
    }
  },
  code: {
    display: 'inline-block',
    color: theme.palette.secondary.main,
    fontSize: theme.typography.caption.fontSize
  },
  query: {
    fontSize: theme.typography.caption.fontSize
  },
  queryParam: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.caption.fontSize
  },
  queryDescription: {
    fontSize: theme.typography.caption.fontSize
  },
  var: {
    color: theme.palette.primary.dark,
    fontStyle: 'italic',
    fontSize: theme.typography.caption.fontSize
  },
  wiki: {
    marginTop: '2rem'
  }
});
const sensors = 'http://api.airquality.codeforafrica.org/v1/sensor/{sensorID}/';
const query = 'http://api.airquality.codeforafrica.org/v1/filter/{query}';
const data = 'http://api.airquality.codeforafrica.org/v1/data/';
const now = 'http://api.airquality.codeforafrica.org/v1/now/';
const type = '{sensor type}';
const area = '{lat, lon, distance}';
const box = '{lat1, lon1, lat2, lon2}';
const countryCode = '{country code}';

function DataArchives({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        className={classes.main}
      >
        <Grid item xs={12}>
          <Typography
            variant="h6"
            className={classes.typography}
            component="h2"
          >
            Accessing Sensors Data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title} component="h3">
            Accessing API Data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" component="p">
            The primary way to access sensor data is via API endpoints. There
            are several public endpoints:
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.dlFirst}
        >
          <Grid item className={classes.dt}>
            <a
              className={classes.link}
              href="http://api.airquality.codeforafrica.org/v1/sensor/%7BsensorID%7D/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>{sensors}</code>
            </a>{' '}
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides all measurements from the last 5 minutes for one sensor.
              This data is only available if the sensor is publicly accessible.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <a
              className={classes.link}
              href="http://api.airquality.codeforafrica.org/v1/now/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>{now}</code>
            </a>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides all measurements from the last 5 minutes for all publicly
              accessible sensors.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <a
              className={classes.link}
              href="http://api.airquality.codeforafrica.org/v1/filter/%7Bquery%7D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>{query}</code>
            </a>
          </Grid>
          <Grid className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides all measurements from the last 5 minutes for all publicly
              accessible sensors filtered by a query.
            </Typography>
            <Typography variant="body2">Supported queries are:</Typography>
            <Typography
              variant="body2"
              component="ul"
              style={{ listStyle: 'none', marginTop: '0.5rem' }}
            >
              <li className={classes.query}>
                <code className={classes.queryParam}>type</code> ={' '}
                <code className={classes.queryDescription}>{type}</code>: comma
                separated list of sensor types, i.e{' '}
                <code className={classes.var}>SDS011</code> ,
                <code className={classes.var}> DHT22</code>
              </li>
              <li className={classes.query}>
                <code className={classes.queryParam}>area</code> ={' '}
                <code>{area}</code>: provides all sensors within a max radius.
              </li>
              <li className={classes.query}>
                <code className={classes.queryParam}>box</code>={' '}
                <code className={classes.queryDescription}>{box}</code>:
                provides all sensors in a &lsquo;box&rsquo; with the given
                coordinates.
              </li>
              <li className={classes.query}>
                {' '}
                <code className={classes.queryParam}>country</code>={' '}
                <code className={classes.queryDescription}>{countryCode}</code>:
                i.e. <code className={classes.var}>KE, TZ, NG, ZA, ... </code>
              </li>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <a
              className={classes.link}
              href="http://api.airquality.codeforafrica.org/v1/data/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>{data}</code>
            </a>
          </Grid>
          <Grid className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides all measurements for all publicly accessible sensors
              stored in our database.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.wiki}>
          <Typography variant="body2">
            <em>
              <strong>
                For a more detailed documentation on how to access API data ,
                visit the sensors.AFRICA{' '}
                <a
                  className={classes.link}
                  href="https://github.com/CodeForAfricaLabs/sensors.AFRICA-AQ-sensors-software/wiki/APIs#api-httpapiairqualitycodeforafricaorg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WIKI
                </a>{' '}
              </strong>
            </em>
          </Typography>

          <Typography variant="h6" className={classes.title} component="h3">
            Accessing Archive Data
          </Typography>
          <Typography variant="body2">
            In addition to sensor data accessible via the API, data is also
            exported once a day in CSV file format and made available at{' '}
            <a
              className={classes.link}
              href="https://africaopendata.org/group/sensorsafrica-airquality-archive"
              target="_blank"
              rel="noopener noreferrer"
            >
              africaopendata.org/group/sensorsafrica-airquality-archive
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

DataArchives.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataArchives);
