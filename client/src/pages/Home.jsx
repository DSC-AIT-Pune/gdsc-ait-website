import React, { Component } from "react";
import Description from "../components/home_components/Description";
import EventsHome from "../components/home_components/EventsHome";
import introImage from "../styles/images/we_love_dev.jpg";
import GoogleDevImage from '../styles/images/google_dev.png'
import hacktoberlogo from "../styles/images/team-images/hacktoberlogo.svg";
import styles from "../styles/pages/home/home.module.css"
import { Grid } from "@mui/material";
import connect from '../styles/images/connect.png'
import learn from '../styles/images/learn.png'
import grow from '../styles/images/work.png'
import EventGrid from "../components/events_components/EventsGrid";
import VideoGrid from "../components/videos_components/VideoGrid";
import Button from '../common/Button';
import logo from "../styles/images/gdsc_logo.png";
import { style } from "@mui/system";


let featuredEvents = [
    {
        name: "#30DaysOfCloud: Orientation",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fevent-banner%2F30DaysOfCloud.png?alt=media&token=876d3456-5598-4787-87ba-e9259462cd8f",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2F30DaysOfCloud%2F30DaysOfCloud-logo.png?alt=media&token=9b241f2d-e669-410c-9087-915e76b8644e",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    },
    {
        name: "Hacktoberfest",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
        logo: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2FH-icon-dark.png?alt=media&token=777c1020-3747-44d5-8f69-acf6ce18e887",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    },
    {
        name: "DevLok",
        banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fdevlok%2Fdevlok-poster.jpg?alt=media&token=d1b5c64a-62a9-4d8f-a38f-96154d5854f7",
        logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ffacebook.svg?alt=media&token=a4972ea9-991d-4047-b0df-7a132d64d00e",
        url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
        desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
    }
  ]

  
let featuredVideos =  [
    {
      "kind": "youtube#searchResult",
      "etag": "8aA1Xb1lGvAA24mzx4LP2skVXKU",
      "id": {
        "kind": "youtube#video",
        "videoId": "QQ3Ce0A3p0c"
      },
      "snippet": {
        "publishedAt": "2021-10-01T21:58:19Z",
        "channelId": "UCjw9RT5WEKOWSob1f4oiqdQ",
        "title": "Explore Machine Learning Models with Explainable AI: Challenge Lab Working Solution",
        "description": "Tutorial video for the Explore Machine Learning Models with Explainable AI: Challenge Lab Repository Link for the Code: https://bit.ly/39XmKv1 Speaker ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QQ3Ce0A3p0c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QQ3Ce0A3p0c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QQ3Ce0A3p0c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "GDSC AIT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-10-01T21:58:19Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ns-SzFK2azAyyi5BUbvkfx0k4Hw",
      "id": {
        "kind": "youtube#video",
        "videoId": "ZpUKbbGXesA"
      },
      "snippet": {
        "publishedAt": "2021-09-25T13:42:05Z",
        "channelId": "UCjw9RT5WEKOWSob1f4oiqdQ",
        "title": "Qwiklabs Monthly Subscription Demo: 30 Days of Cloud 2021 #DeveloperStudentClubs2021 #30DaysOfCloud",
        "description": "A demo on how to get the monthly subscription of Qwiklabs for 30 Days of Google Cloud Program 2021 from the received confirmation mail. Speaker ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ZpUKbbGXesA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ZpUKbbGXesA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ZpUKbbGXesA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "GDSC AIT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-09-25T13:42:05Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "0ecuRp1W9TZwNsgxIUdPOuqcM1I",
      "id": {
        "kind": "youtube#video",
        "videoId": "BkHeDpP3cgA"
      },
      "snippet": {
        "publishedAt": "2021-09-25T12:02:58Z",
        "channelId": "UCjw9RT5WEKOWSob1f4oiqdQ",
        "title": "30 Days of Google Cloud: Orientation",
        "description": "An orientation session for members of GDSC AIT Chapter to familiarize them with 30 Days of Google Cloud program which will provide them an opportunity to ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BkHeDpP3cgA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BkHeDpP3cgA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BkHeDpP3cgA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "GDSC AIT",
        "liveBroadcastContent": "none",
        "publishTime": "2021-09-25T12:02:58Z"
      }
    },
  
  ]


class Home extends Component {
    state = {
        description: "Google Developer Student Club, AIT is a community group for students interested in creating solutions using Google technologies.",
    };

    render() {
        return (
            <div className={styles.homePage}>
                <section className={styles.welcome}>
                    <Grid lg={6} md={12} xs={12} className={styles.content}>
                        <div className={styles.gdsaitlogoHeading}>
                            <img src={logo} alt="logo" className={styles.gdsclogo}/> <h1 className={styles.TitleHeading}>GDSC AIT</h1>
                        </div>

                        <div style={{flexDirection: "row", display:"flex"}}>
                              <h2 className={styles.poweredBy}>Powered by</h2>
                              <img className={styles.googleDevImage} src={GoogleDevImage}/>
                        </div>

                        <div className={styles.bannerText}>
                          <p><span  style={{color:"grey",fontSize:"18px", fontWeight:"lighter"}}>{this.state.description}</span></p>
                        </div>
                    
                        <div className={styles.buttonArea}>
                            <Button
                                className={styles.MemberButton}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "https://gdsc.community.dev/army-institute-of-technology-pune/";
                                }}

                                text={"Join as Member"}
                            />
                                
                            <Button
                                className={styles.DiscordButton}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = "https://discord.com/invite/56sCubbrtp";
                                }}
                                text={"Join Discord"}
                            />
                        </div>
                        
                    </Grid>

                    <Grid lg={6} md={12} xs={12} className={styles.HomePageSvg}>
                        <img src={introImage} alt="introImage" className={styles.svg} />
                    </Grid>
                </section>

                <section  className={styles.conectLearnGrowSection}>
                    <div className={styles.container}>
                        <Grid lg={12} md={12} xs={12} className={styles.outerGrid}>
                            <Grid lg={4} md={12} xs={12} className={styles.cardContentArea}>
                                <h2 className={styles.cardTitle} style={{color:"#4282EB"}}>
                                    Connect
                                </h2>
                                <img src={connect} className={styles.image} role="presentation"/>
                                
                                    <div className={styles.subPoints}>
                                    <a className={styles.subPointsLink} href="/events/">Events</a>
                                    </div>
                                    <div className={styles.subPoints}>
                                    <a className={styles.subPointsLink} href="/events/">Discord</a>
                                    </div>

                            </Grid>
                            <Grid lg={4} md={4} xs={12} className={styles.cardContentArea}>
                                <h2 className={styles.cardTitle} style={{color:"#FBBC04"}}>
                                    Learn
                                </h2>
                                <img src={learn} className={styles.image} role="presentation"/>
                                
                                    <div className={styles.subPoints}>
                                    <a className={styles.subPointsLink} href="/events/">Android Study Jams</a>
                                    </div>
                                    <div className={styles.subPoints}>
                                    <a className={styles.subPointsLink} href="/events/">Cloud Study Jams</a>
                                    </div>

                            </Grid>
                            <Grid lg={4} md={4} xs={12} className={styles.cardContentArea}>
                                <h2 className={styles.cardTitle} style={{color:"#43B864"}}>
                                    Grow
                                </h2>
                                <img src={grow} className={styles.image} role="presentation"/>
                                
                                    <div className={styles.subPoints}>
                                    <a className={styles.subPointsLink} href="/events/">Google Solution Challenge</a>
                                    </div>
                                    <div className={styles.subPoints}>
                                    <a className={styles.subPointsLink} href="/events/">Google Generation Scholarship</a>
                                    </div>

                            </Grid>
                            
                        </Grid>
                    </div>
                </section>

                <section className={styles.featuredEventsSection}>
                    <div className={styles.featuredEventsHeading}>
                        <h1>Featured Events</h1>
                    </div>
                        <EventGrid events={featuredEvents}/>
                    <div className={styles.featuredEventEnding}>
                        <Button text={"View All"} url={"/events"}/>
                    </div>
                </section>


                <section className={styles.featuredVideosSection}>
                    <div className={styles.featuredVideosHeading}>
                        <h1>Featured Videos</h1>
                    </div>
                        <VideoGrid videoArray={featuredVideos}/>
                    <div className={styles.featuredVideosEnding}>
                        <Button text={"View All"} url={"/videos"}/>
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;
