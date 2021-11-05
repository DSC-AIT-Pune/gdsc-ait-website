import React from 'react';
import SocialCard from '../components/social_components/SocialCard';
import {Grid, Box} from '@mui/material'
import '../styles/pages/contact.css'
import TeamImage from '../styles/images/team7.png'

const Contact = () => {

    let socialSites = [
        {
            site: "Facebook",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ffacebook.svg?alt=media&token=a4972ea9-991d-4047-b0df-7a132d64d00e",
            url: "https://www.facebook.com/dsc.aitpune/",
            text: "Connet to our Facebook Page"
        },
        {
            site: "Instagram",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Finstagram.svg?alt=media&token=fdc20d42-99d1-4a27-9674-61ff35703c8b",
            url: "https://instagram.com/gdsc_aitpune",
            text: "Most of activites happen here. Make Sure to Follow us"
        },
        {
            site: "Twitter",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ficons8-twitter.svg?alt=media&token=30986ec5-f193-4412-9192-e12d1221dd62",
            url: "https://twitter.com/dsc_ait",
            text: "Follow treding tweets in tech."
        },
        {
            site: "YouTube",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ficons8-youtube.svg?alt=media&token=d33e4d72-c7ac-4f23-8c42-10bd59e1fd84",
            url: "https://www.youtube.com/channel/UCjw9RT5WEKOWSob1f4oiqdQ",
            text: "Missed any event? I'm here to help!"
        },
        {
            site: "GitHub",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Fgithub.svg?alt=media&token=1553097d-33d0-4fa2-a898-ab55ecc86960",
            url: "https://github.com/orgs/DSC-AIT-Pune",
            text: "Clone and commit the legacy of our community"
        },
        {
            site: "LinkedIn",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Flinkedin.svg?alt=media&token=d6134ca9-6f46-4ee8-b9c5-568eccbc4a22",
            url: "https://www.linkedin.com/company/dsc-ait/",
            text: "Grow your network with us."
        }
    ]

    var SocialCardGrid = socialSites.map((site,ind) => {
        return(
            <Grid item xs={4} className="item">
                <SocialCard item
                id={ind}
                name={site.name}
                logo={site.logo}
                text={site.text}
                url={site.url}
                />
            </Grid>
        )
    })

    return(
        <Box className="contact-section">
            <Grid container spacing={2} >
                <Grid item xs={6} className="left-col">
                    <img src={TeamImage} style={{height: '480px'}}/>
                </Grid>
                <Grid item xs={6} className="right-col">
                    {SocialCardGrid}                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact