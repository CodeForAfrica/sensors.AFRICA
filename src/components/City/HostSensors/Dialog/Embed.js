import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '3rem'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    //borderRadius: 0
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
      <TextField
        id="outlined-read-only-input"
        className={classes.textField}
        defaultValue={iframe}
        margin="normal"
        variant="outlined"
        fullWidth
        InputProps={{
          readOnly: true
        }}
      />
    </form>
  );
}

Embed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Embed);
