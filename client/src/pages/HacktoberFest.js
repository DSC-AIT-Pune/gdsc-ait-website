import React from "react";
import "./team.css";
import hacktoberlogo from "./team-images/hacktoberlogo.svg";
import Contributors from "./Contributors";

function HacktoberFest() {
  return (
    <>
      <div className="hack-page">
        <img src={hacktoberlogo} alt="HacktoberFest'21" />
        <h3>Open source is changing the world – one contribution at a time.</h3>
        <h1>⌄</h1>
      </div>
      <div className="contributers">
        <Contributors />
      </div>
    </>
  );
}

export default HacktoberFest;
