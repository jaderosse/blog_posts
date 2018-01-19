import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Author from './Authors';
import Comment from './Comment';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './Homepage';
import FaveMovie from './FaveMovie';
import FaveFood from './FaveFood';
import About from './About';

class Post extends Component {
  render() {
    const allPosts = this.props.posts.map(p => {
      console.log(this.props.posts[0].title);
      console.log(p.title);
       return( <div className="Post">
          <h1>{p.title}</h1>
          <h3>Written by: <Author authors={p.authors}/></h3>
          <h4>{p.body}</h4>
          <h3>Comments:</h3>
          <p><Comment comments={p.comments} /></p>
      </div>)
    });
    console.log(allPosts[0].props.children[0].props.children);
    return (
      <Router>
        <div className="Post">
        <Link to="/">Home</Link>
        <Link to="/movie">Movies</Link>
        <Link to="/food">Food</Link>
        <Link to="/post">Post</Link>
        <Route exact path="/" component={Homepage} />
        <Route path="/movie" component={FaveMovie} />
        <Route path="/food" component={FaveFood} />
        <Route path="/post" component={allPosts}/>
         </div> 
      </Router>
    );
  }
}

export default Post;
