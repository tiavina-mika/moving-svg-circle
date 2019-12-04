import React from "react";
import ReactDOM from "react-dom";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Circle3 from './circle-ext-1';
const useStyles = makeStyles({
  container: {
    backgroundColor: '#000'
  },
  circle1: {
    fill: '#0B2926',
    stroke: '#40A9F3',
    strokeWidth: '0.1px',
  },
  circle2: {
    fill: '#2CAAA1',
    stroke: '#40A9F3',
    strokeWidth: '0.1px'
  },
  shadow: {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: '0.1px'
  },
  circle3: {
    fill: 'red',
    stroke: '#40A9F3',
    strokeWidth: '0.1px'
  },
  text: {
    fill: '#fff',
    fontSize: 8
  },
  circleOut1: {
    stroke: '#31BCB1',
    fill: 'none',
    strokeWidth: '0.4',
    '&:hover': {
      fill: '#31BCB1'
    }
  },
  circleOut2: {
    stroke: '#16534E',
    fill: 'none',
    strokeWidth: '0.3'
  },
})

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <svg viewBox="0 0 300 300" className={classes.container}>
          <line x1="20" x2="20" y1="0" y2="300" style={{stroke: '#404040', strokeWidth:"0.4"}}/>
          <g>
            {/* <circle r="60" cx="120" cy="120" className={classes.shadow}/>
            <circle r="60" cx="120" cy="120" className={classes.shadow}/> */}
            {/* <path d ="M60,120a60,60 0 1,0 120,0a60,60 0 1,0 -120,0"
            className={classes.circle1}/> */}

            <circle r="100" cx="150" cy="150" className={classes.circle1}/>
            <circle r="80" cx="150" cy="150" className={classes.circle2}/>
            <text x="110" y="100" className={classes.text}>Development -</text>
          </g>
          <g>
            <circle cx="70" className={classes.circleOut2}>
              <animate attributeName="r" fill="freeze" values="40; 45; 40" dur="2s"repeatCount="indefinite"/>
              <animate attributeName="cy" fill="freeze" values="180; 182; 185; 182; 180" dur="3.1s"repeatCount="indefinite"/>
            
            </circle>
            <circle cx="70" className={classes.circleOut1}>
                {/* <animateMotion dur="20s" repeatCount="indefinite"
                path="M60,120a60,60 0 1,0 120,0a60,60 0 1,0 -120,0" 
                /> */}
                <animate attributeName="r" fill="freeze" values="30; 35; 30" dur="2s"repeatCount="indefinite"/>
                <animate attributeName="cy" values="180; 182; 185; 182; 180" dur="3s"repeatCount="indefinite"/>
              </circle>
          </g>
          <line x1="80" x2="80" y1="0" y2="300" style={{stroke: '#404040', strokeWidth:"0.4"}}/>
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
