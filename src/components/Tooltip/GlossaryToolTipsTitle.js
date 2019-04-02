import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function GlossaryToolTipTitle({ title, description }) {
  return (
    <div>
      <Typography color="inherit">{title}</Typography>
      <Typography variant="caption" style={{ fontSize: '8px' }}>
        {description}
      </Typography>
    </div>
  );
}

GlossaryToolTipTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

GlossaryToolTipTitle.defaultProps = {
  title: '',
  description: ''
};

export default GlossaryToolTipTitle;
