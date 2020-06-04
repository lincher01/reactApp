import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import ReactModal from 'react-modal';
import firebase from 'firebase';

const URL = "https://www.omdbapi.com/?apikey=858c4cb1&i=";
const ref = firebase.database().ref('mList');
const ref2 = firebase.database().ref('ListNames')
const defaultOption = "All";

export class Movies extends Component {

	constructor(props){
		super(props);
		this.state={
			init: 8,
			mList: [],
			options: [],
			listOption: "All",
			movInfo:[],
			showModal: false,
			showThisMovie:"",
		}
		this.loadMore = this.loadMore.bind(this);
		// this.changeList = this.changeList.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
    	this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	getImdbIDs(){
		console.log("getting imdbIDs")
		const test = [];
		ref.on('value', (data) =>{
		var ID = data.val();
		var keys = Object.keys(ID);
		for(var i=0; i<keys.length; i++){
			var k = keys[i];
			var Id = ID[k].imdbID;
			test.push(Id);
		}});
		return test
	}

	getOptions(){
		const op = []
		ref2.on('value', (data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				op.push(k);
			}
			this.setState({
				options:op
			});
		});
		return op
	}

	componentDidMount(){
		var op = []
		ref2.on('value', (data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				var Id = ID[k].Lname;
				op.push(k);
			}
			this.setState({
				options:op
			});
		});
		
