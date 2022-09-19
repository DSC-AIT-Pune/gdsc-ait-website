import React from "react";
import axios from "axios"
import VideoGrid from "../components/videos_components/VideoGrid";
import Adventure from '../styles/images/adventure.jpg'
import { Grid } from "@mui/material";
import styles from '../styles/pages/videos/videos.module.css';
import Banner from "../common/Banner";
import ExpandedLayout from "../components/events_components/ExpandLayout";
import Program from "../database/Program";

const MEMBER_URI = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBN0SnAfkBnIHIN_5LbOCxlc_6cG1owF8Y&channelId=UCjw9RT5WEKOWSob1f4oiqdQ&part=snippet,id&order=date&maxResults=20"

const MajorEvents = Program.map((event, ind) => {
  return (
    <ExpandedLayout
      id={ind}
      img={event.img}
      text={event.desc}
      heading={event.name}
      url={event.url} 
      />
  )
});

// const MajorEvents = Program.map((event, ind) => {
//   return (
//     <ExpandedLayout
//       id={ind}
//       {...event}
//       />
//   )
// });


class Programs extends React.Component {
  state = {

  }

  componentDidMount() {
    // axios.get(MEMBER_URI).then((res)=>{
    //   this.setState({
    //     videos: res.items
    //   })
    // })
  }



  render() {
    return (
      <div className={styles.videoSection}>

        <Banner image={Adventure}
          color="#6199F6"
          heading={"Accelerate your career, with google programs"}
          subtext={"Participate in a variety of programs to learn from, work with, and grow alongside industry experts and leaders. We are here to help you achieve your goal of making a difference in the world."} />

        <section className={styles.sectionStyle}>
          {MajorEvents}
        </section>

      </div>
    )
  }
}

export default Programs;
