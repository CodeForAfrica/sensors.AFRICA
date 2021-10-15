import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '3rem',
  },
  input: {
    width: '31.25rem',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});
function Embed({ city }) {
  const classes = useStyles();
  const iframe = `
    <iframe src="https://sensors.africa/embeded/air/dial?city=${city.slug}"
            style="border: none;"
            name="sensors-dial-${city.slug}"
            title="sensors.AFRICA | ${city.name} AQ Gauge"
            scrolling="no"
            frameborder="0"
            height="400"
            width="100%"
            allowfullscreen />
    `;
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <textarea className={classes.input} readOnly rows={8}>
        {iframe}
      </textarea>
    </form>
  );
}

Embed.propTypes = {
  city: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Embed;
