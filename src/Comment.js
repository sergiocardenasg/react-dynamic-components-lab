import React, { Component } from "react";

//your code here
export default class Comment extends React.Component {
    render() {
        return (
            <div className="comment"> {this.props.commentText} </div>
        )
    };
}