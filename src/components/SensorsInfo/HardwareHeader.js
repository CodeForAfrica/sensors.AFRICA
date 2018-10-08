import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import HardwareHeaderContent from '../Header/JumbotronContent/HardwareHeaderContent';

const styles = {
  jumbotron: {
    backgroundColor: '#2FB56B',
    height: '450px',
    borderRadius: 'none'
  }
};

function HardwareHeader({ classes }) {
  return (
    <Grid className={classes.jumbotron}>
      <MenuBar />
      <HardwareHeaderContent
        title="THE SENSORS & THEIR INNER WORKING"
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
  );
}

HardwareHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HardwareHeader);
