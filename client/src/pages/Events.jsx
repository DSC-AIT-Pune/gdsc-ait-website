import React from "react";
import Ofest from "./ofest";
import EventGrid from "../components/events_components/EventsGrid";
import ExpandedLayout from "../components/events_components/ExpandLayout";
import {Grid, Box} from '@mui/material'
import EventTimelineImage from '../styles/images/event_timeline.jpg'
import styles from '../styles/pages/events/events.module.css'

const Events = () => {

  
  let majorEvents = [
    {
        name: "30 Days Of Cloud",
        img: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fevent-banner%2F30DaysOfCloud.png?alt=media&token=876d3456-5598-4787-87ba-e9259462cd8f",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2F30DaysOfCloud%2F30DaysOfCloud-logo.png?alt=media&token=9b241f2d-e669-410c-9087-915e76b8644e",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    },
    {
        name: "Android Study Jams",
        img: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fandroid-study-jams%2Fandroid-study-jams.jpeg?alt=media&token=7a00e80a-4dfb-4990-8ed9-fdd2f92ebfed",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    },
    {
        name: "Flutter Engage",
        img: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fflutter-engage%2Fflutter-engage-sharing.jpg?alt=media&token=40adfed7-df42-443f-a6ff-b822b4c1cb75",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    },
    {
        name: "Google Solution Challenge",
        img: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2FGoogle-Solution-Challenge%2Fgdsc_2021_header.png?alt=media&token=90b33635-be76-4e47-80f5-cd1518228486",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    },
    {
        name: "Explore ML",
        img: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fexplore-ml%2Fexplore-ml.jpg?alt=media&token=f3694cee-de93-4495-aaad-197a12fa932e",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    }
]

  const MajorEvents = majorEvents.map((event,ind) => {
    return(
    <ExpandedLayout 
      id={ind} 
      img={event.img} 
      text={event.desc} 
      heading={event.name} 
      url={event.url} />
    )
  });

  return (
      <div className={styles.eventSection}>
        <section className={styles.bannerSection}>
            <Grid container lg={12} md={12} xs={12} className={styles.bannerSectionContainer}>
                <Grid item lg={7} md={12} xs={12}>
                    <img className={styles.bannerImage} src={EventTimelineImage} />
                </Grid>
                <Grid item lg={5} md={12} xs={12} className={styles.bannerContent}>
                    <div className={styles.bannerHeading}><h1>{"Participate and Engage"}</h1></div>                   
                    <div className={styles.bannerSubText}><span>{"We are team of experienced developers who are interested in giving back to the community"}</span></div>
                </Grid>
            </Grid>
        </section>
        <div className={styles.sectionHeading} >
            <span >{"Major Events"}</span>
        </div>

        <section className={styles.sectionStyle}>
          {MajorEvents}
        </section>
        
        <div className={styles.sectionHeading} >
            <span >{"Minor Events"}</span>
        </div>
        
        <div className={styles.eventTimeline} >
              <div><span className={styles.eventTimelineItems}>{"Previous"}</span></div>
              <div><span className={styles.eventTimelineItems}>{"Current"}</span></div>
              <div><span className={styles.eventTimelineItems}>{"Upcomming"}</span></div>
        </div>
        <section style={{marginTop:"48px", marginBottom:"32px"}}><EventGrid /></section>
        
      </div>
   

  );
};

export default Events;
