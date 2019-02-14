import React from "react";
import { render } from "react-dom";
import Plx from "react-plx";

const dat= [
   {
    start: 0,
    duration: 1000,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: 2,
        property: "scale"
      },
      {
        startValue: 0,
        endValue: 0,
        property: "rotate"
      },
      // Blur is not performant
      // Used just as an example for CSS filters
      {
        startValue: 0,
        endValue: 2,
        property: "blur"
      }
    ]
  }
];

const styles = {
  width: 100,
  height: 100,
  lineHeight: "100px",
  textAlign: "center",
  borderRadius: 20,
  backgroundColor: "#34ba9c",
  color: "#fff",
  left: "50%",
  marginLeft: -50,
  top: 100,
  position: "fixed",
  fontFamily: "Helvetica, Arial, sans-serif"
};

const Pl = () => (
  <div style={{ height: 3000 }}>
<Plx parallaxData={dat} style={styles}>
      Hello!
    </Plx>
  </div>
);
export default Pl
