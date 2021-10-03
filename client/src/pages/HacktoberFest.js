import React from "react";
import Contributors from "./Contributors";
import hacktoberlogo from "../styles/team-images/hacktoberlogo.svg";
import "../styles/team.css";

function HacktoberFest() {
  return (
    <React.Fragment>
      <div className="hack-page">
        <img src={hacktoberlogo} alt="HacktoberFest'21" />
        <h3>Open source is changing the world – one contribution at a time.</h3>
        <h1>⌄</h1>
      </div>
      <div className="contributers">
        <Contributors />
      </div>
    </React.Fragment>
  );
}

export default HacktoberFest;
