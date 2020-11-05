import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  main: {
    paddingBottom: '3rem',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem',
    },
  },
  link: { color: theme.palette.primary.dark },
  typography: {
    paddingTop: theme.spacing(6),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 700,
    fontSize: '1rem',
    paddingTop: '2rem',
    paddingBottom: '1rem',
  },
  dlFirst: {
    padding: '1rem 0.5rem',
    borderTop: '1px solid #f0f4f7',
    borderBottom: '1px solid #f0f4f7',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  dl: {
    padding: '1rem 0.5rem',
    borderBottom: '1px solid #f0f4f7',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  dt: {
    [theme.breakpoints.up('md')]: {
      width: '29.8125rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '39.75rem',
    },
    marginBottom: '0.5rem',
  },
  dd: {
    [theme.breakpoints.up('md')]: {
      width: '29.8125rem',
      float: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      width: '39.75rem',
    },
  },
  code: {
    display: 'inline-block',
    color: theme.palette.secondary.main,
    fontSize: theme.typography.caption.fontSize,
  },
  query: {
    fontSize: theme.typography.caption.fontSize,
  },
  queryParam: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.caption.fontSize,
  },
  queryDescription: {
    fontSize: theme.typography.caption.fontSize,
  },
  var: {
    color: theme.palette.primary.dark,
    fontStyle: 'italic',
    fontSize: theme.typography.caption.fontSize,
  },
  wiki: {
    marginTop: '2rem',
  },
}));

function EmbedDocumentation() {
  const classes = useStyles();
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
            Embeding Sensors Widgets
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.title} component="h3">
            Embeding City Widgets
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" component="p">
            The primary way to embed sensors.AFRICA city widgets is via iframes.
            There are three embedable city widgets:
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
              href="https://sensors.africa/embeded/air/map?city=nairobi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>
                https://sensors.africa/embeded/air/map?city=city-slug
              </code>
            </a>
          </Grid>
          <Grid className={classes.dd}>
            <Typography variant="body2" component="p">
              City Sensors Map
            </Typography>
            <Typography variant="body2">
              Embed it in a page where:{' '}
              <code className={classes.var}>city-slug=nairobi</code>
            </Typography>
            <Typography
              variant="body2"
              component="ul"
              style={{ listStyle: 'none', marginTop: '0.5rem' }}
            >
              <li className={classes.query}>
                <pre className={classes.queryParam}>
                  {`
<iframe src="https://sensors.africa/embeded/air/map?city=nairobi"
        name="sensors-graph-nairobi"
        title="sensors.AFRICA | Nairobi Sensors Map"
        scrolling="no"
        frameborder="0"
        height="500px"
        width="800px"
        allowfullscreen />
                `}
                </pre>
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
          className={classes.dlFirst}
        >
          <Grid item className={classes.dt}>
            <a
              className={classes.link}
              href="https://sensors.africa/embeded/air/graph?city=nairobi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>
                https://sensors.africa/embeded/air/graph?city=city-slug
              </code>
            </a>
          </Grid>
          <Grid className={classes.dd}>
            <Typography variant="body2" component="p">
              City Weekly Air Quality Graph
            </Typography>
            <Typography variant="body2">
              Embed it in a page where:{' '}
              <code className={classes.var}>city-slug=nairobi</code>
            </Typography>
            <Typography
              variant="body2"
              component="ul"
              style={{ listStyle: 'none', marginTop: '0.5rem' }}
            >
              <li className={classes.query}>
                <pre className={classes.queryParam}>
                  {`
<iframe src="https://sensors.africa/embeded/air/graph?city=nairobi"
        name="sensors-graph-nairobi"
        title="sensors.AFRICA | Nairobi Weekly AQ Graph"
        scrolling="no"
        frameborder="0"
        height="500px"
        width="800px"
        allowfullscreen />
                `}
                </pre>
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
              href="https://sensors.africa/embeded/air/map?city=nairobi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>
                https://sensors.africa/embeded/air/dial?city=city-slug
              </code>
            </a>
          </Grid>
          <Grid className={classes.dd}>
            <Typography variant="body2" component="p">
              City PM<sub>2.5</sub> 24 Hours Exposure Dial
            </Typography>
            <Typography variant="body2">
              Embed it in a page where:{' '}
              <code className={classes.var}>city-slug=nairobi</code>
            </Typography>
            <Typography
              variant="body2"
              component="ul"
              style={{ listStyle: 'none', marginTop: '0.5rem' }}
            >
              <li className={classes.query}>
                <pre className={classes.queryParam}>
                  {`
<iframe src="https://sensors.africa/embeded/air/dial?city=nairobi"
        name="sensors-dial-nairobi"
        title="sensors.AFRICA | Nairobi AQ Dial"
        scrolling="no"
        frameborder="0"
        height="400"
        width="100%"
        allowfullscreen />
                `}
                </pre>
              </li>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmbedDocumentation;
