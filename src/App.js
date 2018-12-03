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
import Resume from './assets/resume.pdf';
import Logo from './components/logo';

class App extends Component {
  constructor(props) {
    super(props);

    this.projectContainerRef = React.createRef();

    this.state = {
      projectShowing: false,
      currentProject: '',
      showMobileMenu: false,
      currentLightBoxImage: '',
    }

    this.toggleProject = this.toggleProject.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
    this.toggleLightBox = this.toggleLightBox.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    let clickingClass = e && e.target && e.target.className;
    if(clickingClass && (typeof clickingClass === 'string') && clickingClass.includes('project__image')) {
      this.toggleLightBox(e);
    }
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

  toggleMobileMenu() {
    if(this.state.showMobileMenu) {
      this.setState({ showMobileMenu: false });
    } else {
      this.setState({ showMobileMenu: true });
    }
  }

  scrollTop() {
    this.projectContainerRef.current.scrollTo({
      top: this.projectContainerRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  toggleLightBox(e) {
    const imageLink = e && e.target && e.target.src;
    if(this.state.currentLightBoxImage) {
      this.setState({ currentLightBoxImage: '' });
    } else {
      this.setState({ currentLightBoxImage: `${imageLink}` });
    }
  }

  render() {
    return (
      <div className="App">
        <div onClick={() => this.toggleLightBox()} className={this.state.currentLightBoxImage ? 'lightbox lightbox--show' : 'lightbox'}>
          <div className="lightbox__content">
            <img src={this.state.currentLightBoxImage} />
          </div>
          <p>click anywhere to close</p>
        </div>
        <div className={this.state.showMobileMenu ? 'nav nav--show-mobile' : 'nav'}>
          <button className="hamburger__button" onClick={() => this.toggleMobileMenu()}>
            <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 19.49 19.49">
              <rect x="947.17" y="540.36" width="25" height="2.56" transform="translate(-1051.84 305.33) rotate(-45)"/>
              <rect x="958.39" y="529.14" width="2.56" height="25" transform="translate(-1051.84 305.33) rotate(-45)"/>
            </svg>
          </button>

          <div className="nav__logo">
            <h3>Jackie Chui</h3>
            {/* <Logo /> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </div>

          <div className="nav__menu" onClick={() => this.toggleProject('nothing')}>
            <ul className="nav__menu-item">
              {/* <li><a href="">Work</a></li> */}
              <li><a href={Resume} target="_blank">Resume</a></li>
              <li><a onClick={() => this.toggleProject('Contact Page')}>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="app-body">
          <button className="hamburger__button" onClick={() => this.toggleMobileMenu()}>
            <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 25 21.33">
              <rect width="25" height="2.56"/>
              <rect y="9.39" width="25" height="2.56"/
              ><rect y="18.77" width="25" height="2.56"/>
            </svg>
          </button>
          <div className="app-body__block" onClick={() => this.toggleProject('Fanswifi')}>
            {/* <p className="app-body__number">Fanswifi</p> */}
            <FanswifiLogo className='App-logo' ariaLabel='logo' />
            <div className="app-body__title">Fanswifi</div>  

            <div className="inner top"></div>
            <div className="inner bottom"></div>
            <div className="inner left"></div>
            <div className="inner right"></div>
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Werewolf')}>
            {/* <p className="app-body__number">Werewolf</p>   */}
            <WerewolfLogo className='App-logo' ariaLabel='logo' />
            <div className="app-body__title">Werewolf</div>  
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Triangle')}>
            {/* <p className="app-body__number">Triangle</p> */}
            <TriangleLogo className='App-logo' ariaLabel='logo' />
            <div className="app-body__title">Triangle</div>  
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Codedrillz')}>
            {/* <p className="app-body__number">CodeDrillz</p>       */}
            <CodedrillzLogo className='App-logo' ariaLabel='logo' />
            <div className="app-body__title">Codedrillz</div>
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Rediscover Indigo')}>
            {/* <p className="app-body__number">Rediscover Indigo</p>    */}
            <IndigoLogo className='App-logo' ariaLabel='logo' />
            <div className="app-body__title">Rediscover Indigo</div>
          </div>
          <div className="app-body__block" onClick={() => this.toggleProject('Nauticalcats')}>
            {/* <p className="app-body__number">Nautical Cats</p>  */}
            <div className="css-logo-animation-hack">
              {/* I need a hack here because I cannot transform rotate and translate seperately */}
              <NauticalLogo className='App-logo' ariaLabel='logo' />
            </div>
            <div className="app-body__title">Nautical Cats</div>
          </div>
        </div>
        <Project
          className={this.state.projectShowing ? 'project project--show' : 'project project--hide'}
          currentProject={this.state.currentProject}
          toggleProject={this.toggleProject}
          scrollTop={this.scrollTop}
          projectRef={this.projectContainerRef}
        />
      </div>
    );
  }
}

export default App;
