import React, { Component } from 'react';
import logo from './logo.svg';
import Logo from './logo.svg';
import './App.css';
// import triangle from './assets/triangle.svg';
import TriangleLogo from './assets/triangle';

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
        <div className="app-body">
          {/* <h1 className="App-title">Welcome to React</h1> */}
          <div className="app-body__block">
            {/* <svg
              className="triangle_lamp"
              title="triangle_lamp"
              role="img"
            >
              <use xlinkHref={triangle + '#triangle_lamp'} />
            </svg> */}

          </div>
          <div className="app-body__block"></div>
          <div className="app-body__block">
            <TriangleLogo className='App-logo' ariaLabel='logo' />
          </div>
          <div className="app-body__block"></div>
          <div className="app-body__block"></div>
          <div className="app-body__block"></div>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
