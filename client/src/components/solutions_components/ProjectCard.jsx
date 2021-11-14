import React, { Component } from 'react';
import styles from '../../styles/components/projectCard.module.css';
import Button from '../../common/Button';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( <div className={styles.compactCard}>
            <div className={styles.bannerArea}>
                <img src={this.props.banner}/>
            </div>
            <div className={styles.contentArea}>
                <div className={styles.contentHead}>
                    <div className={styles.name}>
                        {this.props.name}
                    </div>
                </div>
                <div className={styles.contentBody}>
                    <div className={styles.desc}>
                        <span>{this.props.desc}</span>
                    </div>
                </div>
                <div className={styles.expandButton}>
                    <Button text={"Know More"}/>
                </div>
            </div>
        </div> );
    }
}
 
export default ProjectCard;