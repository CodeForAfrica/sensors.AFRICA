import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import HostSensorButton from "@/sensorsafrica/components/City/HostSensors/HostSensorButton";
import Embed from "@/sensorsafrica/components/City/HostSensors/ShareButton/Embed";
import SocialMediaButtons from "@/sensorsafrica/components/City/HostSensors/ShareButton/SocialMediaButtons";

const useStyles = makeStyles(() => ({
  typography: {
    textAlign: "center",
    paddingBottom: "0.5rem",
    fontWeight: 600,
  },
}));

const DialogTitle = withStyles((theme) => ({
  root: {
    margin: 0,
    paddingTop: "4rem",
    textAlign: "center",
    backgroundColor: "white",
  },
  closeButton: {
    position: "absolute",
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
    backgroundColor: "white",
    border: "0px",
  },
}))(MuiDialogContent);

function ShareButton({ city, ...props }) {
  const classes = useStyles(props);
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
            <Grid item xs={12} style={{ margin: "1.5rem" }}>
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

export default ShareButton;
