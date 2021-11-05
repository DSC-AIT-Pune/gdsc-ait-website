import React, { Component } from 'react';

class SocialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(props) { 
        return ( 
            <div className="card">
                <div className="card-content">
                    <div className="image">
                        <img src={this.props.logo} />
                    </div>
                    <div className="social-text">
                        {this.props.text}
                    </div>
                </div>    
            </div>
         );
    }
}
 
export default SocialCard;