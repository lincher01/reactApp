import React, { Component } from 'react';
import './App.css'
import Body from './Components/Body';
import TabList from './Components/TabList';
import BackToTop from "react-back-to-top-button";
import SimpleReactLightbox from 'simple-react-lightbox';

export class App extends Component {
  constructor(){
    super();
    this.state = {activeTab: 1}
    this.changeTab = (id) =>{
      this.setState({
        activeTab: id
      })
    }
  };

  render() {
  const buttonStyle = {
    color: "white",
    backgroundColor: 'rgb(0,172,238)',
    fontSize: '14px',
    fontWeight: '800',
    borderRadius: '9999px',
    padding: '15px',
    cursor: 'pointer',

  };
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
    {
      id: 5,
      title: 'Guests'
    },
    {
      id: 6,
      title: 'Movies'
    },
    {
      id: 7,
      title: "Add Movies"
    },
    {
      id: 8,
      title: "Create Lists"
    },
    {
      id: 9,
      title: "Movie Graph"
    }
  ];

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
        <div className = "nav-bar">
          <TabList tabs = {tabs} 
            changeTab={this.changeTab}
            activeTab={this.state.activeTab}/>
        </div>
        <div className = "body">
          <div className="main-body">
            <SimpleReactLightbox>
              <Body activeTab={this.state.activeTab}/>
            </SimpleReactLightbox>
          </div>
        </div>
        <BackToTop
          showAt='100'
          style = {buttonStyle}
        >
        <span>Back To Top</span>
      </BackToTop>
      </div>
    );
  }
}

export default App;