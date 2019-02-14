import react from "react";
import { render } from "react-dom";
import Plx from "react-plx";

const dat= [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: -400,
        endValue: 0,
        property: "translateY"
      }
    ]
  }
];

const plxStyles = {
  width: "100%",
  height: 800,
  backgroundColor: "#34ba9c",
  position: "absolute",
  top: 0,
  background:
    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1200px-Hopetoun_falls.jpg) no-repeat",
  backgroundSize: "cover"
};

const wrapperStyles = {
  position: "relative",
  marginTop: 200,
  height: 400,
  overflow: "hidden"
};

const Pl = () => (
  <div style={{ height: 3000 }}>
    <h1>Some content</h1>
    <div style={wrapperStyles}>
      <Plx parallaxData={dat} style={plxStyles} />
    </div>
  </div>
);

export default Pl
