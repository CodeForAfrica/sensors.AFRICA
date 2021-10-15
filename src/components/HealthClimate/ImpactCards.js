import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

let lightBackgroundColor;
let darkBackgroundColor;

const styles = (theme) => {
  lightBackgroundColor = theme.palette.primary.light;
  darkBackgroundColor = theme.palette.primary.dark;

  return {
    root: {
      textAlign: 'center',
      width: '100vw',
      backgroundColor: theme.palette.primary.light,
      [theme.breakpoints.up('md')]: {
        width: '25rem',
        height: '36.75rem',
        padding: '2rem',
      },
      [theme.breakpoints.up('lg')]: {
        width: '37.875rem',
        height: '36.75rem',
        padding: '3rem',
      },
    },
    img: {
      height: '5rem',
      maxWidth: '100%',
      [theme.breakpoints.up('md')]: {
        height: '100%',
      },
    },
    title: {
      color: '#fff',
      textAlign: 'center',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
      },
    },
    caption: {
      textAlign: 'center',
      color: '#F3F3F3',
      paddingBottom: '1rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: theme.typography.subtitle1.fontWeight,
      },
    },
  };
};

function PollutionBurden({ classes, icon, title, impact, dark }) {
  const backgroundColor = dark ? darkBackgroundColor : lightBackgroundColor;
  return (
    <Card className={classes.root} style={{ backgroundColor }}>
      <CardContent className={classes.cardContent}>
        <img src={icon} alt={title} className={classes.img} />
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.caption}>
          {impact}
        </Typography>
      </CardContent>
    </Card>
  );
}

PollutionBurden.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

PollutionBurden.defaultProps = {
  dark: false,
};

export default withStyles(styles)(PollutionBurden);
