import React, { Component } from 'react';
import firebase from 'firebase';
import './../App.css';


const items=firebase.database().ref('ListNames');

const validform = (error,Lname) => {
	let valid = true;
  	Object.values(error).forEach(
    	(val) => val.length > 0 && (valid = false)
  	);
  	if(Lname === true){
  		valid = false
  	}
  	return valid;
};

export class CreateLists extends Component {
	constructor(){
		super();
		this.state = {
			ListNames: [],
			Lname: "",
			error: {Lname:''}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		e.preventDefault();
		var repeat = false;
		const{name,value} = e.target;
		const newName = document.getElementById("check").value;
		items.on('value',(data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				if(newName === ID[k].Lname){
					repeat = true;
				};
			};
		});
		let error = this.state.error;
		switch(name){
			case 'Lname':
				error.Lname = repeat === true
				? 'List name already used'
				:'';
				break;
			default:
				break;
		}
		this.setState({[name]:value});
	}
	handleSubmit(e){
		e.preventDefault();
		if(validform(this.state.error)){
			alert('Submitted!')
		}
		else{
			alert('List name already used');
			return
		}
		// const item ={
		// 	Lname: this.state.Lname,
		// };
		let val = this.state.Lname;
		var ListID = 0;
		items.on('value',(data)=>{
			var ID = data.val();
			var keys = Object.keys(ID);
			ListID = keys.length++;
		})
		firebase.database().ref("ListNames/"+val).set({id: ListID});
		this.setState({
			Lname: ""
		});
	}
	componentDidMount(){
		items.on('value', (snapshot) =>{
			let name = snapshot.val();
			let newState = [];
			for(let item in name){
				newState.push({
					Lname: name[item].Lname,
				});
			}
			this.setState({
				ListName:newState
			});
		});

	}

	render() {
		return (
			<div className = 'container'>
				<section className = 'add-movie'>
					<h1>Enter New List Name</h1>
					<form onSubmit = {this.handleSubmit}>
						<input
							required
							type = "text"
							name = "Lname"
							onChange = {this.handleChange}
							value = {this.state.Lname}
							id = "check"/>
						<button>Enter</button>
					</form>
				</section>
			</div>
		);
	}
}

export default CreateLists;