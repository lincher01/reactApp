import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import ReactModal from 'react-modal';
import firebase from 'firebase';

const URL = "https://www.omdbapi.com/?apikey=858c4cb1&i=";
var ref = firebase.database().ref('mList');
var ref2 = firebase.database().ref('ListNames')
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
			setList: 0,
		}
		this.loadMore = this.loadMore.bind(this);
		this.addToNewList = this.addToNewList.bind(this);
		this.changeList = this.changeList.bind(this);
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
		var op = []
		ref2.on('value', (data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				var Id = ID[k].Lname;
				op.push(k);
			}
			op.map(x=>{
				let nextop={
					value: x,
					label: x,
				}
				this.setState(prevState=>({
					options: [...prevState.options, nextop],
				}))
			})
		});
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
			op.map(x=>{
				let nextop={
					value: x,
					label: x,
				}
				this.setState(prevState=>({
					options: [...prevState.options, nextop],
				}))
			})
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
						imdbID: movie.imdbID,
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
		var match = false;
		var finding = document.getElementById("searching-movie").value;
		let newState = [];
		let junk = [];
		ref.on('value', (movieTitle) =>{
			var ID = movieTitle.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				var searchingTitle = ID[k].Title;
				if(searchingTitle === finding){
					newState.push(ID[k]);
					match =true;
				}
				else{
					junk.push(ID[k]);
				}
			}
			if(match == false){
				alert("not found");
				this.setState({
					mList:junk,
				})
			}
			else{
				this.setState({
					mList:newState,
				})
			}
		});
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
			op.map(x=>{
				let nextop={
					value: x,
					label: x,
				}
				this.setState(prevState=>({
					options: [...prevState.options, nextop],
				}))
			})
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
			})
			.catch(function(error){
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
    		showThisMovie: "",
    	});
  	}

  	viewPosters(){
  		console.log("viewPosters")
  		const pic = this.state.mList.slice(0,this.state.init).map((indi,index) =>(
			<div className = "mCARDS">
				<img id={indi.imdbID} lang={indi.Director} name={indi.Ratings} alt={indi.Plot} title={indi.Title} src={indi.Poster} onClick={this.handleOpenModal}/>
			</div>
  		));
  		return pic
  	}

  	changeList(e){
  		this.setState(prevState=>({
			setList: e.value,
		}));
  		this.changePosters(e.value);
	}

	changePosters(a){
		var newRef = firebase.database().ref("ListNames/"+a+"/MovieArray");
		const test = [];
		newRef.on('value', (data) =>{
			var ID = data.val();
			var keys = Object.keys(ID);
			for(var i=0; i<keys.length; i++){
				var k = keys[i];
				test.push(ID[k]);
			}
			this.setState({
				mList: test,
			})
		});
		
	}



	addToNewList(e){
		let ListValue = e.value;
		let movieID = this.state.showThisMovie.imdbID;
		axios.get(URL+movieID).then(res=>{
			var data = res.data
			firebase.database().ref("ListNames/"+ListValue+"/MovieArray/"+movieID).set(data)
		})
	}

	render() {
		
		return (
			<div className = "allMovies">
				<div className = "Search-options">
						<Dropdown className="Dropdown-root" options={this.state.options} onChange={this.changeList} value={this.state.listOption} placeholder="Select an option" />
					<div className = "search">
						<input
							className = "Searchbox"
							type = "text"
							id = "searching-movie"
							placeholder = "Search A Movie Title"
						/>
						<button onClick={()=>this.Search()}>Search</button>
					</div>
					<div className="filler"></div>
				</div>

				<div className = "poster-section">
					<div className = "posters">
						{this.viewPosters()}
					</div>
					{this.state.init < this.state.mList.length &&
            		<button onClick={()=>this.loadMore()} type="button" className="load-more">Load more</button>
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
       		        		<Dropdown alt={this.state.showThisMovie.imdbID} className="modal-dropDown" id="addToNewList" options = {this.state.options} onChange={this.addToNewList} value={defaultOption} placeholder="Select an option" />
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