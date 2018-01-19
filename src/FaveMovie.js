import React, {Component} from 'react';

class FaveMovie extends Component {
	render(){
		return(
			<div className="FaveMovie">
				<h1>Fave Movie</h1>
				<h2>Here we go:</h2>
					<ul>
						<li>Interstellar</li>
						<li>The Goonies</li>
						<li>The Perks of Being a Wallflower</li>
						<li>All the HPs</li>
						<li>Dunkirk</li>
					</ul>
			</div>
		);
	}
}

export default FaveMovie;