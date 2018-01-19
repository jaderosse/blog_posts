import React, {Component} from 'react';

class FaveFood extends Component {
	render(){
		return(
			<div className="FaveFood">
				<h1>Fave food</h1>
				<h2>Sit tight, this'll be a minute.</h2>
				<ul>
					<li>MEXICAN</li>
					<li>THAI</li>
					<li>BEER</li>
				</ul>
				<p>Alright that was actually pretty short.</p>
			</div>
		);
	}
}

export default FaveFood;