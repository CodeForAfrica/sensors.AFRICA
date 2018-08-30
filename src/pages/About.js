import React, { Component } from 'react';

//import components
import Stories from '../components/Stories'
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Partners from '../components/Partners';
import Staff from '../components/Staff';
import Footer from '../components/Footer';
import Support from '../components/Support';

class About extends Component {

    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <Jumbotron />
                <Partners />
                <Staff />
                <Stories />
                <Support />
                <Footer />
            </React.Fragment>
          );
    }
}
 
export default About;