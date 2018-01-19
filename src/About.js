import React, {Component} from 'react';
import Widget from './Widget';

class About extends Component {
	 constructor(props){
    super(props);
    this.state = {
      code: '',
      weatherObj: {}
    }
    this.zipEnter = this.zipEnter.bind(this);
    this.zipSubmit = this.zipSubmit.bind(this);
  }
    zipEnter(e){
    e.preventDefault();
    this.setState({code: e.target.value}, () =>{
        console.log(this.state.code);
      });
  }
  
  zipSubmit(e){
    e.preventDefault();
    var base = this;
    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.code + ',us&appid=052f26926ae9784c2d677ca7bc5dec98';
    console.log(weatherApi);
    fetch(weatherApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        console.log(json.main.temp);
        console.log(json.name);
        base.setState({weatherObj: json})
      }).catch((err) => {
        console.log('error!', err);
      });

  }

	render(){
		return(
			<div className="About">
				<h1>About Me</h1>
				<p><em>Please see previous pages and/or slide in my DMs</em></p>
				<header className="Post-header">
        <h1>WEATHER:</h1>
        </header>
        <h1>Step 1: Zip Code. Step 2: Profit.</h1>
        <form>
          <input type="text" value={this.state.value} onChange={this.zipEnter} name="zip" />
          <button onClick={this.zipSubmit}>Submit</button>
        </form>
        <Widget weather={this.state.weatherObj}/>
			</div>
		);
	}
}

export default About;