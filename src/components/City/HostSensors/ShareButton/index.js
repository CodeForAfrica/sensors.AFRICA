import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HostSensorButton from '../HostSensorButton';
import SocialMediaButtons from './SocialMediaButtons';
import Embed from './Embed';

const styles = () => ({
  typography: {
    textAlign: 'center',
    paddingBottom: '0.5rem',
    fontWeight: 600
  }
});

const DialogTitle = withStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: '4rem',
    textAlign: 'center',
    backgroundColor: 'white'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.secondary.main
  }
}))(props => {
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
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    backgroundColor: 'white',
    border: '0px'
  }
}))(MuiDialogContent);

class ShareButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes, city } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <HostSensorButton onClick={this.handleClick}>Share</HostSensorButton>
        <Dialog aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Share
          </DialogTitle>
          <DialogContent>
            <Grid
              container
              direction="row"
              justufy="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <SocialMediaButtons city={city} />
              </Grid>
              <Grid item xs={12} style={{ margin: '1.5rem' }}>
                <Typography
                  gutterBottom
                  variant="caption"
                  className={classes.typography}
                >
                  Embed this dial into your website by using the following
                  iframe:
                </Typography>
                <Embed />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

ShareButton.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(ShareButton);
