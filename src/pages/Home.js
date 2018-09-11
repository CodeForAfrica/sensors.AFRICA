import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Hero from 'components/Landing/Hero';
import Footer from 'components/Footer';

class Home extends Component {
    render() {
        return (
            <Grid>
                <Hero />
                <Footer />
            </Grid>
        );
    }
}

export default Home;
