import React, {Component} from 'react';
import logowhite from '../../assets/landing/logowhite.png';
import CityCard from '../Jumbotron/citycards';
import 'App.css';

const logocontainer = {
    textAlign:'center'
  }

class Jumbotron extends Component {    
    render() { 
        return (  
            <section className="Image-section" >
                <div style={logocontainer}>
                    <img src={logowhite} alt="Logo"/>
                    <div style={{paddingTop:'2rem',textAlign:'center',paddingLeft:'25rem',paddingRight:'25rem'}}>
                        <h1>
                            We are here to give you actionable information about 
                            the quality of your city air,water and sound pollution.
                        </h1>
                    </div>
                    <div>
                      <h4 style={{paddingTop:'3rem'}}>TEST THE QUALITY OF THE CITY'S</h4>
                        <CityCard />
                    </div>
                  </div>
            </section>
        );
    }
}
 
export default Jumbotron;