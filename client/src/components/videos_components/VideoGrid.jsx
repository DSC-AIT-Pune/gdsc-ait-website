import React from 'react';
import {Grid, Box} from '@mui/material'
import VideoCard from './VideoCard';
import styles from '../../styles/components/videoGrid.module.css'

const VideosGrid = () => {

    let videos =  [
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

    var VideoCardGrid = videos.map((video,ind) => {
        return(
            <Grid item xs={4} className={styles.item} style={{
                marginLeft:'auto',
                marginRight:'auto',
                padding:'48px 16px'
            }}>
                <VideoCard item
                id={ind}
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