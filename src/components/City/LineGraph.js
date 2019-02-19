import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from 'victory';

const styles = () => ({
  root: {
    flexGrow: 1,
    paddingTop: '3rem',
    paddingBottom: '3rem'
  }
});

const data = [
  { Day: 1, average: 1000 },
  { Day: 2, average: 4000 },
  { Day: 5, average: 3000 },
  { Day: 4, average: 5000 },
  { Day: 5, average: 2000 },
  { Day: 6, average: 4000 },
  { Day: 7, average: 6000 }
];

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
            height={350}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              style={{ grid: { stroke: '#ccc', strokeDasharray: 'none' } }}
              // Number of ticks and where to map them to
              tickValues={[0, 1, 2, 3, 4, 5, 6]}
              tickFormat={['Mon', 'Tue', 'Wed', ' Thur', 'Fri', 'Sat', 'Sun']}
            />
            <VictoryAxis
              dependentAxis
              style={{ grid: { stroke: '#ccc', strokeDasharray: 'none' } }}
              // Display tickFormat
              tickFormat={x => x}
            />
            <VictoryLine
              style={{
                data: { stroke: '#2FB56B', strokeWidth: '3' },
                parent: { border: '1px solid #ccc' }
              }}
              data={data}
              x="day"
              y="average"
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
