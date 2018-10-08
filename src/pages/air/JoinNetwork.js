import React from 'react';

import Navbar from '../../components/Header/Navbar';
import JoinHeader from '../../components/JoinNetwork/JoinHeader';
import JoinSupport from '../../components/JoinNetwork/JoinSupport';
import Footer from '../../components/Footer';

function JoinNetwork() {
  return (
    <div>
      <Navbar />
      <JoinHeader />
      <JoinSupport />
      <Footer />
    </div>
  );
}

export default JoinNetwork;
