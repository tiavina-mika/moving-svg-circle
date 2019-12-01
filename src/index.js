import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Circle3 from './circle-ext-1';
const useStyles = makeStyles({
  container: {
    backgroundColor: '#191D1F'
  },
  circle1: {
    fill: '#111518',
    stroke: '#40A9F3',
    strokeWidth: '0.1px',
  },
  circle2: {
    fill: 'none',
    stroke: '#40A9F3',
    strokeWidth: '0.1px'
  },
  shadow: {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: '0.1px'
  },
  circle3: {
    fill: 'none',
    stroke: '#40A9F3',
    strokeWidth: '0.1px'
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <svg viewBox="0 0 250 250" className={classes.container}>
        <g>
          <circle r="60" cx="120" cy="120" className={classes.shadow}/>
          <path d ="M60,120a60,60 0 1,0 120,0a60,60 0 1,0 -120,0"
          className={classes.circle1}/>
          <circle r="50" cx="120" cy="120" className={classes.circle2}/>
        </g>
        {/* <g transform="translate(10, 30)"> */}
          {/* <circle r="10" cx="180" cy="120" className={classes.circle3}/> */}
        {/* </g> */}
        {/* <Circle3/> */}
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
