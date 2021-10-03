import React, { Component } from "react";
import image from "../styles/images/image.png";
import insta from "../styles/images/insta.png";
import yt from "../styles/images/yt.png";
import Github from "../styles/images/Github.png";
import facebook from "../styles/images/facebook.png";
import linkedIn from "../styles/images/linkedIn.png";
import Description from "./home_components/description";
import Social from "./home_components/social";


class Home extends Component {
  state = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
    socialMedia: [
      { url: "fdsf", id: "1", src: insta },
      { url: "fdsfds", id: "2", src: yt },
      { url: "fdf", id: "3", src: Github },
      { url: "fdfd", id: "4", src: facebook },
      { url: "ddfs", id: "5", src: linkedIn },
    ],
  };

  render() {
    return (
      <div className="frontPage">
        <div className="welcome">
          <div className="content">
            <h1 className="Title_heading">Lorem ipsum </h1>
            <br />
            <p>{this.state.description}</p>
            <button className="Member_button">Join as member</button>
            <button href="dfsdf" className="Discord_button">
              Join Discord
            </button>
            <div className="socialMediaLink">
              {this.state.socialMedia.map((social_Media) => (
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
          <div className="HomePage_svg">
            <img src={image} alt="fdsfsdf" className="svg" />
          </div>
        </div>

        <div className="description_container">
          <Description />
        </div>

        <div className="SocialMediaContainer">
          <Social />
        </div>

      </div>
    );
  }
}

export default Home;
