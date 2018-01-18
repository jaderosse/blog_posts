import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var posts = [{
	title: "Let's talk about pecks baby",
	authors: ["Bade Bosse", "Jones"],
  	body: "Let's work those chest musclessss",
  	comments: ["You're the Hemmingway of posts", "What is this?", "I meant to reach Bing"]
}, {
	title: "Let's talk about rocks baby",
	authors: ["MotherGoose", "John McClane"],
  	body: "Let's work those chest musclessss",
  	comments: ["You're the Hemmingway of posts", "What is this?", "I meant to reach Bing"]
}];

ReactDOM.render(<Post posts={posts} />, document.getElementById('root'));
registerServiceWorker();
