import React, { Component } from 'react';
import './../App.css';
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from 'react-photo-gallery';
import photos from './../App.js';

export class Images extends Component {

	constructor() {
    	super();
    	this.state = { width: -1 };
    }
	render() {
	const photos = [
    {
      src: require('./images/cat.jpg'),
      width: '1',
      height:'1'
    },
    {
      src: require('./images/elmo.PNG'),
      width: '16',
      height:'9'
    },
    {
      src: require('./images/lunch.jpg'),
      width: '4',
      height:'3'
    },
    {
      src: require('./images/sands.jpg'),
      width: '4',
      height:'3'
    },
    {
      src:require('./images/hometown.JPG'),
      width: '3',
      height:'4'
    },
    {
      src: require('./images/IMG_1557.JPEG'),
      width: '3',
      height:'4'
    },
    {
      src: require('./images/SBupset.jpg'),
      width: '1',
      height:'1'
    },
    {
      src: require('./images/secrets.JPG'),
      width: '1',
      height:'1'
    },
  ];

			return(
				<SRLWrapper>
					<Gallery photos = {photos}/>
				</SRLWrapper>
			);
	}
}

export default Images
