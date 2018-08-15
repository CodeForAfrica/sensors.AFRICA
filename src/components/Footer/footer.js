import React, { Component } from 'react';
import 'App.css';

const footer = {
    backgroundColor:'#384143',
    height:'400px',
    padding:'0',
    margin:'0',
    color:'white'
}

class Footer extends Component {
    render() { 
        return ( 
            <section style={footer}>
              <div>
                    <p>CONNECT WITH US</p>
                    <p>ABOUT.SENSORS.AFRICA</p>
                    <p>This initiative was seed-funded by innovateAFRICA,and is being incubated by Code for Africa</p>
              </div>
            </section>
         );
    }
}
export default Footer;