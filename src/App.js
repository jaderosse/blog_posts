import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Author from './Authors';

class Post extends Component {
  render() {
    var authors = <Author authors={this.props.allAuthors}/>;
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        <h3>{authors}</h3>
        <h4>{this.props.body}</h4>
        <h3>Comments:</h3>
        <p>{this.props.comments[1]}</p>
      </div>
    );
  }
}

export default Post;
