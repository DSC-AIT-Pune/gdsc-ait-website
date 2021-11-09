import React, { Component } from 'react';
import styles from '../../styles/components/socialCard.module.css'
class SocialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(props) { 
        return ( 
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.image}>
                        <img src={this.props.logo} />
                    </div>
                    <div className={styles.socialText}>
                        {this.props.text}
                    </div>
                </div>    
            </div>
         );
    }
}
 
export default SocialCard;