import React, { Component } from 'react';
import './../App.css';

export class Tab extends Component {
	addStyling = () =>{
		if(this.props.tab.id == this.props.activeTab){
			return{
				backgroundColor: 'rgb(21, 32,43)', 
				borderBottom:'solid rgb(0, 172, 238)',
				color: 'rgb(0,172,238)',
			}
		}
		else{
			return{
				backgroundColor: 'rgb(21,32,43)',
				borderBottom: 'solid rgb(136, 153, 166)',
				color: 'rgb(136, 153, 166)'
			}
		}
	}
	render() {
		return (
			<div className = 'tab'
			style = {this.addStyling()}
			onClick={this.props.changeTab.bind(this, this.props.tab.id)}>
				<h2>{this.props.tab.title}</h2>
			</div>
		);
	}
}
export default Tab;

