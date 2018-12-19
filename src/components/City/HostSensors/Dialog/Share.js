import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ShareButton from './ShareButtons';
import Embed from './Embed';

const styles = theme => ({
  buttonContained: {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
    borderRadius: 0,
    margin: theme.spacing.unit * 2,
    fontWeight: 700,
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      border: '1px solid rgba(0, 0, 0, 0.23)'
    }
  },
  share: { paddingBottom: '4rem' },
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

class Share extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickOpen}
          className={classes.buttonContained}
        >
          Share
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={this.handleClose}
            //className={classes.dialogTitle}
          >
            Share
          </DialogTitle>
          <DialogContent>
            <Grid
              item
              xs={12}
              direction="row"
              justufy="center"
              alignItems="center"
            >
              <Grid gutterBottom className={classes.Share}>
                <ShareButton />
              </Grid>
              <Grid style={{ margin: '1.5rem' }}>
                <Typography
                  gutterBottom
                  variant="caption"
                  className={classes.typography}
                >
                  Embed this project into your website by using the following
                  iframe:
                </Typography>
                <Embed />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    );
  }
}

export default withStyles(styles)(Share);
