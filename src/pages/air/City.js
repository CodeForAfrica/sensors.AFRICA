import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import KenyaMap from "../../components/Maps/KenyaMap";

import Neighbourhood from "../../components/CityComponents/Neighbourhood";
import CityHeader from "../../components/CityComponents/Header/CityHeader";
import CallToAction from "../../components/CityComponents/CallToAction";
import HostSensor from "../../components/CityComponents/HostSensors/HostSensor";
import QualityStats from "../../components/CityComponents/SensorsQualityStats/QualityStats";
import PollutionStats from "../../components/CityComponents/PollutionStats";

//import Api from "../../components/Api";
//import Typography from "@material-ui/core/Typography";

class City extends Component {
  render() {
    var cityObject = {value: "nairobi", label: "Nairobi, Kenya"}
    var cityAirPol = 17

    if(this.props.location.state) {
      cityObject = this.props.location.state['cityObj'];
      cityAirPol = this.props.location.state['cityAirPolLevel']
    }

    return (
      <Grid>
        <Navbar />
        <CityHeader city={cityObject} airPol={cityAirPol} history={this.props.history}/>
        <HostSensor />
        <PollutionStats />
        <Neighbourhood />
        <KenyaMap />
        <QualityStats />
        <CallToAction />
        <Footer />
      </Grid>
    );
  }
}

export default City;
