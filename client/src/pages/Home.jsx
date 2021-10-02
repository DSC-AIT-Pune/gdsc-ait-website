// Home page, basically we use the reusable components here in pages.
import React, { Component } from "react";
import image from "../images/image.png";
import insta from "../images/insta.png";
import movingCrossBgImage from "../images/movingCrossBgImage.png";
import yt from "../images/yt.png";
import Github from "../images/Github.png";
import facebook from "../images/facebook.png";
import linkdIn from "../images/linkedIn.png";
import Discription from "./home_components/discription";
class Home extends Component {
  state = {
    dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
    socialMedia: [
      { url: "fdsf", id: "1", src: insta },
      { url: "fdsfds", id: "2", src: yt },
      { url: "fdf", id: "3", src: Github },
      { url: "fdfd", id: "4", src: facebook },
      { url: "ddfs", id: "5", src: linkdIn },
    ],
  };

  render() {
    return (
      <div className="frontPage">
         <div className="welcome">
        {/* <img src={bg_svg} alt="" className='bg_svg' /> */}
        {/* <img src={movingCrossBgImage} alt="" className="rotate" />
        <img src={movingCrossBgImage} alt="" className="rotate2" /> */}
        <div className="content">
          <h1 className="Title_heading">Lorem ipsum </h1>
          <br />
          <p>{this.state.dis}</p>
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
      <div className="discription_container">
      <Discription/>
      </div>



      </div>
      
    );
  }
}

export default Home;
