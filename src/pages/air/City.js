import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import CityHeader from "../../components/CityComponents/CityHeader";

//import Api from "../../components/Api";
//import Typography from "@material-ui/core/Typography";

class City extends Component {
  render() {
    return (
      <Grid>
        <Navbar />
        <CityHeader />
        <Footer />
      </Grid>
    );
  }
}

export default City;
