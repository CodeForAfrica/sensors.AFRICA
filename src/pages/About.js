import React, { Component } from 'react';
import Stories from '../components/Stories'
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Partners from '../components/Partners';
import Staff from '../components/Staff';
import Footer from '../components/Footer.js';
import Kickstart from '../components/Kickstart';

class About extends Component {

    render() { 
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Partners />
                <Staff />
                <Stories />
                <Kickstart />
                <Footer />
           </div>
          );
    }
}
 
export default About;