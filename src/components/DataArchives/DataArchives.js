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
    [theme.breakpoints.up('xs')]: {
      direction: 'ltr'
    },
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
  blockquote: {
    [theme.breakpoints.only('xs')]: {
      marginLeft: 0
    }
  },
  dt: {
    marginBottom: '0.5rem'
  },
  dd: {
    marginLeft: 0,
    marginBottom: '1rem'
  },
  code: {
    boxSizing: 'border-box',
    display: 'inline-block',
    background: '#fafcfc',
    padding: '12px 10px',
    border: '1px solid #f0f4f7',
    borderRadius: '4px',
    lineHeight: '20px',
    fontSize: '14px'
  },
  var: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.fontSmallDefault.fontSize
  },
  queries: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.fontSmallDefault.fontSize
  }
});
const sensors = 'http://api.airquality.codeforafrica.org/v1/sensor/{sensorID}/';
const query = 'http://api.airquality.codeforafrica.org/v1/filter/{query}';
const data = 'http://api.airquality.codeforafrica.org/v1/data/';
const now = 'http://api.airquality.codeforafrica.org/v1/now/';
const type = '{ sensor type }';
const area = '{ lat, lon, distance }';
const box = '{ lat1, lon1, lat2, lon2 }';
const countryCode = '{ country code }';

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
        xs={12}
        sm={6}
        justify="center"
        align="left"
        className={classes.main}
      >
        <Typography variant="h6" className={classes.typography} component="h2">
          Accessing Sensors Data
        </Typography>
        <Typography variant="h6" className={classes.title} component="h3">
          Accessing API Data
        </Typography>
        <Typography variant="body2" component="p">
          The primary way to access sensor data is via API endpoints. There are
          several public endpoints:
        </Typography>
        <p
          className={classes.blockquote}
          cite="https://github.com/CodeForAfricaLabs/sensors.AFRICA-AQ-sensors-software/wiki/APIs#api-httpapiairqualitycodeforafricaorg"
        >
          <dl>
            <dt className={classes.dt}>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/sensor/%7BsensorID%7D/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{sensors}</code>
              </a>{' '}
            </dt>
            <dd className={classes.dd}>
              <Typography variant="body2" component="p">
                Provides all measurements from the last 5 minutes for one
                sensor. This data is only available if the sensor is publicly
                accessible.
              </Typography>
            </dd>
            <dt className={classes.dt}>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/now/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{now}</code>
              </a>
            </dt>
            <dd className={classes.dd}>
              <Typography variant="body2" component="p">
                Provides all measurements from the last 5 minutes for all
                publicly accessible sensors.
              </Typography>
            </dd>
            <dt className={classes.dt}>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/filter/%7Bquery%7D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{query}</code>
              </a>
            </dt>
            <dd className={classes.dd}>
              <Typography variant="body2" component="p">
                Provides all measurements from the last 5 minutes for all
                publicly accessible sensors filtered by a query.
              </Typography>
              <Typography variant="body2">Supported queries are:</Typography>
              <Typography variant="body2">
                <ul style={{ listStyle: 'none', marginTop: '0.5rem' }}>
                  <li>
                    <code className={classes.queries}>type</code> ={' '}
                    <code>{type}</code>: comma separated list of sensor types,
                    i.e <var className={classes.var}>SDS011</var> ,
                    <var className={classes.var}> DHT22</var>
                  </li>
                  <li>
                    <code className={classes.queries}>area</code> ={' '}
                    <code>{area}</code>: provides all sensors within a max
                    radius.
                  </li>
                  <li>
                    <code className={classes.queries}>box</code>={' '}
                    <code>{box}</code>: provides all sensors in a
                    &lsquo;box&rsquo; with the given coordinates.
                  </li>
                  <li>
                    {' '}
                    <code className={classes.queries}>country</code>={' '}
                    <code>{countryCode}</code>: i.e.{' '}
                    <var className={classes.var}>KE, TZ, NG, ZA, ... </var>
                  </li>
                </ul>
              </Typography>
            </dd>
            <dt className={classes.dt}>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/data/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{data}</code>
              </a>
            </dt>
            <dd className={classes.dd}>
              <Typography variant="body2" component="p">
                Provides all measurements for all publicly accessible sensors
                stored in our database.
              </Typography>
            </dd>
          </dl>
        </p>

        <Typography variant="body2">
          <em>
            <b>
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
            </b>
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
            href="https://archive.sensors.africa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            archive.sensors.africa.
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}

DataArchives.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataArchives);
