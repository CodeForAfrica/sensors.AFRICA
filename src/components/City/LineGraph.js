import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { VictoryChart, VictoryTheme, VictoryLine } from 'victory';

const styles = () => ({
  root: {
    flexGrow: 1,
    paddingTop: '3rem',
    paddingBottom: '3rem'
  }
});

class LineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      chartWidth: window.innerWidth
    });
    window.addEventListener('resize', this.updateDimensions.bind(this));
    // remove this on unmount
  }

  updateDimensions(event) {
    this.setState({
      chartWidth: event.target.innerWidth
    });
  }

  render() {
    const { width, classes } = this.props;

    return (
      <Grid
        container
        xs={12}
        justify="flex-start"
        alignItems="center"
        className={classes.root}
      >
        <svg
          viewBox={'0 0' + ' ' + this.state.chartWidth + ' ' + '400'}
          preserveAspectRatio="none"
          width="100%"
        >
          <VictoryChart
            domainPadding={{ x: 40 }}
            standalone={false}
            width={this.state.chartWidth}
            height={400}
            theme={VictoryTheme.material}
          >
            <VictoryLine
              style={{
                data: { stroke: '#2FB56B' },
                parent: { border: '1px solid #ccc' }
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
              ]}
            />
          </VictoryChart>
        </svg>
      </Grid>
    );
  }
}

LineGraph.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LineGraph);
