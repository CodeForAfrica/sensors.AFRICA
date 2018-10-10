import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactSpeedometer from "react-d3-speedometer";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  gaugeBox: {
    [theme.breakpoints.down('md')]: {
      width: "150px",
      marginLeft: "15%", padding: "40px 10px",
    },
    color: "white", textAlign: "center", width: "250px",
    marginLeft: "20%", padding: "40px 15px",
    marginTop: "-30%", border: "1px white solid"
  },
  gaugeDesc: {
    [theme.breakpoints.down('md')]: {
      bottom: "0", width: "80%", padding: "40px 0px",
    },
    color: "white", textAlign: "center", width: "250px", padding: "40px 15px",
    marginTop: "-30%"
  },
  gaugeWho: {
    [theme.breakpoints.down('md')]: {
      left: "7%",
    },
    color: "white", bottom: "10%",
    left: "25%", position: "absolute"
  },
  gaugeNeedleItem: {
    width: "600px",height: "300px",
    top: "64px", position: "absolute"
  },
  gaugeArc: {
    [theme.breakpoints.down('sm')]: {
      width: "400px",
      height: "200px",
    },
    width: "600px",
    height: "300px",
  },
  gaugeWhiteItem: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  }
});

class CityGauge extends Component {

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof HTMLElement) {
      const gaugeLabels = node.querySelectorAll('.label > text');
      let deg = -90;
      for (let valueLabel of gaugeLabels) {
        if(valueLabel.hasAttribute('transform')) {
          let newtrans = "rotate("+ deg + ") translate(0,-200)";
          deg += 22.5;
          valueLabel.setAttribute('transform', newtrans);
        }
      }

      var transform = 0;
      const currentVal = node.querySelector('.current-value');
      if (currentVal) {
        transform = (this.props.airPollMeasurement/160 * 180).toFixed(2) - 90;
        currentVal.setAttribute('transform', 'rotate('+transform+') translate(0,-315)');
      }

      const pointer = node.querySelector('.pointer > path');
      pointer.setAttribute('stroke-width', '10');
      pointer.setAttribute('stroke', '#144a3d');
      if (pointer.hasAttribute('transform')) {
        pointer.setAttribute('transform', 'rotate('+transform+')');
      }
    }
  }
  render() {
    const classes = this.props.classes;
    const airStat = (this.props.airPollMeasurement/10 * 100).toFixed(1);
    var gaugeText = "";
    if (airStat > 100) {
      gaugeText = (airStat-100) + "% OVER THE"
    }
    else if (airStat < 100) {
      gaugeText = (100 - airStat) + "% BELOW THE"
    }
    else {
      gaugeText = "AT THE "
    }
    return (
      <Grid container item xs={12} direction="row" justify="center"
        alignItems="center"  style={{ paddingTop: "0.45rem", height: "auto" }}>
        <Grid container item xs={12} md={3} lg={3} direction="column">
          <p className={classes.gaugeBox}>
           WHO Guideline (10) Lowest level at which premature
          mortality increases inresponse to long term exposure</p>

        </Grid>
        <Grid container item xs={12} md={6} lg={6} alignItems="center" direction="column">
        <p className={classes.gaugeWho}>
        <strong>WHO GUIDELINE</strong></p>
          <div className={classes.gaugeArc}>
            <ReactSpeedometer
                  fluidWidth={true}
                  ringWidth={60}
                  minValue={0}
                  maxValue={150}
                  value={this.props.airPollMeasurement}
                  segments={8}
                  textColor="white"
                  startColor="#5fbf82"
                  endColor="#b72025"
                  needleColor="#144a3d"
                  textColor="#144a3d"
             />
             </div>
             <svg className={classes.gaugeNeedleItem}>
              <g transform="translate(300,300)">
               <path
               d="M5,0C3.333333333333333,-135,1.6666666666666667,-270,0,-270C-1.6666666666666667,-270,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
               fill="#144a3d" transform="rotate(-78.75)"
               stroke-linecap="round" stroke-width="3" stroke="#fefffd"
               style={{cursor: "-webkit-grab", cursor: "grab"}}></path>
              </g>
             </svg>
             <svg style={{width: "300px", height: "150px", top: "14rem",
             justify:"center", position: "absolute"}}>
               <circle
                 r="150"
                 cx="150"
                 cy="150"
                 fill="white"
               className={classes.gaugeWhiteItem} />
               <circle
                 r="75"
                 cx="150"
                 cy="150"
                 fill="white"
               />
               <g transform="translate(150,60)" style={{height: "30px"}}>
                <text transform="translate(0,10)" text-anchor="middle"
                  style={{fontSize: "24px", fontWeight: "bold",
                  fill: "#164a3e"}}>{gaugeText}</text>
                <text transform="translate(0,40)" text-anchor="middle"
                  style={{fontSize: "24px", fontWeight: "bold",
                  fill: "#164a3e"}}>SAFE LEVEL</text>
                <text transform="translate(0,70)" text-anchor="middle"
                  style={{fontSize: "14px", fontWeight: "bold",
                  fill: "#164a3e"}}>PM<tspan baseline-shift = "sub">2.5 </tspan>
                   ANNUAL EXPOSURE</text>
               </g>
             </svg>
        </Grid>
        <Grid container item xs={12} md={3} direction="column">
          <p className={classes.gaugeDesc}>
           <strong>*PM<sub>2.5</sub> concentrations measured in microgrmas of particles
           per cubic meter of air <span>&#181;</span>g/m3</strong><br/><br/>
          <em>Data: WHO Global Platform on Air Quality & Health</em></p>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CityGauge);
