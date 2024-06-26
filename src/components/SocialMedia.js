import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    flexGrow: 1,
    color: "white",
    backgroundColor: palette.secondary.main,
    paddingTop: spacing(1),
    paddingBottom: spacing(2),
  },
  fa: {
    height: typography.pxToRem(28),
    padding: spacing(0.5),
    transition: "all .5s ease-in-out",
    width: typography.pxToRem(28),
    "&:hover": {
      transform: "scale(1.3)",
      color: "#f3f3f3",
    },
  },
  links: {
    color: "white",
  },
}));

function SocialMedia({ color, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.icons}
    >
      <Grid item>
        <a
          aria-label="Twitter"
          href="https://twitter.com/sensorsAFRICA/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={["fab", "twitter"]}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
      </Grid>
      <Grid item>
        <a
          aria-label="Facebook"
          href="https://www.facebook.com/CodeForAfrica/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={["fab", "facebook-f"]}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
      </Grid>
      <Grid item>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/sensorsAFRICA/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={["fab", "instagram"]}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
        <a
          aria-label="Medium"
          href="https://medium.com/@sensors.AFRICA"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={["fab", "medium-m"]}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
      </Grid>
      <Grid item>
        <a
          aria-label="GitHub"
          href="https://github.com/CodeForAfrica/sensors.AFRICA"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={["fab", "github"]}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
      </Grid>
    </Grid>
  );
}

SocialMedia.propTypes = {
  color: PropTypes.string,
};

SocialMedia.defaultProps = {
  color: "#fff",
};

export default SocialMedia;
