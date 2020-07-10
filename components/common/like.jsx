import React, { Component } from 'react';

class Like extends Component {
    render() { 
        let likeClass = "fa fa-heart-o";
        if (this.props.liked) {
            likeClass = "fa fa-heart";
        }
        return(
            <i 
                className={likeClass} 
                aria-hidden="true" 
                onClick={this.props.onClick}
                style={{ cursor: "pointer" }}
            />
        );
    }
}
 
export default Like;