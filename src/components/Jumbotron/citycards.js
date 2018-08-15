import React, { Component } from 'react';
import air from '../../assets/landing/airbtn.png';
import water from '../../assets/landing/waterbtn.png';
import sound from '../../assets/landing/soundbtn.png';
import '../../App.css';


const cardcontainer = {
    display:'flex',
    flexDirection:'row', 
    justifyContent:'center'
}

const card ={
    height:'200px',
    width:'200px'
}
class CityCard extends Component {
    render() { 
        return ( 
            <div style={cardcontainer}>
                <div style={card}>
                    <img src={air}  alt="air"/>
                </div>
                <div style={card}>
                    <img src={water} alt="water"/>
                </div>
                <div  style={card}>
                    <img src={sound} alt="sound"/>
                </div>
            </div>
         );
    }
}
 
export default CityCard;