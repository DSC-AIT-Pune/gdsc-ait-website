import React, { Component } from 'react';
import styles from '../../styles/components/videoCard.module.css';

const VideoCard = (props) => {
        let videoURL = "https://www.youtube.com/embed/"+ props.videoId;

        return ( 
        <div className={styles.videoCard}>
            <iframe width="320" height="180" src= {videoURL}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            <div className={styles.contentArea}>
                <span>{props.title}</span>
            </div>
        </div> );
 
}
 
export default VideoCard;