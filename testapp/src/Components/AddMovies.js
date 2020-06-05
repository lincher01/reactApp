import React, { Component } from 'react';
import firebase from 'firebase';
import './../App.css';
import axios from 'axios';
const URL = "https://www.omdbapi.com/?apikey=858c4cb1&i=";
const validform = (error, imdbID) => {
	let valid = true;
  	Object.values(error).forEach(
    	(val) => val.length > 0 && (valid = false)
  	);
  	if(imdbID.length === 0){
    	valid = false
  	}
  	return valid;
};

const items=firebase.database().ref('mList');

export class AddMovies extends Component {
	constructor(){
		super();
		this.state = {
			mList: [],
			imdbID: "",
			error: {imdbID:""}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		e.preventDefault();
		var repeat = false;
		const{name,value} = e.target;
		const newMovie = document.getElementById("check").value;
		items.on('value',(data) =>{
			var ID = data.val();
			let keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				if(newMovie === ID[k].imdbID){
					repeat = true;
				};
			};
		});
		let error = this.state.error;
		switch(name){
			case 'imdbID':
	        	error.imdbID = value.length > 9 || value.length<9 || repeat === true
	        	? 'wrong amount of characters or already exists'
	        	: '';
	        	break;
	        default:
	        	break;
	    }
	    this.setState({error, [name]:value});
	}

	handleSubmit(e){
		e.preventDefault();
		if(validform(this.state.error, this.state.imdbID)){
			alert('Submitted!');
		}
		else{
			alert('Oops something went wrong');
			return;
		}
		let val = this.state.imdbID;
		axios.get(URL+val).then(res=>{
			var movieData = res.data
			firebase.database().ref('mList/'+movieData.imdbID).set(movieData)
			firebase.database().ref('ListNames/All/MovieArray/'+movieData.imdbID).set(movieData)
		});

		this.setState({
			imdbID:"",
		});
	}

	componentDidMount(){
		items.on('value', (snapshot) => {
			let ID = snapshot.val();
			let newState = [];
			for(let item in ID){
				//adding imdbID to newstate array
				var info = ID[item].imdbID;
				newState.push({
					imdbID: info,
				});
			}
			this.setState({
				mList:newState
			});
		});
	}
	render() {
		return (
			<div className = 'container'>
				<section className = 'add-movie'>
					<h1>Enter movie ID</h1>
					<form onSubmit = {this.handleSubmit}>
						<input
							required
							type = "text"
							name = "imdbID"
							onChange = {this.handleChange}
							value = {this.state.imdbID}
							id = "check"/>
						<button>Enter</button>
					</form>
				</section>
			</div>
		);
	}
}
export default AddMovies;