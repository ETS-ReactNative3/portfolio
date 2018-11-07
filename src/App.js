import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TriangleLogo from './assets/triangle';
import FanswifiLogo from './assets/fanswifi';
import WerewolfLogo from './assets/werewolf';
import CodedrillzLogo from './assets/codedrillz';
import IndigoLogo from './assets/indigo';
import NauticalLogo from './assets/nautical';
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
      if (projectName !== 'nothing') {
        this.setState({currentProject: `${projectName}`});
        this.setState({projectShowing: true});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <div className="nav__logo">
            <h3>Jackie Chui</h3>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="nav__menu" onClick={() => this.toggleProject('nothing')}>
            <ul className="nav__menu-item">
              <li><a href="">Work</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="app-body">
          {/* <h1 className="App-title">Welcome to React</h1> */}
          <div className="app-body__block" onClick={() => this.toggleProject('Fanswifi')}>
            <p className="app-body__number">Fanswifi</p>
            <FanswifiLogo className='App-logo' ariaLabel='logo' />
            <div className="inner top"></div>
            <div className="inner bottom"></div>
            <div className="inner left"></div>
            <div className="inner right"></div>
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Werewolf')}>
            <p className="app-body__number">Werewolf</p>  
            <WerewolfLogo className='App-logo' ariaLabel='logo' />        
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Triangle')}>
            <p className="app-body__number">Triangle</p>
            <TriangleLogo className='App-logo' ariaLabel='logo' />
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Codedrillz')}>
            <p className="app-body__number">CodeDrillz</p>      
            <CodedrillzLogo className='App-logo' ariaLabel='logo' />                
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Rediscover Indigo')}>
            <p className="app-body__number">Rediscover Indigo</p>   
            <IndigoLogo className='App-logo' ariaLabel='logo' />                     
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Nauticalcats')}>
            <p className="app-body__number">Nautical Cats</p> 
            <NauticalLogo className='App-logo' ariaLabel='logo' />                
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
