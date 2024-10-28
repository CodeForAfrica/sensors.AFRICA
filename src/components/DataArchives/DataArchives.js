import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  main: {
    paddingBottom: "3rem",
    [theme.breakpoints.up("md")]: {
      width: "59.625rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "79.5rem",
    },
  },
  link: { color: theme.palette.primary.dark },
  typography: {
    paddingTop: theme.spacing(6),
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontWeight: 700,
    fontSize: "1rem",
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  dlFirst: {
    padding: "1rem 0.5rem",
    borderTop: "1px solid #f0f4f7",
    borderBottom: "1px solid #f0f4f7",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  dl: {
    padding: "1rem 0.5rem",
    borderBottom: "1px solid #f0f4f7",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  dt: {
    [theme.breakpoints.up("md")]: {
      width: "29.8125rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "39.75rem",
    },
    marginBottom: "0.5rem",
  },
  dd: {
    [theme.breakpoints.up("md")]: {
      width: "29.8125rem",
      float: "left",
    },
    [theme.breakpoints.up("lg")]: {
      width: "39.75rem",
    },
  },
  code: {
    display: "inline-block",
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
    fontStyle: "italic",
    fontSize: theme.typography.caption.fontSize,
  },
  wiki: {
    marginTop: "2rem",
  },
}));

const API_BASE_URL = process.env.NEXT_PUBLIC_APP_API_BASE_URL;
const API_STATIC_URL = process.env.NEXT_PUBLIC_APP_API_STATIC_URL;

const sensors = `${API_BASE_URL}/sensors/{sensor_id}/`;
const query = `${API_BASE_URL}/filter?city=&country=&type=`;
const data = `${API_BASE_URL}/data/`;
const now = `${API_BASE_URL}/now/`;
const type = "{sensor type}";
const city = "{city}";
const countryCode = "{country name}";
const allCities = `${API_BASE_URL}/cities`;
const specificCities = `${API_BASE_URL}/data/air?city={slug}&`;
const nodes = `${API_BASE_URL}/nodes`;
const data5 = `${API_STATIC_URL}/data.json`;
const data1 = `${API_STATIC_URL}/data.1h.json`;
const data24 = `${API_STATIC_URL}/data.24h.json`;
const dataDust = `${API_STATIC_URL}/data.dust.min.json`;
const otherSensors = `${API_STATIC_URL}/data.temp.min.json`;

const toFrom = "{YYYY - mm - dd}";
const valueType = "{P1, P2, temperature, humidity}";

function DataArchives(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        container
        justifyContent="center"
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
            The primary way to access sensor data is via API endpoints.
            Currently, you can access our API using:
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dlFirst}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{sensors}</code>
            </Typography>
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
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{now}</code>
            </Typography>
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
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{query}</code>
            </Typography>
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
              style={{ listStyle: "none", marginTop: "0.5rem" }}
            >
              <li className={classes.query}>
                <code className={classes.queryParam}>city</code> ={" "}
                <code className={classes.queryDescription}>{city}</code>:
                Separated list of cities i.e{" "}
                <code className={classes.var}>nairobi</code> ,
                <code className={classes.var}>lagos</code>
              </li>
              <li className={classes.query}>
                {" "}
                <code className={classes.queryParam}>country</code>={" "}
                <code className={classes.queryDescription}>{countryCode}</code>:
                Separated list of countries i.e.{" "}
                <code className={classes.var}>KE, TZ, NG, ZA, ... </code>
              </li>
              <li className={classes.query}>
                <code className={classes.queryParam}>type</code> ={" "}
                <code className={classes.queryDescription}>{type}</code>:
                Separated list of sensor types, i.e{" "}
                <code className={classes.var}>SDS011</code> ,
                <code className={classes.var}> DHT22</code>
              </li>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{data}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides all measurements for all publicly accessible sensors
              stored in our database.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{allCities}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides all measurements for all supported cities
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{specificCities}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides air data with city query from = {toFrom}&to = {toFrom}
              &value_type={valueType}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{nodes}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides all sensors node data including if the sensor was moved
              and where
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{data5}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides averages of all measurements per sensor of the last 5
              minutes for all sensors
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{data1}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides average of all measurements per sensor of the last hour
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{data24}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides average of all measurements per sensor of the 24 hours
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <Typography variant="body2" component="p">
              <code className={classes.code}>{dataDust}</code>
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides average of all measurements per sensor of the last 5
              minutes for dust sensors
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.dl}
        >
          <Grid item className={classes.dt}>
            <a
              className={classes.link}
              href={otherSensors}
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className={classes.code}>{otherSensors}</code>
            </a>
            <Typography variant="body2" component="p">
              <code className={classes.code} />
            </Typography>
          </Grid>
          <Grid item className={classes.dd}>
            <Typography variant="body2" component="p">
              Provides average of all measurements per sensor of the last 5
              minutes for temperature, humidity and air pressure sensors only
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.wiki}>
          <Typography variant="body2">
            <em>
              <strong>
                For a more detailed documentation on how to access API data ,
                visit the sensors.AFRICA{" "}
                <a
                  className={classes.link}
                  href="https://github.com/CodeForAfrica/sensors.AFRICA/wiki/APIs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WIKI
                </a>{" "}
              </strong>
            </em>
          </Typography>

          <Typography variant="h6" className={classes.title} component="h3">
            Accessing Archive Data
          </Typography>
          <Typography variant="body2">
            In addition to sensor data accessible via the API, data is also
            exported once a day in CSV file format and made available at the{" "}
            <a
              className={classes.link}
              href="https://openafrica.net/organization/sensors-africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              sensors.AFRICA Air Quality Archive
            </a>
          </Typography>

          <Typography variant="h6" className={classes.title} component="h3">
            FAQs and Fact checks.
          </Typography>
          <Typography variant="body2">
            Here is some useful information about Air and Noise Polution. <br />
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <a
              className={classes.link}
              href="https://docs.google.com/document/d/1ZVMLzEF_GRUz3JEMNQujUFhITkSp7OsQCybTRra0dMk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Air
            </a>

            <a
              className={classes.link}
              href="https://docs.google.com/document/d/133AYXRbI2qfMBbj5t-lAoxOqsfTrFVwyHKBTJG_ci04/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sound
            </a>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DataArchives;
