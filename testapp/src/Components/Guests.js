import './../App.css';
import React, { Component } from 'react';
import firebase from 'firebase';
import config from './../config.js';
import date from 'date-and-time';
import { motion } from 'framer-motion';
firebase.initializeApp(config);
const format = date.compile('MMM D YYYY hh:mm A');
const validEmailRegex = 
  // eslint-disable-next-line no-useless-escape
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (error, name, message) => {
  let valid = true;
  Object.values(error).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  if(name.length === 0 || message === 0){
    valid = false
  }
  return valid;
};

export class Guests extends Component {
	constructor(){
	super();
    this.state = {
      name: '',
      info: "",
      message: "",
      email: "",
      date: '',
      perm: 'false',
      items: [],
      error: {name:'', info:'', message:'',email:''}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(e){
    e.preventDefault();
    const {name,value} = e.target;
    let error = this.state.error;
    switch(name){
      case 'name':
        error.name = value.length < 5 || value.length > 20 ? 'name needs to be between 5-20 characters': '';
        break;
      case 'info':
        error.info = value.length>100 
          ? 'Intro too long'
          : '';
        break;
      case 'message':
        error.message =  value.length < 15 || value.length > 500 
          ? 'Message needs to be 15-500 characters'
          : '';
        break;
      case 'email':
        error.email = validEmailRegex.test(value) 
          ? 'enter Valid email please'
          : '';
        break;
      default:
        break;
    }
    this.setState({error, [name]: value});
  }
  handleSubmit(e){
    e.preventDefault();
    if(validateForm(this.state.error, this.state.name, this.state.message)){
      alert('Submitted!');
    }
    else{
      alert('Oops something went wrong');
      return;
    }
    const itemsRef = firebase.database().ref('items');
    let now = date.format(new Date(), format).toString();
    const item = {
      name: this.state.name,
      info: this.state.info,
      message: this.state.message,
      email: this.state.email,  
      perm: this.state.perm,
      date: now,   
    }
    itemsRef.push(item);
    this.setState({
      name: '',
      info: "",
      message: "",
      perm: 'false',
      email: "",
      date: '',
    });
  }
  componentDidMount(){
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for(let item in items) {
        newState.push({
          name: items[item].name,
          info: items[item].info,
          message: items[item].message,
          email: items[item].email,
          perm: items[item].perm,
          date: items[item].date,
        });
      }
      this.setState({
        items:newState
      });
    });
  }
	render() {
		return (
      <div>
  			<div className = 'container'>
          <section className = 'add-item'>
            <h1>What's Happening!?</h1>
            <motion.form onSubmit = {this.handleSubmit} animate={{y:10}} transition={{ease:"easeOut", duration:3}}>
              <label>Name</label>
                <input 
                  required
                  type="text" 
                  name = "name" 
                  onChange = {this.handleChange} 
                  value = {this.state.name}/>
              <label>Intro*</label>
                <input 
                  type="text" 
                  name = "info" 
                  onChange = {this.handleChange} 
                  value = {this.state.info}/>
              <label>Message</label>
                <input 
                  required
                  type="text" 
                  name = "message"
                  onChange = {this.handleChange} 
                  value = {this.state.message}/>
              <label>Make Public</label>
                <select
                  required
                  type="text" 
                  name = "perm"
                  onChange = {this.handleChange}
                  value = {this.state.perm}>
                    <option value = 'true'>Yes</option>
                    <option value = 'false'>No</option>
                </select>
              <label>Email*</label>
                <input 
                  type="text" 
                  name = "email" 
                  onChange = {this.handleChange} 
                  value = {this.state.email}/>
  				    <button>Submit</button>
            </motion.form>
          </section>
          <section className= 'display-item'>
            <ul>
              {this.state.items.map((item) =>{
                if(item.perm === 'true'){
                  return(
                    <motion.li key = {item.id} animate={{x:40}} translate={{duration:3}}>
                      <div className = "date">
                          {item.date}
                      </div>
                      <div className= "namebio">
                        <h1>
                          {item.name}
                        </h1>
                        <p>
                          {item.info}
                        </p>
                      </div>
                      <p>
                        {item.message}
                      </p>
                      <p>
                        {item.email}
                      </p>
                    </motion.li>
                  )
                }
              })}  
            </ul>
          </section>
  			</div>
      </div>
		);
	};
}

export default Guests;
