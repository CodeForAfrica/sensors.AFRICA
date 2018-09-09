import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Navbar from '../../components/Navbar';
import Stories from '../../components/Stories';
import Support from '../../components/Support';
import Footer from '../../components/Footer';

import Issues from '../../components/Issues';
import IndoorOutdoor from '../../components/IndoorOutdoor';
import HeaderIndex from '../../components/AirLandingComponent/HeaderIndex';

class AirLanding extends Component {
    render() { 
        return ( 
            <Grid container item xs={12}>
                <Navbar />
                <HeaderIndex />
                <Issues />
                <IndoorOutdoor />
                <Stories />
                <Support />
                <Footer />
            </Grid>
         );
    }
}
 
export default AirLanding;