import { Grid, ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Papa from "papaparse";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import StoryCard from "./StoryCard";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexGrow: 1,
  },
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "100vw",
    height: "100%",
    [breakpoints.up("md")]: {
      width: "59.625rem",
    },
    [breakpoints.up("lg")]: {
      width: "79.5rem",
    },
  },
  gridList: {
    flexWrap: "nowrap",

    // TODO(nyokabi): Material-ui documentation for Grid list componenet
    //                Promote the list into his own layer on Chrome. This cost
    //                memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  imageListItem: {
    display: "flex",
    alignItems: "strech",
    width: "100vw",
    [breakpoints.up("md")]: {
      width: "19.875rem",
    },
    [breakpoints.up("lg")]: {
      width: "26.5rem",
    },
  },
}));

function StoryList(props) {
  const classes = useStyles(props);
  const { storiesLink } = props;
  const [stories, setStories] = useState([]);

  const processData = (data) => {
    if (data?.length) {
      /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["data"] }] */
      for (let i = 0; i < data.length; i += 1) {
        data[i].id = i;
      }
      setStories([...data]);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    storiesLink
      ? Papa.parse(storiesLink, {
          download: true,
          header: true,
          complete: (results) => {
            processData(results?.data);
          },
        })
      : null;
  }, []);

  // TODO(kilemensi): ImageListItem computes the size of item and sets it using
  //                  style. This means we can't use classes since element
  //                  style has higher preference. Hence the use of style here.
  //                  We need to match exact size of StoryCard so we don't end
  //                  up with a lot of spaces around StoryCard.
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <div className={classes.gridListRoot}>
          <ImageList className={classes.gridList}>
            {stories.map((story) => (
              <ImageListItem
                key={story.id}
                classes={{ item: classes.imageListItem }}
                style={{
                  height: "100%",
                  width: classes.imageListItem.width,
                }}
              >
                <StoryCard story={story} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </Grid>
    </Grid>
  );
}

StoryList.propTypes = {
  storiesLink: PropTypes.string.isRequired,
};

export default StoryList;
