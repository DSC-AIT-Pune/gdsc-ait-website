import React, { useState } from "react";
import detailDSClogo from "../../styles/images/gdsclogo.svg";
import MlearningLogo from "./disImg/MlearningLogo.svg";
import androidLogo from "./disImg/androidLogo.svg";
import GcloudLogo from "./disImg/GcloudLogo.svg";
import WebLogo from "./disImg/GcloudLogo.png";

const Description = () => {
  const [state, setState] = useState({
    breif:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
  });

  return (
    <div className="description_container">
      <img src={detailDSClogo} alt="dscLogo" />
      <p>{state.breif}</p>
      
      <h3>Technology</h3>
      <p>These are some of the technologies we mainly try to focus on at DSC AIT</p>
      <div className="tecnolgyContainer">
        <div className="techCard">
          <div className="techlogo ">
            <img src={MlearningLogo} alt="" />
          </div>
          <h3>Machine Learning</h3>
        </div>
        <div className="techCard">
          <div className="techlogo t2">
            <img src={WebLogo} alt="" />
          </div>
          <h3>Web Development</h3>
        </div>
        <div className="techCard">
          <div className="techlogo t3">
            <img src={GcloudLogo} alt="" />
          </div>
          <h3>Google cloud</h3>
        </div>
        <div className="techCard ">
          <div className="techlogo t4">
            <img src={androidLogo} alt="" />
          </div>
          <h3>Android Development</h3>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>
      </div>
      
    </div>
  );
};

export default Description;
