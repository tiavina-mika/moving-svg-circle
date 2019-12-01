import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles({
  circle3: {
    fill: 'none',
    stroke: '#40A9F3',
    strokeWidth: '0.1px'
  }
})

const Circle3 = () => {
  const classes = useStyles();
  const props = useSpring({
    to: {y: 110, x: 180},
    from: {y: 200, x: 250}
  });

  return (
    // <g transform="translate(20, 0)">
    //   <animated.circle r="10"
    //     // cx={props.x.interpolate(x => `translate(0,${x}px)`)}
    //     // cy={props.y.interpolate(y => `translate(${y}py, 0)`)} 
    //     // cx={props.x}
    //     // cy={props.y}
    //     cx={110}
    //     cy={180}
    //     className={classes.circle3}
    //   // style={{ transform: x.interpolate(x => `translate(0,${x}px)`) }}
    //   />
    // </g>
    // <path d="M110,120a10,10 0 1,0 20,0a10,10 0 1,0 -20,0" 
    // />
    // <circle r="5" fill="red" cx={110} cy={180}>
    <path d="M100,180a10,10 0 1,0 20,0a10,10 0 1,0 -20,0" />
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M100,180a10,10 0 1,0 20,0a10,10 0 1,0 -20,0" />
  </path>
  );
}

export default Circle3;
