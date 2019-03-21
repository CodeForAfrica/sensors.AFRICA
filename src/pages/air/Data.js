import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../../components/DocumentHead';
import Stories from '../../components/About/Stories';
import Navbar from '../../components/Header/Navbar';
import DataArchivesHeader from '../../components/DataArchives/DataArchivesHeader';

import DataArchives from '../../components/DataArchives/DataArchives';
import PartnerLogos from '../../components/PartnerLogos';
import Footer from '../../components/Footer';
import Support from '../../components/Support';

const styles = theme => ({
  dataSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

function Data({ classes, url }) {
  return (
    <React.Fragment>
      <DocumentHead url={url} />
      <Navbar />
      <DataArchivesHeader />
      <DataArchives />
      <div>
        <h2>Share/Embed components with the following links:</h2>
        <p>Sensor map https://sensors.africa/embeded/air/map?city=nairobi.</p>
        <p>
          Embed it in a page example:
          <pre>{`
            <iframe
              src="https://sensors.africa/embeded/air/map?city=nairobi"
              height="500px"
              width="800px"
            />
          `}</pre>
        </p>
        <p>
          Weekly data graph
          https://sensors.africa/embeded/air/graph?city=nairobi.
        </p>
        <p>
          Embed it in a page example:
          <pre>{`
            <iframe
              src="https://sensors.africa/embeded/air/graph?city=nairobi"
              height="500px"
              width="800px"
            />
          `}</pre>
        </p>
        <p>The dial https://sensors.africa/embeded/air/dial?city=nairobi.</p>
        <p>
          Embed it in a page example:
          <pre>{`
            <iframe
              src="https://sensors.africa/embeded/air/dial?city=nairobi"
              height="500px"
              width="800px"
            />
          `}</pre>
        </p>
      </div>
      <Stories />
      <Support classNames={classes.dataSupport} />
      <PartnerLogos />
      <Footer />
    </React.Fragment>
  );
}

Data.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(Data);
