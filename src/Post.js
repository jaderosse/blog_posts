import React, { Component } from 'react';
import Author from './Authors';
import Comment from './Comment';

class Post extends Component {
  render() {
    const allPosts = this.props.posts.map(p => {
       return( <div className="Post">
          <h1>{p.title}</h1>
          <h3>Written by: <Author authors={p.authors}/></h3>
          <h4>{p.body}</h4>
          <h3>Comments:</h3>
          <p><Comment comments={p.comments} /></p>
      </div>)
    });
    return(
    	<div className="Post">
    		{allPosts}
    	</div>
    )
	}
}
export default Post;