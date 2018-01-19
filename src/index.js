import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var posts = [{
	title: "Let's talk about pecks baby",
	authors: ["Bade Bosse", "Jones"],
  	body: "Let's work those chest musclessss",
  	comments: ["You're the Hemingway of posts", "What is this?", "I meant to reach Bing"]
}, {
	title: "What's your favorite rock?",
	authors: ["MotherGoose", "John McClane"],
  	body: "Johnson, Dwayne",
  	comments: ["Please stop", "What is this?", "I meant to reach Bing"]
}];

ReactDOM.render(<App posts={posts}/>, document.getElementById('root'));
registerServiceWorker();
