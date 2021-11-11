import React from "react";
import axios from "axios"
import VideoGrid from "../components/videos_components/VideoGrid";
import SocialDistanceImage from '../styles/images/social-distance.png'
import { Grid } from "@mui/material";
import styles from '../styles/pages/videos/videos.module.css';
import Banner from "../common/Banner";


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
      <div className={styles.videoSection}>
        
              <Banner image={SocialDistanceImage} 
                color="#6199F6"
                heading={"Stay safe, attend our events virtually"}
                subtext={"We are team of experienced developers who are interested in giving back to the community"}/>
          
        <div className={styles.eventVideoHeading}>
          <span >{"Event Videos"}</span>
        </div>
        <section className={styles.member} style={{marginTop: "48px"}}>
          <VideoGrid/>
        </section>
    </div>
    )
  } 
}

export default Team;
