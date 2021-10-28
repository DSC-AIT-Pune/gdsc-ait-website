import React from "react";
import "../styles/team.css";
import hacktober from "../images/team-images/hacktober.jpg";
import { useHistory } from "react-router-dom";

function Ofest() {
  let history = useHistory();

  return (
    <div>
      <section className="fixed-bike">
        <div className="event-card">
        <div className="content">
          <h2
            className="subtitle"
            onClick={() => {
              history.push("/HacktoberFest");
            }}
          >
            HACKTOBERFEST NO. 08!
          </h2>
          <p>
            Hacktoberfest, in its 8th year, is a month-long celebration of open
            source software run by DigitalOcean. During the month of October, we
            invite you to join open-source software enthusiasts, beginners, and
            the developer community by contributing to open-source projects.
            Hacktoberfest encourages participation in the open source community,
            which grows bigger every year. Complete the 2021 challenge and earn
            a limited edition T-shirt. You can do this in a variety of ways:
            <ul>
              <li>Prepare and share your project for collaboration</li>
              <li>
                HContribute to the betterment of a project via pull requests
              </li>
              <li>Organize an event</li>
              <li>Mentor others</li>
              <li>Donate directly to open source projects</li>
            </ul>
          </p>
        </div>
        <img
          onClick={() => {
            history.push("/HacktoberFest");
          }}
          className="img-section1"
          src={hacktober}
          alt="HacktoberFest'21"
        />

        </div>
       
      </section>
    </div>
  );
}

export default Ofest;
