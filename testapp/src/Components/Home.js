import React, { Component } from 'react';
import rac from './images/raccoon.jpg';
import './../App.css';


export class Home extends Component {
	render() {
		const bodyText = "When your code finally works and you slowly lift your hands away from the keyboard and stare at the screen in confusion because that definitely should not have worked..."
		return (
			<div className = 'homeBody'>
				<div className = "homepic">
					<img src = {rac} alt="raccoon"/>
				</div>
				<p paddingLeft = '25px'>{bodyText}</p>
			</div>
		);
	}
}

export default Home;
