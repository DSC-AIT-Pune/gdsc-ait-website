import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../styles/images/gdsc_logo.png";
import bg_svg from "../styles/images/bg_svg.png";
import Home_phone_logo from "../styles/images/Home_phone_logo.png";
import achivement_phone_logo from "../styles/images/achivement_phone_logo.png";
import schedule_phone_logo from "../styles/images/schedule_phone_logo.png";
import calender_phone_logo from "../styles/images/calender_phone_logo.png";
import idea_phone_logo from "../styles/images/idea_phone_logo.png";
import contact_phone_logo from "../styles/images/contact_phone_logo.png";
import contact_Us_phone_logo from "../styles/images/contact_Us_phone_logo.png";
import '../styles/components/navbar.css';

const NavBar = (props) => {
  return (
    <nav className="header-nav">
      <div className="navbar_desktop">
        <img src={logo} alt="gdscLogo" className="logo" />
        <div className="Nav_links">
          <NavLink to="/" className="Link">
            Home
          </NavLink>
          <NavLink to="/events" className="Link">
            Events
          </NavLink>
          <NavLink to="/solutions" className="Link">
            Solutions
          </NavLink>
          <NavLink to="/videos" className="Link">
            Videos
          </NavLink>
          <NavLink to="/coreTeam" className="Link">
            Core Team
          </NavLink>
          <NavLink to="/contact" className="Link">
            Contact
          </NavLink>
        </div>
      </div>

      {/*<div className="phone_navbar">
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
      </div>*/}
    </nav>
  );
};

export default NavBar;
