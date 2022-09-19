import React from 'react';
import SocialCard from '../components/social_components/SocialCard';
import { Grid, Box } from '@mui/material'
import TeamImage from '../styles/images/team7.png'
import styles from '../styles/pages/contact/contact.module.css'
import Contactdata from '../database/Contactdata';

const Contact = () => {

    var SocialCardGrid = Contactdata.map((site, ind) => {
        return (
            <Grid item lg={4} md={4} xs={6} className={styles.item}>
                <SocialCard item
                    id={ind}
                    {...site}
                />
            </Grid>
        )
    })


    return (
        <Box className={styles.contactSection}>
            <Grid container className={styles.contactGrid} spacing={2} >
                <Grid item lg={6} md={12} xs={12} className={styles.leftCol}>
                    <img src={TeamImage} className={styles.bannerImage} style={{ height: '480px' }} />
                </Grid>
                <Grid item lg={6} md={12} xs={12} className={styles.rightCol}>
                    {SocialCardGrid}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact
