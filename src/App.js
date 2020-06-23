import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import data from "./data";
//import MediaCard from "./component/pictureframe"


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Particles
          params={data}
        />
        <Header title="🛠 This page is currently in development. 🛠" />
      </div>
    );
  }
}


class Header extends Component {
  render() {

    return (
      <header className="App-header">
        <p>
          {this.props.title}
        </p>
      </header>

    )
  }
}
export default App;
