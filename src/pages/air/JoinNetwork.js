import React, { Component } from 'react';


import Navbar from '../../components/Navbar';
import JoinHeader from '../../components/JoinNetwork/Index'
import JoinSupport from '../../components/JoinNetwork/JoinSupport';
import Footer from '../../components/Footer';


class JoinNetwork extends Component {
  render() { 
    return ( 
      <div>
        <Navbar />
        <JoinHeader />
        <JoinSupport />
        <Footer />
      </div>
     );
  }
}
 
export default JoinNetwork;