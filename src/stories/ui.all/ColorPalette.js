import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {}
});

function ColorPalette({ classes }) {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card item xs={4}>
        <CardContent>this is content</CardContent>
      </Card>
      <Card item xs={4}>
        <CardContent>this is content</CardContent>
      </Card>
      <Card item xs={4}>
        <CardContent>this is content</CardContent>
      </Card>
    </Grid>
  );
}

ColorPalette.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ColorPalette);
