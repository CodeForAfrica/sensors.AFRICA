import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '3rem'
  },
  input: {
    height: '3rem',
    width: '31.25rem'
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
function Embed({ classes }) {
  const iframe =
    '<iframe src="https://sensors.africa/air" style="border:0px #ffffff none;" name="sensors" scrolling="no" frameborder="1" marginheight="1px" marginwidth="1px" height="570px" width="800px" allowfullscreen></iframe>';
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <input
        type="text"
        name="iframe"
        className={classes.input}
        defaultValue={iframe}
        readOnly
      />
    </form>
  );
}

Embed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Embed);
