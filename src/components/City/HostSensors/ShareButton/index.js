import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import HostSensorButton from 'components/City/HostSensors/HostSensorButton';
import SocialMediaButtons from 'components/City/HostSensors/ShareButton/SocialMediaButtons';
import Embed from 'components/City/HostSensors/ShareButton/Embed';

const styles = () => ({
  typography: {
    textAlign: 'center',
    paddingBottom: '0.5rem',
    fontWeight: 600,
  },
});

const DialogTitle = withStyles((theme) => ({
  root: {
    margin: 0,
    paddingTop: '4rem',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
}))((props) => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: 'white',
    border: '0px',
  },
}))(MuiDialogContent);

function ShareButton({ classes, city }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HostSensorButton onClick={handleOpen}>Share</HostSensorButton>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Share
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <SocialMediaButtons city={city} />
            </Grid>
            <Grid item xs={12} style={{ margin: '1.5rem' }}>
              <Typography
                gutterBottom
                variant="caption"
                className={classes.typography}
              >
                Embed this dial into your website by using the following iframe:
              </Typography>
              <Embed city={city} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

ShareButton.propTypes = {
  city: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ShareButton);
