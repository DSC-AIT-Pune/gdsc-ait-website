import React, { Component } from 'react';
import '../styles/components/compactCard.css';

class CompactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="compact-card">
            <div className="banner-area">
                <img src={this.props.banner}/>
            </div>
            <div className="content-area">
                <div className="content-head">
                    <div className="logo">
                        <img src={this.props.logo}/>
                    </div>
                    <div className="name">
                        {this.props.name}
                    </div>
                </div>
                <div className="content-body">
                    <div className="desc">
                        <span>{this.props.desc}</span>
                    </div>
                </div>
                <div className="expand-button">
                </div>
            </div>
        </div> );
    }
}
 
export default CompactCard;