import React, { Component } from 'react';
import styles from '../../styles/components/compactCard.module.css'
import Button from '../../common/Button'
class CompactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className={styles.compactCard} style={{transition: "all 0.3s ease-out"}}>
            <div className={styles.bannerArea}>
                <img src={this.props.banner}/>
            </div>
            <div className={styles.contentArea}>
                <div className={styles.contentHead}>
                    <div className={styles.logo}>
                        <img src={this.props.logo}/>
                    </div>
                    <div className={styles.name}>
                        {this.props.name}
                    </div>
                </div>
                <div className={styles.contentBody}>
                    <div className={styles.desc}>
                        <span>{this.props.desc}</span>
                    </div>
                </div>
                <div className={styles.expandButton} >
                    <Button text={"Know More"} url={this.props.url}/>
                </div>
            </div>
        </div> );
    }
}
 
export default CompactCard;