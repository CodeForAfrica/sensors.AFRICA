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
      paddingRight: '3rem',
      paddingLeft: '3rem'
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
    fontSize: '1rem'
  },
  archive: { paddingTop: '2rem', paddingBottom: '2rem' },
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
    color: theme.palette.primary.dark
  }
});

const now = 'http://api.airquality.codeforafrica.org/v1/now/';
const data = 'http://api.airquality.codeforafrica.org/v1/data/';
const sensors = 'http://api.airquality.codeforafrica.org/v1/sensor/{apiID}/';
const query = 'http://api.airquality.codeforafrica.org/v1/filter/{query}';
const type = '{ sensor type }';
const area = '{ lat, lon, distance }';
const box = '{ lat1, lon1, lat2, lon2 }';
const countryCode = '{ country code }';

function DataArchives({ classes }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        xs={12}
        sm={6}
        justify="center"
        align="left"
        className={classes.main}
      >
        <Typography variant="h6" className={classes.typography}>
          Sensors Data
        </Typography>
        <Grid style={{ paddingTop: '3rem' }}>
          <Typography variant="h6" className={classes.title}>
            Accessing API Data
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body2">
            <Typography variant="body2">
              The primary way to access sensor data is via API endpoints. There
              are several public endpoints:
            </Typography>
            <p>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/now/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{now}</code>
              </a>{' '}
              - provides all measurements from the last 5 minutes for all
              publicly accessible sensors.
            </p>
            <p>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/data/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{data}</code>
              </a>{' '}
              - provides all measurements for all publicly accessible sensors
              stored in our database.
            </p>
            <p>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/sensor/%7BapiID%7D/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{sensors}</code>
              </a>{' '}
              - provides all measurements from the last 5 minutes for one
              sensor, these data is only available if the sensor is publicly
              accessible.
            </p>
            <p>
              <a
                className={classes.link}
                href="http://api.airquality.codeforafrica.org/v1/filter/%7Bquery%7D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className={classes.code}>{query}</code>{' '}
              </a>
              - provides all measurements from the last 5 minutes for all
              publicly accessible sensors filtered by a query.
            </p>
          </Typography>
        </Grid>

        <Grid style={{ paddingTop: '1rem' }}>
          <Typography variant="body2">Supported queries are:</Typography>
          <Typography variant="body2">
            <ul>
              <li>
                type = {type}: comma separated list of sensor types, i.e{' '}
                <var className={classes.var}>SDS011</var> ,
                <var className={classes.var}> DHT22</var>
              </li>
              <li>area = {area}: provides all sensors within a max radius.</li>
              <li>
                box = {box}: provides all sensors in a 'box' with the given
                coordinates.
              </li>
              <li>
                {' '}
                country = {countryCode}: i.e.{' '}
                <var className={classes.var}>KE, TZ, NG, ZA, ... </var>
              </li>
            </ul>
          </Typography>
        </Grid>

        <Grid className={classes.archive}>
          <Typography variant="h6" className={classes.title}>
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
      </Grid>
    </Grid>
  );
}

DataArchives.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataArchives);
