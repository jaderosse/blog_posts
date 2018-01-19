import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './Homepage';
import FaveMovie from './FaveMovie';
import FaveFood from './FaveFood';
import About from './About';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Link to="/">Home</Link>{' '}
        <Link to="/movie">Movies</Link>{' '}
        <Link to="/food">Food</Link>{' '}
        <Link to="/post">Blog</Link>{' '}
        <Route exact path="/" component={Homepage} />
        <Route path="/movie" component={FaveMovie} />
        <Route path="/food" component={FaveFood} />
        <Route path="/post" component={
          () => (<Post posts={this.props.posts} />
            )} />
         </div> 
      </Router>
    );
  }
}

export default App;