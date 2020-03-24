import React from 'react';

import { Grid, GridList, GridListTile } from '@material-ui/core';
import Tabletop from 'tabletop';

import { withStyles } from '@material-ui/core/styles';

import StoryCard from './StoryCard';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  gridListRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100vw',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem'
    }
  },
  gridList: {
    flexWrap: 'nowrap',

    // TODO(nyokabi): Material-ui documentation for Grid list componenet
    //                Promote the list into his own layer on Chrome. This cost
    //                memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  gridListTile: {
    display: 'flex',
    alignItems: 'strech',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  }
});

class StoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { stories: [] };
    this.processData = this.processData.bind(this);
  }

  componentDidMount() {
    Tabletop.init({
      key: '1I2nTG_lst4nYrg8z1e7RaolC16A-M7f_lO_zRaV9L5s',
      callback: data => {
        this.processData(data);
      },
      simpleSheet: true
    });
  }

  processData(data) {
    /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["data"] }] */
    for (let i = 0; i < data.length; i += 1) {
      data[i].id = i;
    }
    this.setState({ stories: data });
  }

  render() {
    const { classes } = this.props;
    const { stories } = this.state;

    // TODO(kilemensi): GridListTile computes the size of item and sets it using
    //                  style. This means we can't use classes since element
    //                  style has higher preference. Hence the use of style here.
    //                  We need to match exact size of StoryCard so we don't end
    //                  up with a lot of spaces around StoryCard.
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} container justify="center" alignItems="center">
          <div className={classes.gridListRoot}>
            <GridList className={classes.gridList}>
              {stories.map(story => (
                <GridListTile
                  key={story.id}
                  classes={{ tile: classes.gridListTile }}
                  style={{
                    height: '100%',
                    width: classes.gridListTile.width
                  }}
                >
                  <StoryCard story={story} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StoryList);
