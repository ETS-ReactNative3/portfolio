import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <div className="nav__logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="nav__menu">
            <ul className="nav__menu-item">
              <li><a href="">Work</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
        <header className="app-body">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
