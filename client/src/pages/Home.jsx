import React, { Component } from "react";
import introImage from "../styles/images/we_love_dev.jpg";
import GoogleDevImage from '../styles/images/google_dev.png'
import styles from "../styles/pages/home/home.module.css"
import { Grid } from "@mui/material";
import connect from '../styles/images/connect.png'
import learn from '../styles/images/learn.png'
import grow from '../styles/images/work.png'
import EventGrid from "../components/events_components/EventsGrid";
import VideoGrid from "../components/videos_components/VideoGrid";
import Button from '../common/Button';
import logo from "../styles/images/gdsc_logo.png";

import FeaturedVideo from "../database/FeaturedVideo";
import FeaturedEvent from "../database/FeaturedEvent";

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
              <img src={logo} alt="logo" className={styles.gdsclogo} /> <h1 className={styles.TitleHeading}>GDSC AIT</h1>
            </div>

            <div style={{ flexDirection: "row", display: "flex" }}>
              <h2 className={styles.poweredBy}>Powered by</h2>
              <img className={styles.googleDevImage} src={GoogleDevImage} />
            </div>

            <div className={styles.bannerText}>
              <p><span style={{ color: "grey", fontSize: "18px", fontWeight: "lighter" }}>{this.state.description}</span></p>
            </div>

            <div className={styles.buttonArea}>
              <Button
                className={styles.MemberButton}
                url={"https://gdsc.community.dev/army-institute-of-technology-pune/"}

                text={"Join as Member"}
              />

              <Button
                className={styles.DiscordButton}
                url={"https://discord.com/invite/56sCubbrtp"}
                text={"Join Discord"}
              />
            </div>

          </Grid>

          <Grid lg={6} md={12} xs={12} className={styles.HomePageSvg}>
            <img src={introImage} alt="introImage" className={styles.svg} />
          </Grid>
        </section>

        <section className={styles.conectLearnGrowSection}>
          <div className={styles.container}>
            <Grid lg={12} md={12} xs={12} className={styles.outerGrid}>
              <Grid lg={4} md={12} xs={12} className={styles.cardContentArea}>
                <h2 className={styles.cardTitle} style={{ color: "#4282EB" }}>
                  Connect
                </h2>
                <img src={connect} className={styles.image} role="presentation" />

                <div className={styles.subPoints}>
                  <a className={styles.subPointsLink} href="/events/">Events</a>
                </div>
                <div className={styles.subPoints}>
                  <a className={styles.subPointsLink} href="/events/">Discord</a>
                </div>

              </Grid>
              <Grid lg={4} md={4} xs={12} className={styles.cardContentArea}>
                <h2 className={styles.cardTitle} style={{ color: "#FBBC04" }}>
                  Learn
                </h2>
                <img src={learn} className={styles.image} role="presentation" />

                <div className={styles.subPoints}>
                  <a className={styles.subPointsLink} href="/events/">Android Study Jams</a>
                </div>
                <div className={styles.subPoints}>
                  <a className={styles.subPointsLink} href="/events/">Cloud Study Jams</a>
                </div>

              </Grid>
              <Grid lg={4} md={4} xs={12} className={styles.cardContentArea}>
                <h2 className={styles.cardTitle} style={{ color: "#43B864" }}>
                  Grow
                </h2>
                <img src={grow} className={styles.image} role="presentation" />

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
          <EventGrid events={FeaturedEvent} />
          <div className={styles.featuredEventEnding}>
            <Button text={"View All"} url={"/events"} />
          </div>
        </section>


        <section className={styles.featuredVideosSection}>
          <div className={styles.featuredVideosHeading}>
            <h1>Featured Videos</h1>
          </div>
          <VideoGrid videoArray={FeaturedVideo} />
          <div className={styles.featuredVideosEnding}>
            <Button text={"View All"} url={"/videos"} />
          </div>
        </section>

      </div>
    );
  }
}

export default Home;
