import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import Neighbourhood from "../../components/CityComponents/Neighbourhood";
import StatisticsReport from "../../components/CityComponents/StatisticsReport";
import CityHeader from "../../components/CityComponents/CityHeader";
import CallToAction from "../../components/CityComponents/CallToAction";
import SensorsDataReport from "../../components/CityComponents/SensorsDataReport";
import HostSensor from "../../components/CityComponents/HostSensor";

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
        <SensorsDataReport />
        <CallToAction />
        <Footer />
      </Grid>
    );
  }
}

export default City;
