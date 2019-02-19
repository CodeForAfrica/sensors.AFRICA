import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import DocumentHead from '../../components/DocumentHead';
import Navbar from '../../components/Header/Navbar';
import HeaderIndex from '../../components/SensorsInfo/HardwareHeader';
import HardwareInfo from '../../components/SensorsInfo/HardwareInfo';
import PartnerLogos from '../../components/PartnerLogos';
import Footer from '../../components/Footer';

function HowSensorsWork({ url }) {
  return (
    <Grid>
      <DocumentHead url={url} />
      <Navbar />
      <HeaderIndex />
      <HardwareInfo />
      <PartnerLogos />
      <Footer />
    </Grid>
  );
}

HowSensorsWork.propTypes = {
  url: PropTypes.string.isRequired
};

export default HowSensorsWork;
