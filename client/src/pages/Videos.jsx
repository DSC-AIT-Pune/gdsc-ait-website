import React from "react";
import axios from "axios"
import VideoGrid from "../components/videos_components/VideoGrid";
import SocialDistanceImage from '../styles/images/social-distance.png'
import { Grid } from "@mui/material";
import styles from '../styles/pages/videos/videos.module.css';


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
      <div className={styles.video}>
        <section className={styles.bannerSection} >
            <Grid container style={{marginLeft:"auto",marginRight:"auto"}}>
                <Grid item xs={6}>
                    <img src={SocialDistanceImage} style={{height: '420px'}}/>
                </Grid>
                <Grid item xs={6}>
                  <div className={styles.bannerContent} style={{display:"flex",flexDirection:"column"}}>           
                      <div className={styles.bannerHeading} ><h1 >{"Stay safe, attend our events virtually"}</h1></div>                   
                      <div className={styles.bannerSubText} ><span >{"We are team of experienced developers who are interested in giving back to the community"}</span></div>
                  </div>
                </Grid>
            </Grid>
        </section>
        <div style={{textAlign:"center"}}>
          <span style={{fontSize: "8vh", fontWeight: "bold", color: "#4285F4"}}>{"Event Videos"}</span>
        </div>
        <section className={styles.member} style={{marginTop: "48px"}}>
          <VideoGrid/>
        </section>
    </div>
    )
  } 
}

export default Team;
