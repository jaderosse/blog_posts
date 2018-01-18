import React, {Component} from 'react';

class Author extends Component {
	render(){
		const allAuthors = this.props.authors.map(a => {
			return <h3>{a}</h3>
		});
		return (
			<div>{allAuthors}</div>
		);
	}
}

export default Author;