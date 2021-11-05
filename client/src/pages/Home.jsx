import React, { Component } from "react";
import Description from "../components/home_components/Description";
import EventsHome from "../components/home_components/EventsHome";
import introImage from "../styles/images/we_love_dev.jpg";
import GoogleDevImage from '../styles/images/google_dev.png'
import hacktoberlogo from "../styles/images/team-images/hacktoberlogo.svg";
import '../styles/pages/home.css';

class Home extends Component {
    state = {
        description: "Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.",
    };

    render() {
        return (
            <div className="frontPage">
                <div className="welcome">
                    <div className="content">
                        <div><h1 className="Title_heading"><span style={{color:"#FF313C"}}>Connect.</span><span style={{color:"#4282EB"}}>Learn.</span><span style={{color:"#43B864"}}>Grow</span></h1></div>
                        <div style={{flexDirection: "row", display:"flex"}}>
                            <div><h2><span style={{color:"black", fontWeight:"lighter"}}>Powered by</span></h2></div>
                            <div style={{paddingLeft:"16px"}}><img src={GoogleDevImage} style={{height:"36px", flexDirection: "row", display:"flex"}}/></div>
                        </div>
                        <div><p><span style={{color:"grey",fontSize:"18px", fontWeight:"lighter"}}>{this.state.description}</span></p></div>
                        
                        
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

                
            </div>
        );
    }
}

export default Home;
