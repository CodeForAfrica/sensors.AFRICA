import React, { Component } from 'react';

//import components
import Stories from '../components/Stories'
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron/index';
import Partners from '../components/Partners';
import Staff from '../components/Staff';
import Footer from '../components/Footer';
import Kickstart from '../components/Kickstart';

class About extends Component {

    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <Jumbotron />
                <Partners />
                <Staff />
                <Stories />
                <Kickstart />
                <Footer />
            </React.Fragment>
          );
    }
}
 
export default About;