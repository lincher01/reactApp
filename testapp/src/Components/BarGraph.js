import React, { Component } from 'react';
import './../App.css';
import * as d3 from "d3";

export class BarGraph extends Component {
	constructor(props){
		super(props);
		this.myRef = React.createRef();
	}
	componentDidMount() {
    	this.drawGraph();
  	}
    
  drawGraph() {
    const data = [12, 5, 10, 6, 9, 10];
    const w=500;
    const h=400;
    
    const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")


	svg.selectAll("text")
	  .data(data)
	  .enter()
	  .append("text")
	  .text((d) => d)
	  .attr("x", (d, i) => i * 70)
	  .attr("y", (d, i) => h - (10 * d) - 3)


  }
        
  render(){
    return <svg ref={this.myRef}></svg>
  }
}

export default BarGraph
