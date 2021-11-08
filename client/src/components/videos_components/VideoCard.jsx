import React, { Component } from 'react';
import styles from '../../styles/components/videoCard.module.css';

class VideoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className={styles.videoCard}>
            <iframe width="360" height="180" src="https://www.youtube.com/embed/QQ3Ce0A3p0c" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            <div className={styles.contentArea}>
                <span>{this.props.title}</span>
            </div>
        </div> );
    }
}
 
export default VideoCard;