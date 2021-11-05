import React from "react";
import Ofest from "./ofest";
import EventGrid from "../components/events_components/EventsGrid";
import ExpandedLayout from "../components/events_components/ExpandLayout";
import {Grid, Box} from '@mui/material'
import EventTimelineImage from '../styles/images/event_timeline.jpg'

const Events = () => {
  const timelineNavStyle = {
    width: '260px',
    height: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'white',
    overflow: 'hidden',
    boxShadow: '0 14px 26px rgba(0,0,0,0.04)',
    borderRadius: '22px',
    display: 'flex',
    flexDirection: 'row'
  };

  const timelineNavItemStyle = {
      borderRight: '1px solid darkgray'
  };

  const sectionStyle = {
    padding: '2% 0 2% 0'
  }
  
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
      <div className="events" style={{width: '90%'}}>
        <section className="banner-section" style={{width:"90%", height:"85vh",padding: '6% 2% 2% 2%',marginLeft:"auto",marginRight:"auto"}}>
            <Grid container style={{marginLeft:"auto",marginRight:"auto"}}>
                <Grid item xs={7}>
                    <img src={EventTimelineImage} style={{height: '400px', position:"absolute", top:"45%",left:"0%",zIndex:"-1"}}/>
                </Grid>
                <Grid item xs={5}>
                <div style={{display:"flex",flexDirection:"column"}}>           

                    <div style={{height:"50%"}}><h1 style={{fontSize: "8vh", color: "#6199F6"}}>{"Participate and Engage"}</h1></div>                   
                    <div style={{height:"50%",padding:"48px 48px 0 0"}}><span style={{color:"grey", fontSize:"24px"}}>{"We are team of experienced developers who are interested in giving back to the community"}</span></div>
                </div>
                </Grid>
            </Grid>
        </section>
        <div style={{textAlign:"center"}}>
                <span style={{fontSize: "8vh", fontWeight: "bold", color: "#6199F6"}}>{"Major Events"}</span>
            </div>
        <section className="major-events-section" style={sectionStyle}>
          {MajorEvents}
        </section>
        
        
        <div style={{width:"fit-content",marginLeft:"auto",marginRight:"auto", display:"flex",flexDirection:"row", gap:"32px",textAlign:"center"}}>
              <div><span className="underline" style={{fontSize: "24px", color: "#6199F6"}}>{"Previous"}</span></div>
              <div><span className="underline" style={{fontSize: "24px", color: "#6199F6"}}>{"Current"}</span></div>
              <div><span className="underline" style={{fontSize: "24px", color: "#6199F6"}}>{"Upcomming"}</span></div>
        </div>
        <section style={{marginTop:"48px"}}><EventGrid /></section>
        
      </div>
   

  );
};

export default Events;
