import React, { Component } from 'react';
import './../App.css';
import p from './images/p.png';
import visual from './images/visual.JPG';
import day3 from './images/day3.jpg';

export class Links extends Component {
	render() {
		return (
			<div>
				<div className = 'linkim'>
					<a href="https://www.youtube.com/watch?v=MIhNXrOuX5A&feature=emb_title">
						<img src = {day3} alt='day3'/>
					</a>
					<p className = 'caption'>
						It's only my 1st voluntary cs class out here ¯\_(ツ)_/¯
					</p>
				</div>
				<div className = 'linkim'>
					<a href="https://lincher01.github.io/website/">
						<img src = {p} alt='p'/>
					</a>
					<p className = 'caption'>
						me everytime bash won't let me push to github because I forgot to pull the updates my friends have made to our project.
					</p>
				</div>
				<div className = 'linkim'>
					<a href="https://sites.google.com/view/front-door-securtiy/">
						<img src = {visual} alt='visual'/>
					</a>
					<p className = 'caption'>
						Website of the ECE 153 project I did with my roommate.
					</p>
				</div>
			</div>
		);
	}
}

export default Links;
