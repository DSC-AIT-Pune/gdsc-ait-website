import React from "react";
import axios from "axios"
import VideoGrid from "../components/videos_components/VideoGrid";
import SocialDistanceImage from '../styles/images/social-distance.png'
import { Grid } from "@mui/material";

const MEMBER_URI = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBN0SnAfkBnIHIN_5LbOCxlc_6cG1owF8Y&channelId=UCjw9RT5WEKOWSob1f4oiqdQ&part=snippet,id&order=date&maxResults=20"

class Team extends React.Component {
  state = {
    
  }

  componentDidMount() {
    // axios.get(MEMBER_URI).then((res)=>{
    //   this.setState({
    //     videos: res.items
    //   })
    // })
  }

  render(){
    return(
      <div className="team">
        <section className="banner-section" style={{width:"85%", height:"75vh",padding: '6% 2% 2% 2%',marginLeft:"auto",marginRight:"auto"}}>
            <Grid container style={{marginLeft:"auto",marginRight:"auto"}}>
                <Grid item xs={6}>
                    <img src={SocialDistanceImage} style={{height: '420px'}}/>
                </Grid>
                <Grid item xs={6}>
                  <div style={{display:"flex",flexDirection:"column"}}>           

                      <div style={{height:"30%"}}><h1 style={{fontSize: "8vh", color: "#81C995"}}>{"Stay safe, attend our events virtually"}</h1></div>                   
                      <div style={{height:"70%",padding:"48px 48px 0 0"}}><span style={{color:"grey", fontSize:"24px"}}>{"We are team of experienced developers who are interested in giving back to the community"}</span></div>
                  </div>
                </Grid>
            </Grid>
        </section>
        <div>
            <div><span style={{fontSize: "8vh", fontWeight: "bold", color: "#4285F4"}}>{"Event Videos"}</span></div>
        </div>
        <section className="member" style={{marginTop: "48px"}}>
          <VideoGrid/>
        </section>
    </div>
    )
  } 
}

export default Team;
