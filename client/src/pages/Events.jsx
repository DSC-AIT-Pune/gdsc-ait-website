import React from "react";
import Ofest from "./ofest";
import EventGrid from "../components/events_components/EventsGrid";
import ExpandedLayout from "../components/events_components/ExpandLayout";
import { Grid, Box } from '@mui/material'
import EventTimelineImage from '../styles/images/event_timeline.jpg'
import styles from '../styles/pages/events/events.module.css'

import MajorEvent from "../database/MajorEvent";
import MinorEvents from "../database/MinorEvents";

const Events = () => {

    const MajorEvents = MajorEvent.map((event, ind) => {
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

            {/* <div className={styles.eventTimeline} >
              <div><span className={styles.eventTimelineItems}>{"Previous"}</span></div>
              <div><span className={styles.eventTimelineItems}>{"Current"}</span></div>
              <div><span className={styles.eventTimelineItems}>{"Upcomming"}</span></div>
        </div> */}
            <section style={{ marginTop: "48px", marginBottom: "32px" }}><EventGrid events={MinorEvents} /></section>

        </div>

    );
};

export default Events;
