import React, { Component } from "react";
import Description from "../components/home_components/Description";
import EventsHome from "../components/home_components/EventsHome";
import introImage from "../styles/images/image.png";


class Home extends Component {
    state = {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
    };

    render() {
        return (
            <div className="frontPage">
                <div className="welcome">
                    <div className="content">
                        <h1 className="Title_heading">Connect-Learn-Grow</h1>
                        <p>{this.state.description}</p>
                        <button
                            className="Member_button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "https://gdsc.community.dev/army-institute-of-technology-pune/";
                            }}
                        >
                            Join as Member
                        </button>
                        <button
                            className="Discord_button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "https://discord.com/invite/56sCubbrtp";
                            }}
                        >
                            Join Discord
                        </button>
                    </div>

                    <div className="HomePage_svg">
                        <img src={introImage} alt="introImage" className="svg" />
                    </div>
                </div>

                <div className="description_container">
                    <Description />
                </div>

                <div className="home_events_container">
                    <EventsHome />
                </div>
            </div>
        );
    }
}

export default Home;
