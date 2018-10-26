import React, { Component } from 'react';
import logo from './logo.svg';
import Logo from './logo.svg';
import './App.css';
// import triangle from './assets/triangle.svg';
import TriangleLogo from './assets/triangle';
import Project from './components/projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectShowing: false,
      currentProject: '',
    }

    this.toggleProject = this.toggleProject.bind(this);
  }

  toggleProject(projectName) {
    if(this.state.projectShowing) {
      this.setState({projectShowing: false});
    } else {
      this.setState({currentProject: `${projectName}`});
      this.setState({projectShowing: true});
    }
  }

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
            <p className="app-body__number">Random</p>

            {/* <svg
              className="triangle_lamp"
              title="triangle_lamp"
              role="img"
            >
              <use xlinkHref={triangle + '#triangle_lamp'} />
            </svg> */}

          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Werewolf')}>
            <p className="app-body__number">Werewolf</p>          
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Triangle')}>
            <p className="app-body__number">Triangle</p>
            <TriangleLogo className='App-logo' ariaLabel='logo' />
          </div>
          <div className="app-body__block">
            <p className="app-body__number">4</p>                      
          </div>
          <div className="app-body__block">
            <p className="app-body__number">5</p>                      
          </div>
          <div className="app-body__block">
            <p className="app-body__number">6</p>                      
          </div>
          <div className="app-body__block">
            <p className="app-body__number">7</p>                      
          </div>
        </div>
        <Project
          className={this.state.projectShowing ? 'project project--show' : 'project project--hide'}
          currentProject={this.state.currentProject}
          toggleProject={this.toggleProject}
        />
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
