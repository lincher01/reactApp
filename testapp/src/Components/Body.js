import React, { Component } from 'react';
import Home from './Home';
import Images from './Images';
import Videos from './Videos';
import Links from './Links';
import Guests from './Guests';
import Movies from './Movies';
import AddMovies from './AddMovies';
import CreateLists from './CreateLists';

export class Body extends Component {
	displayContent = () => {
		var activeTab = this.props.activeTab
		if(activeTab === 1)
			return<Home/>
		else if(activeTab === 2)
			return<Images/>
		else if(activeTab === 3)
			return<Videos/>
		else if(activeTab === 4)
			return<Links/>
		else if(activeTab === 5)
			return<Guests/>
		else if(activeTab === 6)
			return<Movies/>
		else if(activeTab === 7)
			return<AddMovies/>
		else
			return<CreateLists/>

	}
	render() {
		return (this.displayContent());
	}
}
export default Body;