		const test = [];
		ref.once('value', (data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				var Id = ID[k].imdbID;
				test.push(Id);
			};
			test.map((postID) =>{
				axios.get(URL+postID)
				.then(res =>{
					let movie = res.data
					let nextmov = {
						Title: movie.Title,
						Director: movie.Director,
						Ratings: movie.Ratings[0].Value,
						Plot: movie.Plot,
						Poster: movie.Poster,
						imdbID: movie.imdbID
					}
					this.setState(prevState => ({
						mList: [...prevState.mList, nextmov],
					}))
				}).catch(error => {
					console.log(error);
				});
			});
		});
		
	}

	Search(){
		console.log("in search");
		let match = false;
		var finding = document.getElementById("searching-movie").value;
		let newState = []
		ref.on('value', (movieTitle) =>{
			var ID = movieTitle.val();
			var keys = Object.keys(ID);
			for(let i in keys){
				var k = keys[i];
				var searchingTitle = ID[k].Title;
				if(searchingTitle === finding){
					newState.push(ID[k]);
					match =true;
				};
			};
			
		});
		if(match){
			this.setState({mList:newState});
			console.log("Found movie");

		}
		else{
			alert("couldn't find movie title in database");
		}
	}

	updatemList(){

		var op = []
		ref2.on('value', (data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				var Id = ID[k].Lname;
				op.push(k);
			}
			this.setState({
				options:op
			});
		});

		const test = [];
		ref.once('value', (data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				var Id = ID[k].imdbID;
				test.push(Id);
			}
			test.map((postID) =>{
				axios.get(URL+postID)
				.then(res =>{
					let movie = res.data
					let nextmov = {
						Title: movie.Title,
						Director: movie.Director,
						Ratings: movie.Ratings[0].Value,
						Plot: movie.Plot,
						Poster: movie.Poster,
						imdbID: movie.imdbID
					}
					this.setState(prevState => ({
						mList: [...prevState.mList, nextmov],
					}))
				}).catch(error => {
					console.log(error);
				});
			})
		});
	}

	deleteMovie(dMovie){
		console.log("deleting movie" + dMovie);
		var ref = firebase.database().ref("mList/"+dMovie);
		ref.remove().then(function() {
		    console.log("Remove succeeded.")
		}).catch(function(error) {
			console.log("Remove failed: " + error.message)
		});
		this.setState({mList:[]})
		this.updatemList();
		if(this.state.showModal){
			this.setState({showModal:false})
		}
	}

	loadMore(){
		console.log("loadMore");
		this.setState((prev) => {
      		return {init: prev.init + 8};
    	});
  	}
  
  	
  	handleOpenModal(input) {
  		
  		let data={
  			title:input.target.title,
  			poster: input.target.src,
  			imdbID:input.target.id,
  			plot: input.target.alt,
  			director: input.target.lang,
  			rating: input.target.name,
  		}
    	this.setState({ 
    		showModal: true,
    		showThisMovie: data,
    	});
  	}
  	handleCloseModal () {
  		
    	this.setState({ 
    		showModal: false,
    		showthisMovie: "",
    	});
  	}

  	viewPosters(){
  		const pic = this.state.mList.slice(0,this.state.init).map((indi,index) =>(
			<div className = "mCARDS">
				<img id={indi.imdbID} lang={indi.Director} name={indi.Ratings} alt={indi.Plot} title={indi.Title} src={indi.Poster} onClick={this.handleOpenModal}/>
			</div>
  		));
  		return pic
  	}

  	changeList(event){
  		// var x = document.getElementsByI
  		// this.setState({value: event.target.value})
  		// console.log(x)
	}
	addToList(e){
		// console.log(e.target.value);
	}

	getId(e){
		// var x = document.getElementsByClassName("Dropdown-root").value;
		// console.log(e);
		// ref2.once('value', (data) =>{
		// 	var ID = data.val();
		// 	var keys = Object.keys(ID);
		// 	for(var i=0; i<keys.length; i++){
		// 		var k = keys[i];
		// 		var Id = ID[k].Lname;
				
		// 	}
	}

	render() {
		
		return (
			<div className = "allMovies">
				<div className = "Search-options">
					
						<Dropdown className="Dropdown-root" id={this.getId} options={this.state.options} onChange={this.changeList} value={this.state.listOption} placeholder="Select an option" />
					
					<div className = "search">
						<input
							className = "Searchbox"
							type = "text"
							id = "searching-movie"
							placeholder = "Search A Movie Title"
						/>
						<button onClick={() => {this.Search()}}>Search</button>
					</div>
					<div className="filler"></div>
				</div>

				<div className = "poster-section">
					<div className = "posters">
						{this.viewPosters()}
					</div>
					{this.state.init < this.state.mList.length &&
            		<button onClick={this.loadMore} type="button" className="load-more">Load more</button>
          			}
				</div>
				<ReactModal 
		           isOpen={this.state.showModal}
		           contentLabel="onRequestClose Example"
		           onRequestClose={this.handleCloseModal}
		           shouldCloseOnOverlayClick={true}
		        >
		        <div className="modal" id="modal">
			        	<h2>{this.state.showThisMovie.title}</h2>
		        </div>
		        <div className="content">
		        	<div className = "posterimage">
			        	<img src={this.state.showThisMovie.poster}/>
		        	</div>
		        	<div className = "information">
		        		<div className = "director">
		        			<p>Director: &nbsp; </p>
		        			<p>{this.state.showThisMovie.director}</p>
		        		</div>
		        		<div className = "director">
		        			<p>Rating: &nbsp; </p>
			        		<p>{this.state.showThisMovie.rating}</p>
			        	</div>
			        	<div className ="plot">
			        		<p>Plot: &nbsp; </p>
			        		<p>{this.state.showThisMovie.plot}</p>
			        	</div>
			        	<div className="actions">
       		        		<Dropdown alt={this.state.showThisMovie.imdbID} className="modal-dropDown" id="addToNewList" options = {this.state.options} onChange={this.addToList} value={defaultOption} placeholder="Select an option" />
			        		<button className="delete" onClick={()=>{this.deleteMovie(this.state.showThisMovie.imdbID)}}>Delete from Display</button>
		        		</div>
		        	</div>
	        	</div>
	        	<div className = "footer">
	        		<button className="closeButton" onClick={this.handleCloseModal}>Close</button>
	  			</div>
		        </ReactModal>
			</div>
		);

	}
	
}



export default Movies;