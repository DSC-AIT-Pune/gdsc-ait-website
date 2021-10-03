import React, { useState } from "react";
import map from "../../styles/images/Map.svg";
import insta from "./disImg/insta.png";
import Github from "./disImg/Github.png";
import facebook from "./disImg/facebook.png";
import linkdIn from "./disImg/linkedIn.png";

const Social = () => {
  const [state, setState] = useState([
    { url: "fdsf", id: "1", src: insta },
    { url: "fdf", id: "3", src: Github },
    { url: "fdfd", id: "4", src: facebook },
    { url: "ddfs", id: "5", src: linkdIn },
  ]);
  return (
    <div className="SocialMedia">
      <div className="map">
        <div>
          <h3>Where you can find us ?</h3>
          <h1>Google Developer Student Club</h1>
        </div>

        <img src={map} alt="" />
      </div>

      <div className="socialLinks">
        
        <div className="socialDetails">
          <h1>GDSC AIT</h1>
          <div className="socialAddesss">
            <div className="s1">
              <p>Contact</p>
              <p>+91-9483958384</p>
              <p>dsc.aitpune@gmail.com</p>
            </div>
            <div className="s1">
              <p>Address</p>
              <p>Alandi Road </p>
              <p>Dighi Hills</p>
              <p>Pune-411015 </p>
            </div>
            <div className="s1">
              <p>Dev Programs</p>
              <p>Google Solutions</p>
              <p>Study JAMs</p>
              <p>Flutter</p>
            </div>
          </div>
          <div className="socialMediaLink s4">
            {state.map((social_Media) => (
              <a href={social_Media.url}>
                <img
                  src={social_Media.src}
                  alt={social_Media.id}
                  className="social_Media_logo"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
