import React, { Component } from 'react';
import Jumbotron from 'components/Jumbotron/jumbotron';
import Footer from 'components/Footer/footer'

class Home extends Component {
    render() { 
        return (  
              <div>
                  <Jumbotron/> 
                  <Footer />
              </div>
        );
    }
}
 
export default Home;
