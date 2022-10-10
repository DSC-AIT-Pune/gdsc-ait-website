import React from "react";
import axios from "axios"
import VideoGrid from "../components/videos_components/VideoGrid";
import SocialDistanceImage from '../styles/images/social-distance.png'
import { Grid } from "@mui/material";
import styles from '../styles/pages/videos/videos.module.css';
import Banner from "../common/Banner";

import Videos from "../database/Videos";

const MEMBER_URI = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBN0SnAfkBnIHIN_5LbOCxlc_6cG1owF8Y&channelId=UCjw9RT5WEKOWSob1f4oiqdQ&part=snippet,id&order=date&maxResults=20"

const Video = () =>{


  // componentDidMount() {
  //   // axios.get(MEMBER_URI).then((res)=>{
  //   //   this.setState({
  //   //     videos: res.items
  //   //   })
  //   // })
  // }

    return(
      <div className={styles.videoSection}>
        
              <Banner image={SocialDistanceImage} 
                color="#6199F6"
                heading={"Stay safe, attend our events virtually"}
                subtext={"We upload all event recording to our YouTube channel, subscribe to get all the latest events recordings."}/>
          
        <div className={styles.eventVideoHeading}>
          <span >{"Event Videos"}</span>
        </div>
        <section className={styles.member} style={{marginTop: "48px"}}>
          <VideoGrid videoArray={Videos}/>
        </section>
    </div>
    )
}

export default Video;
