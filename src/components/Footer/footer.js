import React, { Component } from 'react';
import partnerlogo from '../../assets/landing/partnerslogoswhite.png';
import 'App.css';
import Button from '@material-ui/core/Button';

const footer = {
    backgroundColor:'#424143',
    height:'300px',
    color:'#f3f3f3'
  
}

const footerContent = {
    display:'flex',
    flexDirection:'row', 
    justifyContent:'center',
    paddingTop:'2rem',
    paddingBottom:'2rem'
}

const footerCards = {
  textAlign:'center',
  height:'250px',
  width:'300px',
  paddingRight:'0rem 1rem 2rem'
 }

 const footerCardBorder = {
  textAlign:'center',
  height:'250px',
  width:'300px',
  paddingRight:'0rem 5rem',
  borderLeft:'1px solid #f3f3f3',
  borderRight:'1px solid #f3f3f3'
 }

 const imgFlex = {
   display:'flex',
   flexDirection:'row',
   justifyContent:'center',
   padding:'1rem'
 }

 const fa = {
   color:'#f3f3f3',
   padding:'0.5rem'
 }

class Footer extends Component {
    render() { 
        return ( 
            <section style={footer}>
              <div style={footerContent}>
                  <div style={footerCards}>
                    <h3>CONNECT WITH US</h3>
                    <div style={imgFlex}>
                      <a href="/facebook"><i class="fab fa-facebook-f fa-lg" style={fa}></i></a>
                      <a href="/twitter"><i class="fab fa-twitter fa-lg" style={fa}></i></a>
                      <a href="/instagram"><i class="fab fa-instagram fa-lg" style={fa}></i></a>
                    </div>
                    <div>
                      <input type="text" name="you@email.com" value="you@email.com"/>
                      <p>
                        <Button variant="contained" color="upload">SUBSCRIBE TO UPDATES</Button>
                        </p>
                    </div>
                  </div>

                  <div style={footerCardBorder}>
                    <h3>ABOUT SENSORS.AFRICA</h3>
                    <p>sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water
                      and sound polution to give citizens actionable information about their cities.
                    </p>
                    <Button variant="contained" color="upload">READ MORE</Button>
                  </div>

                  <div style={footerCards}>
                     <p style={{padding:'3rem 4rem 1rem 2rem', textAlign:'center'}}>This initiative was seed-funded by innovateAFRICA, and is being 
                       incubated by Code for Africa</p>
                       <p>
                         <img src={partnerlogo} alt="Partner Logos" style={{padding:'0rem 4rem 1rem 2rem'}}/>
                       </p>
                  </div>
              </div>
            </section>
         );
    }
}
export default Footer;