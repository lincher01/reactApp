import React, { Component } from 'react';
import './../App.css';
import firebase from 'firebase';
// import BarGraph from './BarGraph.js';
import { svg } from 'd3';
var d3 = require("d3");

const GraphViz=firebase.database().ref('GraphViz');
const GraphVizData=firebase.database().ref('GraphViz/');


export class MovieGraph extends Component {
    constructor(){
    	super();
		this.state ={
			movieList: [],
			Nodes: {},
			Links: {},
		}
    }

    componentDidMount(){
    	console.log("componentDidMount");
    	this.getMovieList();
    }

    getMovieList(){
    	GraphViz.on('value', (movie) =>{
    		var ID = movie.val();
			var keys = Object.keys(ID);
			this.setState({
				movieList: keys,
			})
			GraphVizData.on('value', (data)=>{
				var info = data.val();
				this.setData(info);
			})
			
    	})
    }

    setData(info){
    	console.log("set Data")
    	var nodes = [];
    	var links = [];
    	var keys = Object.keys(info);
    	var data = Object.values(info);
    	// setting up nodes
    	for(let i in keys){
    		// console.log(keys[i]);
    		var size = nodes.length;
    		var Actors = this.ActorsString(data[i].Actors);
    		let nextmov={
    			Poster: data[i].Poster,
    			group: "Movie",
    			Title: data[i].Title,
    			id: keys[i],
    		};
    		nodes.push(nextmov);
    		let findThisActor="";

    		//looping through actors in this movie
    		for(let t in Actors){
    			let findThisActor=Actors[t];
    			let thisActorMovie=nextmov.Title;
    			var found = false
    			//looping through all the nodes to set actor nodes and 
    			for(let x in nodes){
    				
    				if(nodes[x].group === "Actor" && nodes[x].Title === findThisActor){
    					console.log("Found source: "+x)
    					console.log("found Target: "+size);

    					let aLink={
    						source: x,
    						target: size,
    					}
    					links.push(aLink);
    					found = true;
    				}
    			}
    			
    			if(!found){
    				console.log("new Actor source: " + nodes.length+" new Actor Target: "+size)
    				let anode ={
    					Title: findThisActor,
    					group: "Actor",
    				};
    				let aLink ={
    					source: nodes.length,
    					target: size
    				}
    				links.push(aLink);
    				nodes.push(anode);

    			}
    		}
    	}
    	this.setState({
    		Nodes: nodes,
    		Links: links,
    	})

    }

    ActorsString(Actors) {
    	console.log("ActorsString");
        var ActorArray = Actors.split(", ");
        return ActorArray;
    }

    componentDidUpdate(){
    	console.log("componentDidUpdate");
    	const elem = document.getElementById("pikachu");
    	if(this.state.movieList.length!==0 &&  Object.keys(this.state.Nodes).length !== 0 && Object.keys(this.state.Links).length !== 0 ){
    		const links = [{
                source: 1,
                target: 0
            }]
    		elem.appendChild(this.chart(this.state.Nodes, this.state.Links));
    	}
    }


	drag = (simulation) => {
		function dragStarted(d){
			if(!d3.event.active){
				simulation.alphaTarget(0.3).restart();
			}
			d.fx = d.x;
			d.fy = d.y;
		}

		function dragged(d){
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		}
		function dragEnded(d){
			if(!d3.event.active){
				simulation.alphaTarget(0);
			}
			d.fx = null;
			d.fy = null;
		}
		return d3.drag()
			.on("start", dragStarted)
			.on("drag", dragged)
			.on("end", dragEnded);
	}

	mouse

    chart(nodes, links){
    	console.log("chart");
    	const width=1920;
    	const height= 1080;
    	console.log(links);
    	console.log(nodes);
    	const objLinks = links.map(d=> Object.create(d)); 
    	const objNodes = nodes.map(d => Object.create(d));

    	const svg = d3.create("svg")
    		.attr("viewBox", [0,0, width,height]);

    	const link = svg.append("g")
    		.attr("stroke", "#999")
    		.attr("stroke-opacity", 0.6)
    		.selectAll("line")
    		.data(objLinks)
    		.join("line")
    		.attr("stroke-width", d=>Math.sqrt(d.value));

    	const color = (node) => {
    		if(node.group == "Actor")
    			return d3.color("pink");
    		else{
    			return d3.color("blue");
    		}
    	}

    	const size = (node) =>{
    		if (node.group == "Actor")
    			return 50
    		else{
    			return 100
    		}
    	}

    	var defs = svg.append("defs")
    	//fix this//
    	const moviePoster = (node)=>{
    		if(node.group == "Movie"){
    			defs.append('pattern')
                    .attr('id', 'img_'+node.id)
                    .attr('patternUnits', 'objectBoundingBox')
                    .attr('width', 1)
                    .attr('height', 1)
                .append('image')
                    .attr('xlink:href', node.Poster)
                    .attr("width", 300)
                    .attr("height", 300)
                    .attr("x", -50)
                    .attr("y", 0);
    			return"url(#img_" + node.id+ ")"
    		}
    		else{
    			return d3.color("pink")
    		}
    	}
    	
    	const simulation = d3.forceSimulation(objNodes)
    		.force("link", d3.forceLink().links(links).id(d=>{return d.index; }).distance(200))
    		.force("charge",d3.forceManyBody())
    		.force("center",d3.forceCenter(width/2,height/2));

    	// var tooltip = svg.append("text")
    	
    	
    	// const mouseOver = (node) =>{
    		
    	// 	if(node.group == "Actor"){
    	// 		console.log("mouseOver");
    	// 		tooltip.text("hello")
    	// 	}
    	// 	return tooltip.text
    	// }

    	const mouseMove = (node) =>{

    	}

    	const mouseOut = (node) =>{

    	}

		const node = svg.append("g")
    		.attr("stroke", "#fff")
    		.attr("stroke-width", 1.5)
    		.selectAll("circle")
    		.data(objNodes)
    		.join("circle")
    		.attr("r", size)
    		.attr("fill", moviePoster)
    		.on("mouseover", function(d){d3.select(this).select("text").style("visibility", "visible")})
    		.on("mousemove", mouseMove)
    		.on("mouseout", mouseOut)
    		.call(this.drag(simulation));    	

    	simulation.on("tick", ()=>{
    		link
    			.attr("x1", d=>d.source.x)
    			.attr("y1", d=> d.source.y)
    			.attr("x2", d=> d.target.x)
    			.attr("y2", d=> d.target.y);
    		node
    			.attr("cx", d=>d.x)
    			.attr("cy", d=>d.y)
    	});
    	return svg.node();
    }

	

  	render(){
    	return (
     		<div id="pikachu"></div>
    	)
	}
}
export default MovieGraph