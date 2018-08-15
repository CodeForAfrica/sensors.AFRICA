import React, { Component } from 'react';
import partnerlogo from '../../assets/landing/partnerslogoswhite.png';
import 'App.css';

const footer = {
    backgroundColor:'#384143',
    marginTop:'-1rem',
    height:'280px',
    color:'white'
  
}

const footerContent = {
    display:'flex',
    flexDirection:'row', 
    justifyContent:'center',
    paddingTop:'2rem',
   
}

const footerCards = {
  textAlign:'center',
  height:'280px',
  width:'300px',
  paddingRight:'1rem',
  paddingLeft:'1rem',
  paddingBottom:'2rem',
  borderRight:'1px solid white',
  borderLeft:'1px solid white'
 }

 const button = {
   backgroundColor:'black',
   color:'white',
   borderRadius:'none'
 }

 const imgFlex = {
   display:'flex',
   flexDirection:'row',
   justifyContent:'center',
   padding:'1rem'
 }

 const fa = {
   color:'white',
   padding:'0.5rem'
 }

class Footer extends Component {
    render() { 
        return ( 
            <section style={footer}>
              <div style={footerContent}>
                  <div style={footerCards}>
                    <h4>CONNECT WITH US</h4>
                    <div style={imgFlex}>
                      <a href="/facebook"><i class="fab fa-facebook-f fa-lg" style={fa}></i></a>
                      <a href="/twitter"><i class="fab fa-twitter fa-lg" style={fa}></i></a>
                      <a href="/instagram"><i class="fab fa-instagram fa-lg" style={fa}></i></a>
                    </div>
                    <div>
                      <input type="text" name="you@email.com" value="you@email.com"/>
                      <p><button style={button}>Subscribe to Update</button></p>
                    </div>
                  </div>

                  <div style={footerCards}>
                    <h4>ABOUT SENSORS.AFRICA</h4>
                    <p>sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water
                      and sound polution to give citizens actionable information about their cities.
                    </p>
                    <button style={button}>Read More</button>
                  </div>

                  <div style={footerCards}>
                     <p>This initiative was seed-funded by innovateAFRICA,and is being 
                       incubated by Code for Africa</p>
                       
                       <p>
                         <img src={partnerlogo} alt="Partner Logos"/>
                       </p>
                  </div>
              </div>
            </section>
         );
    }
}
export default Footer;