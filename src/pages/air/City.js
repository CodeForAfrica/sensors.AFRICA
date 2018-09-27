import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import KenyaMap from "../../components/Maps/KenyaMap";

import Neighbourhood from "../../components/CityComponents/Neighbourhood";
import StatisticsReport from "../../components/CityComponents/StatisticsReport";
import CityHeader from "../../components/CityComponents/Header/CityHeader";
import CallToAction from "../../components/CityComponents/CallToAction";
import SensorsDataReport from "../../components/CityComponents/MeasureStats/SensorsDataReport";
import HostSensor from "../../components/CityComponents/HostSensors/HostSensor";

//import Api from "../../components/Api";
//import Typography from "@material-ui/core/Typography";

class City extends Component {
  render() {
    return (
      <Grid>
        <Navbar />
        <CityHeader />
        <HostSensor />
        <StatisticsReport />
        <Neighbourhood />
        <KenyaMap />
        <SensorsDataReport />
        <CallToAction />
        <Footer />
      </Grid>
    );
  }
}

export default City;
