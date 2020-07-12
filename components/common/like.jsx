import React, { Component } from 'react';

class Like extends Component {
    render() { 
        let likeClass = "fa fa-heart-o";
        if (this.props.liked) {
            likeClass = "fa fa-heart";
        }
        // setup pointer cursor
        likeClass += ' clickable';
        return(
            <i 
                className={likeClass}
                aria-hidden="true" 
                onClick={this.props.onClick}
            />
        );
    }
}
 
export default Like;