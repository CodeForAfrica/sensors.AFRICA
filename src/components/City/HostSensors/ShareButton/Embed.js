import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '3rem'
  },
  input: {
    width: '31.25rem'
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
function Embed({ classes, city }) {
  const iframe = `
    <iframe src="https://sensors.africa/embeded/air/dial?city=${city.slug}"
            style="border: none;"
            name="sensors.AFRICA | ${city.name}"
            scrolling="no"
            frameborder="0"
            height="400"
            width="100%"
            allowfullscreen>
    </iframe>`;
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <textarea className={classes.input} readOnly rows={8}>
        {iframe}
      </textarea>
    </form>
  );
}

Embed.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Embed);
