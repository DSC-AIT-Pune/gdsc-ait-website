import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import bg_svg from "../images/bg_svg.png";
import Home_phone_logo from "../images/Home_phone_logo.png";
import achivement_phone_logo from "../images/achivement_phone_logo.png";
import schedule_phone_logo from "../images/schedule_phone_logo.png";
import calender_phone_logo from "../images/calender_phone_logo.png";
import idea_phone_logo from "../images/idea_phone_logo.png";
import contact_phone_logo from "../images/contact_phone_logo.png";
import contact_Us_phone_logo from "../images/contact_Us_phone_logo.png";

const NavBar = (props) => {
  return (
    <nav>
      <div className="navbar_desktop">
        <img src={logo} alt="ffdf" className="logo" />
        <div className="Nav_links">
          <Link to="/" className="Link">
            Home
          </Link>
          <Link to="#AboutPage" className="Link">
            About
          </Link>
          <Link to="/Schedule" className="Link">
            {" "}
            Events
          </Link>
          <Link to="#ProjectsPage" className="Link">
            Projects
          </Link>
          <Link to="/Team_Members" className="Link">
            Team
          </Link>
        </div>
      </div>

      <div className="phone_navbar">
        <Link to="#HomePage" className="Link">
          <img src={Home_phone_logo} alt="" />
        </Link>
        <Link to="#AboutPage" className="Link">
          <img src={achivement_phone_logo} alt="" />
        </Link>
        <Link to="/Schedule" className="Link">
          <img src={schedule_phone_logo} alt="" />
        </Link>
        <Link to="#ProjectsPage" className="Link">
          <img src={idea_phone_logo} alt="" />
        </Link>
        <Link to="/Team_Members" className="Link">
          <img src={contact_phone_logo} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
