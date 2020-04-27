import React, { Component } from 'react';
import './App.css'
import Body from './Components/Body';
import TabList from './Components/TabList';
import flower from './Components/images/flower.JPG'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) =>{
      this.setState({
        activeTab: id
      })
    }
  }
  render() {
    const tabs = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Images'
    },
    {
      id: 3,
      title: 'Videos'
    },
    {
      id: 4,
      title: 'Links'
    },
    ]
    return (
      <div className = "page">
        <div className = "header">
        </div>
        <div className = "profile">
        </div>
        <div className = "Name">
          <p>Cher Lin</p>
        </div>
        <div className = "bio-bar">
          <div className = "bio">
            <p>Cell: (651) 431-1904</p>
            <p>Email: cher@ucsb.edu</p>
            <p>Santa Barbara, CA</p>
          </div>
        </div>
        <div className = "body">
          <div className = "nav-bar">
            <TabList tabs = {tabs} 
            changeTab={this.changeTab}
            activeTab={this.state.activeTab}/>
          </div>
          <div className="main-body">
            <Body activeTab={this.state.activeTab}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;