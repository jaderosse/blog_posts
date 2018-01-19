import React from 'react';

const Widget = (props) => {
	if(Object.keys (props.weather).length > 0){ return (
	<div>
	    <h1>{props.weather.name}</h1>
      <h1>{Math.round(props.weather.main.temp* 9/5 - 459.67)} °F</h1>
    </div>
    )
    } else {
    	return (
    		<div>
    			<h1>Please enter zip code.</h1>
    		</div>
    	)
    }
}

export default Widget;