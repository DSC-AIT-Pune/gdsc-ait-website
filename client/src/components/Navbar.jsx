import React from "react";
import { Link } from "react-router-dom";
import logo from "../styles/images/logo.png";
import Home_phone_logo from "../styles/images/Home_phone_logo.png";
import schedule_phone_logo from "../styles/images/schedule_phone_logo.png";
import idea_phone_logo from "../styles/images/idea_phone_logo.png";
import contact_phone_logo from "../styles/images/contact_phone_logo.png";

const NavBar = (props) => {
  return (
    <nav className="header-nav">
      <div className="navbar_desktop">
        <img src={logo} alt="logo" className="logo" />
        <div className="Nav_links">
          <Link to="/" className="Link">
            Home
          </Link>
          <Link to="/events" className="Link">
            Events
          </Link>
          <Link to="/projects" className="Link">
            Projects
          </Link>
          <Link to="/core-team" className="Link">
            Core Team
          </Link>
        </div>
      </div>

      <div className="phone_navbar">
        <Link to="/" className="Link">
          <img src={Home_phone_logo} alt="" />
        </Link>
        <Link to="/events" className="Link">
          <img src={schedule_phone_logo} alt="" />
        </Link>
        <Link to="/projects" className="Link">
          <img src={idea_phone_logo} alt="" />
        </Link>
        <Link to="/core-team" className="Link">
          <img src={contact_phone_logo} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
