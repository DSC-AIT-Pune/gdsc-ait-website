import React, { Component } from 'react';
import {Grid} from '@mui/material';
import Button from '../../common/Button';
import { fontWeight, textAlign } from '@mui/system';

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
                <img src={this.props.img} className="img-card" style={{
                      height: '320px',
                      width: '560px',
                      background: 'white',
                      boxShadow: '0 14px 26px rgba(0,0,0,0.04)',
                      borderRadius: '10px',
                      borderStyle: "none"
                }}></img> 
            </Grid>
            <Grid item xs={6} style={{textAlign: this.align}}>
                <div className="content-area" style={{padding:"2%",display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                    <div className="content-head" style={{padding:"2%"}}>
                        <span style={{fontSize:"26px", fontWeight: "bold"}} >{this.props.heading}</span>
                    </div>
                    <div className="content-text" style={{padding:"2%"}}>
                        <span style={{fontSize:"18px", color: "grey"}}>{this.props.text}</span>
                    </div>
                    <div className="content-bottonm" style={{padding:"2%"}}>
                        <Button text={"Know More"} ></Button>
                    </div>
                </div>
            </Grid>
        </Grid> );
    }
}
 
export default ExpandedLayout;