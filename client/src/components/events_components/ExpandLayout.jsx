import React, { Component } from 'react';
import {Grid} from '@mui/material';
import Button from '../../common/Button';
import { fontWeight, textAlign } from '@mui/system';
import styles from '../../styles/components/expandLayout.module.css'

class ExpandedLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { orientation: "row" };
        if(this.props.id%2 == 0){
            this.orientation = "row";
            this.align = "left";
        } 
        else {
            this.orientation = "row-reverse";
            this.align = "right";
        } 
    }

    render() { 
        return ( 
        <Grid container spacing={2} style={{
            padding:"2%",
            flexDirection: this.orientation,
            display:"flex",
        }}>
            <Grid item xs={6} style={{textAlign: this.align}}>
                <img src={this.props.img} className={styles.imgCard}></img> 
            </Grid>
            <Grid item xs={6} style={{textAlign: this.align}}>
                <div className={styles.contentArea}>
                    <div className={styles.contentHead}>
                        <span>{this.props.heading}</span>
                    </div>
                    <div className={styles.contentText}>
                        <span>{this.props.text}</span>
                    </div>
                    <div className={styles.contentBottom}>
                        <Button text={"Know More"} ></Button>
                    </div>
                </div>
            </Grid>
        </Grid> );
    }
}
 
export default ExpandedLayout;