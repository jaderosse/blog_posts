import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Post 
	title= {"Let's talk about pecks baby"}
  	body= {"Let's work those chest musclessss"}
  	comments= {[
    "You're the Hemmingway of posts",
    "What is this?",
    "I meant to reach Bing"
    ]}
	allAuthors= {[
    "Bade Bosse",
    "Mother Goose"
    ]}
    />, document.getElementById('root'));
registerServiceWorker();
