import React from "react";
import "./FooterBanner.css";
import {BiLogoFacebook,BiLogoLinkedin} from "react-icons/bi";
import {AiOutlineTwitter} from "react-icons/ai"

const FooterBanner = () => {
  return (
    <div className="footerBanner">
      <div className="upper">
      <div className="left">
     
     <img src="./images/footer logo.png"/>
     <h2>Reach out to us </h2>
     <p>Get your questions answered about<br/> learning with IIETE</p>
     <p> +91 123 456 7890</p>
   </div>
   <div className="middle">
    <ul className="list-middle">
      <li>About Us</li>
      <li>Academics</li>
      <li>Content</li>
      <li>Become an Instructor</li>
      <li>Testimonials</li>
      <li>Contact Us</li>
      <li>Academic Proposal</li>
    </ul>
   </div>
   <div className="right">
   <ul className="list-right">
      <li>Academic Programs</li>
      <li>Fees & Commercials</li>
      <li>The Academic Program Advantage</li>
      <li>IIETE Methodology</li>
      <li>Technology Based Enables</li>
      <li>Academic Partner</li>
      <li>Academic Proposal</li>
    </ul>
   </div>
      </div>
      <div className="below">
        <div className="below-left">
        <p> Copyright @ 2023 IIETE. All Rights Reserved</p>
        </div>
        <div className="social">
          <BiLogoFacebook style={{fontSize:"27px"}}/>

          <AiOutlineTwitter style={{fontSize:"27px"}}/>
          <BiLogoLinkedin style={{fontSize:"27px"}}/>
        </div>
      </div>
      
    </div>
  );
};

export default FooterBanner;
