import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import Hello from "./com/hell";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 ="../../img/1.jpg"
const image2 ="../../img/2.jpg"
const image3 ="../../img/4.jpg"
const image4 ="../../img/3.jpg"

const App = () => (
  <div style={styles}>
    <Hello name="par" />
    <Parallax bgImage={image1} strength={500}>
<div style={{ height: 500 }}>
<div style={insideStyles}>HTML inside the parallax</div>
</div>
  </Parallax><br/>
    <h4>blur</h4>

    <Parallax bgImage={image3} blur={{ min: -3, max: 5 }}>
<div style={{ height: 500 }}>
<div style={insideStyles}>Dynamic Blur</div>
    </div><br/><br/>
    </Parallax>

    <h4>rev</h4>
    <Parallax bgImage={image2} strength={-100}>
<div style={{ height: 500 }}>
<div style={insideStyles}>Reverse direction</div>
</div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax
bgImage={image4}
strength={200}
renderLayer={percentage => (
<div>
  <div
    style={{
position: "absolute",
background: `rgba(255, 125, 0, ${percentage * 1})`,
left: "50%",
top: "50%",
borderRadius: "50%",
transform: "translate(-50%,-50%)",
width: percentage * 500,
height: percentage * 500
    }}
  />
</div>
)}
    >
<div style={{ height: 500 }}>
<div style={insideStyles}>renderProp</div>
</div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

export default App
