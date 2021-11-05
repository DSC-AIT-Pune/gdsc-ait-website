import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <button className="btn" style={{
            border: '2px solid #4285F4',
            backgroundColor: 'white',
            color: '#4285F4',
            padding: '8px 24px 8px 24px',
            fontSize: '16px',
            cursor:' pointer',
            borderRadius: '22px'
        }}>
            {this.props.text}
        </button> );
    }
}
 
export default Button;