import React, { Component } from 'react';
import './../App.css';
import pic, { images } from 'react';
import cat from './images/cat.jpg';
import elmo from './images/elmo.PNG';
import lunch from './images/lunch.jpg';
import sands from './images/sands.jpg';
import hometown from './images/hometown.JPG';
import IMG_1557 from './images/IMG_1557.JPEG';
import SBupset from './images/SBupset.jpg';
import secrets from './images/secrets.JPG';
import Carousel, { Modal, ModalGateway } from 'react-images';
const  ims = [{src: './images/cat.jpg', src: './images/elmo.PNG'}];

export class Images extends Component {
	state = {
			modalIsOpen: 'false',
			isModal: 'boolean',
			isFullscreen: 'boolean',
			interactionIsIdle: 'boolean',
		}
	toggleModal = () => {
		this.setState(state => ({modalIsOpen: !state.modalIsOpen}))
	}
	render() {
		const{ modalIsOpen } = this.state;
		return (
			<div>
				<div className = "row">
					<div className = "column">
						<Modal onClose={this.toggleModal}>
							<Carousel views={ims}/>
							<img src = {cat} alt="cat"/>
							<img src = {elmo} alt="elmo"/>
						</Modal>
					</div>
					<div className = "column">
						<img src = {lunch} alt="lunch"/>
						<img src = {sands} alt="sands"/>
					</div>
					<div className = "column">
						<img src = {hometown} alt="hometown"/>
						<img src = {IMG_1557} alt="IMG_1557"/>
					</div>
					<div className = "column">
						<img src = {SBupset} alt="SBupset"/>
						<img src = {secrets} alt="secrets"/>
					</div>
				</div>
				<ModalGateway>
					{modalIsOpen ?(
						<Modal onClose={this.toggleModal}>
							<Carousel views = {ims}/>
						</Modal>
					) : null}
				</ModalGateway>
			</div>
		);
	}
}

export default Images
