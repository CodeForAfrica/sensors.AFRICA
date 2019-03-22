import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    padding: '0 5rem',
    backgroundColor: 'white'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

function EmbedDocumentation({ classes }) {
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Share/Embed components with the following links:
      </Typography>
      <p>Sensor map https://sensors.africa/embeded/air/map?city=nairobi.</p>
      <p>
        Embed it in a page example:
        <pre>{`
        <iframe
          src="https://sensors.africa/embeded/air/map?city=nairobi"
          height="500px"
          width="800px"
        />
      `}</pre>
      </p>
      <p>
        Weekly data graph https://sensors.africa/embeded/air/graph?city=nairobi.
      </p>
      <p>
        Embed it in a page example:
        <pre>{`
        <iframe
          src="https://sensors.africa/embeded/air/graph?city=nairobi"
          height="500px"
          width="800px"
        />
      `}</pre>
      </p>
      <p>The dial https://sensors.africa/embeded/air/dial?city=nairobi.</p>
      <p>
        Embed it in a page example:
        <pre>{`
        <iframe
          src="https://sensors.africa/embeded/air/dial?city=nairobi"
          height="500px"
          width="800px"
        />
      `}</pre>
      </p>
    </div>
  );
}

EmbedDocumentation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmbedDocumentation);
