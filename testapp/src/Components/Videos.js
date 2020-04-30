import React, { Component } from 'react';
import vid from './videos/rfid.mp4';
import ReactPlayer from "react-player";
import './../App.css';


export class Videos extends Component {

	render() {
		return (
			<div className = 'player-wrapper'>
				<div className = "vidclass">
					<div className = "vrow">
						<ReactPlayer
							className = 'react-player'
							url = {vid}
							controls
						/>
						<p className = 'caption'>
							ECE 153 project using an RFID and Bluetooth to increase door security. I tried to put the entire video but github won't take vide's that are greater than 100MB I guess :(
						</p>
					</div>
				</div>
				<div className = "vidclass">
					<div className = "vrow">
						<ReactPlayer
							className='react-player'
							url="https://www.youtube.com/watch?v=oJIkBSaGiG0#action=share"
							/>
						<p className = 'caption'>
							a good song :)
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Videos
