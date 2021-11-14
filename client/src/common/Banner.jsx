import React, {useState} from 'react';
import styles from '../styles/components/banner.module.css';
import { Grid } from "@mui/material";

const Banner = (props) => {


    return (
        <section className={styles.bannerSection}>
            <Grid container className={styles.bannerGrid}>
                <Grid item lg={6} md={12} xs={12} className={styles.bannerImageGrid}>
                    <img  src={props.image} />
                </Grid>
                <Grid item lg={6} md={12} xs={12} className={styles.bannerContentGrid}>
                    <div className={styles.bannerHeading} >
                        <h1 style={{color:props.color}}>{props.heading}</h1>
                    </div>                   
                    <div className={styles.bannerSubText} >
                        <span>{props.subtext}</span>
                    </div>
                 </Grid>
            </Grid>
        </section>
    );
};

export default Banner;
