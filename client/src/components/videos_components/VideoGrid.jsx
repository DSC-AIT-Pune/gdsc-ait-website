import React from 'react';
import {Grid, Box} from '@mui/material'
import VideoCard from './VideoCard';
import styles from '../../styles/components/videoGrid.module.css'

const VideosGrid = (data) => {

    let videos = data.videoArray;
    console.log(videos);
    let VideoCardGrid = videos.map((video,ind) => {
        return(
            <Grid item xs={4} className={styles.item} style={{
                marginLeft:'auto',
                marginRight:'auto',
                padding:'48px 16px'
            }}>
                <VideoCard item
                id={ind}
                videoId={video.id.videoId}
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.medium.url}
                />
            </Grid>
            
        )
    })

    return(
        <Box className="events-grid" style={{marginLeft:"auto",marginRight:"auto"}}>
            <Grid container spacing={2} >
                {VideoCardGrid}
            </Grid>
        </Box>
    )
}

export default VideosGrid;