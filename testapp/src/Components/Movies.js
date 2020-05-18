import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const URL = "https://www.omdbapi.com/?apikey=858c4cb1&i=";
let list = ["tt0377092",
			"tt0454945",
			"tt0381707",
			"tt6320628",
			"tt1431045",
			"tt2452042",
			"tt0094721",
			"tt1964418",
			"tt1677720",
			"tt3501632",
			"tt1772341",
			"tt0330373",
			"tt0120783",
			"tt3783958",
			"tt0398286",
			"tt3521164"
			];

export class Movies extends Component {

	constructor(props){
		super(props);
		this.state={
			mList: []
		}
	}

	componentDidMount(){
		list.map((postID) =>{
			axios.get(URL+postID)
			.then(res =>{
				let movie = res.data
				let nextmov = {
					title: movie.Title,
					director: movie.Director,
					rating: movie.Rating,
					plot: movie.Plot,
					poster: movie.Poster,
					imdbID: movie.imdbID
				}
				this.setState(prevState => ({
					mList: [...prevState.mList, nextmov]
				}))
			}).catch(error => {
				console.log(error);
			});
			return(
				console.log("got data " + URL + postID)
			)
		})
	}

	render() {
		return (
			<div className = "movie_section">
				<SimpleReactLightbox>
					<SRLWrapper>
						{this.state.mList.map((card) =>{
							let  Info = "Title: "+card.title+
										" ~ Director: "+card.director+
										" ~ Rating: "+card.rating+
										" ~ Plot: "+card.plot;
							return(
								<img className = "CARDS" 
								alt = {Info} 
								key= {card.imdbID}
								src = {card.poster}/>
							)
						})}
					</SRLWrapper>
				</SimpleReactLightbox>
			</div>
		);
	}
}

export default Movies;