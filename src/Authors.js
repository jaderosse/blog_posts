import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Author extends Component {
  render() {
    return (
      <div className="Author">
   		<h3> {this.props.authors.map( authors =>  <p> Written by:{authors}</p>)}</h3>
      </div>
    );
  }
}

export default Author;