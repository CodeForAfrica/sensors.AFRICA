import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import HardwareHeaderContent from '../Header/JumbotronContent/HardwareHeaderContent';

const styles = theme => ({
  jumbotron: {
    paddingBottom: '2rem',
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem',
      height: 450
    }
  }
});

function HardwareHeader({ classes }) {
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <MenuBar />
      </Grid>
      <Grid item xs={12}>
        <HardwareHeaderContent
          title="THE SENSORS &amp; THEIR INNER WORKING"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur
                    turpis id ipsum volutpat laoreet. Nunc tempor tincidunt ex consequat rhoncus.
                    Aenean condimentum metus enim, et congue lorem ultricies vitae. Vestibulum nec
                    orci a nisl volutpat faucibus eget sit amet mauris"
          secondsubheading="Suspendisse varius tortor augue, sit amet pulvinar leo mollis et. Morbi
                    cursus non urna a vulputate. Proin fermentum vitae ipsum sit amet viverra. Cras
                    ut libero rhoncus, pellentesque ipsum a, lobortis nisi. Etiam sed risus ultricies,
                    tempus dui a, accumsan quam. "
        />
      </Grid>
    </Grid>
  );
}

HardwareHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HardwareHeader);
