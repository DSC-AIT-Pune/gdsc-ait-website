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

  let minorEvents = [
    {
        name: "#30DaysOfCloud: Orientation",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fevent-banner%2F30DaysOfCloud.png?alt=media&token=876d3456-5598-4787-87ba-e9259462cd8f",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2F30DaysOfCloud%2F30DaysOfCloud-logo.png?alt=media&token=9b241f2d-e669-410c-9087-915e76b8644e",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud."
    },
    {
        name: "Hacktoberfest",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "Start your open-source journey while earning a branded Hacktoberfest T-shirt."
    },
    {
        name: "DevLok",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fdevlok%2Fdevlok-poster.jpg?alt=media&token=d1b5c64a-62a9-4d8f-a38f-96154d5854f7",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fgoogle-core-web-vitals-5eb1b37825ad1-760x400.png?alt=media&token=4beb587c-c9f7-47ef-b3cf-00ea6e1c65a4",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "GDSC AIT & AIT OSS Club presents DevLok, this year's first event. Exclusive for AIT students, this event is a platform for students to learn new skillsets and tech-stacks under the guidance of our experienced mentors."
    },
    {
        name: "New To Programming Track: Session 2",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fandroid-study-jams%2Fandroid-study-jams.jpeg?alt=media&token=7a00e80a-4dfb-4990-8ed9-fdd2f92ebfed",
        logo: "https://miro.medium.com/max/1400/1*yIrYl18oa_jtivCrJEKvYw.png",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-presents-new-to-programming-track-session-2/",
        desc: "Learn the basics of building Android apps with the Kotlin programming language and develop a collection of simple apps to start your journey as an Android developer."
    },
    {
        name: "Android Study JAM Session for Prior Programmers",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fandroid-study-jams%2Fads21-jetpack-compose-material-you_960.png?alt=media&token=0535d5d4-296e-4cc7-8b92-da885e6d3559",
        logo: "https://miro.medium.com/max/1400/1*yIrYl18oa_jtivCrJEKvYw.png",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-presents-android-study-jam-session-for-prior-programmers/",
        desc: "First learn the essentials of the Kotlin programming language. Then learn the fundamentals of Android development and best practices by building a variety of Android apps in Kotlin."
    },
    {
        name: "Android Study JAM Session for Beginners - Session 1",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fandroid-study-jams%2Fads21-modern-android-development_1920.png?alt=media&token=e450f7c5-9b27-4516-842e-e5131322428b",
        logo: "https://miro.medium.com/max/1400/1*yIrYl18oa_jtivCrJEKvYw.png",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-presents-android-study-jam-session-for-beginners-session-1/",
        desc: "Learn the basics of building Android apps with the Kotlin programming language and develop a collection of simple apps to start your journey as an Android developer."
    },
    {
        name: "Introduction to DevOps and Cloud Technologies",
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZ-9i2ON_XW4laWKyT9SNY7VN2O2K1aOn1e1pO7C1--DZjJuA9cc50shNQ7eSivBaZlg&usqp=CAU",
        logo: "https://cdn.iconscout.com/icon/free/png-256/azure-devops-3628645-3029870.png",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-presents-introduction-to-devops-and-cloud-technologies/",
        desc: "The session will give you a good insight into DevOps, what it is and you will be given knowledge about the various paths which you can follow in this field according to your interests."
    },
    {
        name: "DSC-AIT ML,DL and Tensorflow Workshop",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fexplore-ml%2Ftf_dribbb.webp?alt=media&token=73fd8574-5d92-4df9-88db-de5615020227",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "DSC_AIT Pune, in association with Deep Info Lab, brings you a series of seminars, to give you a head start in your ML and Deep Learning journey."
    },
    {
        name: "Introduction to GSoC & Past Experience Talk",
        banner: "https://athityakumar.github.io/assets/images/blog/GSoC_2017_-_Acceptance_of_Student_Proposal/banner.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1024px-GSoC-icon.svg.png",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-presents-introduction-to-gsoc-past-experience-talk/",
        desc: "Google Summer of Code is a global program focused on bringing more student developers into open source software development."
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
                    <div className={styles.bannerSubText}><span>{"We host events and hackathons all year long, where you may learn new skills by putting your knowledge and talents to use in order to win prizes."}</span></div>
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
            <span >{"Sessions"}</span>
        </div>
        
        <div className={styles.eventTimeline} >
              <div><span className={styles.eventTimelineItems}>{"Previous"}</span></div>
              <div><span className={styles.eventTimelineItems}>{"Current"}</span></div>
              <div><span className={styles.eventTimelineItems}>{"Upcomming"}</span></div>
        </div>
        <section style={{marginTop:"48px", marginBottom:"32px"}}><EventGrid events={minorEvents}/></section>
        
      </div>
   

  );
};

export default Events;
