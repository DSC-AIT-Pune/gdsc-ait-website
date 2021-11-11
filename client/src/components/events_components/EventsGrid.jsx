import React from 'react';
import {Grid, Box} from '@mui/material'
import CompactCard from './CompactCard';
import styles from '../../styles/components/eventsGrid.module.css'

const EventGrid = (props) => {

    let events = props.events;

    let CompactCardGrid = events.map((event,ind) => {
        return(
            <Grid item xs={4} className={styles.item} style={{
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