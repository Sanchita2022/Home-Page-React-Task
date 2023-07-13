import React from "react";
import Nav from "./Nav.jsx";
import "./HeroHeader.css";

const HeroHeader = () => {
  return (
    <div className="HeroHeader">
      <Nav></Nav>
      <div className="Banner">
        <div className="rightContent">
          <p><span>Lets Start</span> Your Dream</p>
          <h1>Become A <span style={{color:"green"}}>State Genius</span><br/> Of The Year</h1>
          <p>Enroll for state Genius @<b style={{fontSize:"larger"}}>Rs. 2750</b></p>
          <button className="primaryButton"> Get Started </button>
        </div>
        {/* <img alt="Loading" src="./images/BAnner_mascott 1.png"></img> */}
        <img alt="Loading" src="./images/Student1.png"/>
        {/* <div className="circle"></div> */}
        <img class="floatingBanner" alt="Loading" src="./images/h.png"/>
      </div>
    </div>
  );
};

export default HeroHeader;
