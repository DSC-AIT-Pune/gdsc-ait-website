import React from 'react';
import {Grid, Box} from '@mui/material'
import CompactCard from './CompactCard';

const EventGrid = () => {

    let events = [
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
        },
        {
            name: "#30DaysOfCloud: Orientation",
            banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fevent-banner%2F30DaysOfCloud.png?alt=media&token=876d3456-5598-4787-87ba-e9259462cd8f",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ffacebook.svg?alt=media&token=a4972ea9-991d-4047-b0df-7a132d64d00e",
            url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
            desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
        },
        {
            name: "#30DaysOfCloud: Orientation",
            banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fevent-banner%2F30DaysOfCloud.png?alt=media&token=876d3456-5598-4787-87ba-e9259462cd8f",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ffacebook.svg?alt=media&token=a4972ea9-991d-4047-b0df-7a132d64d00e",
            url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
            desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
        },
        {
            name: "#30DaysOfCloud: Orientation",
            banner: "https://firebasestorage.googleapis.com/v0/b/gdsc-website-media.appspot.com/o/gdsc-website%2Fhackotoberfest%2Fbanner08-light.png?alt=media&token=b70219af-f468-4139-a707-f9dd9627f2ba",
            logo: "https://firebasestorage.googleapis.com/v0/b/theanton-resume.appspot.com/o/gdsc%2Ffacebook.svg?alt=media&token=a4972ea9-991d-4047-b0df-7a132d64d00e",
            url: "https://gdsc.community.dev/events/details/developer-student-clubs-army-institute-of-technology-pune-presents-30daysofcloud-orientation/",
            desc: "30 Days of Google Cloud program will provide you an opportunity to kickstart your career in the cloud"
        }
    ]

    var CompactCardGrid = events.map((event,ind) => {
        return(
            <Grid item xs={4} className="item" style={{
                marginLeft:'auto',
                marginRight:'auto',
                padding:'48px 16px'
            }}>
                <CompactCard item
                id={ind}
                banner={event.banner}
                name={event.name}
                logo={event.logo}
                desc={event.desc}
                url={event.url}
                />
            </Grid>
            
        )
    })

    return(
        <Box className="events-grid" >
            <Grid container spacing={2} >
                {CompactCardGrid}
            </Grid>
        </Box>
    )
}

export default EventGrid;