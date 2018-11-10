import React, { Component } from 'react';
import ProjectTriangle from './project_triangle';
import ProjectWerewolf from './project_werewolf';
import ProjectFanswifi from './project_fanswifi';
import ProjectCodedrillz from './project_codedrillz';
import ProjectNauticalcats from './project_nauticalcats';
import ProjectRediscoverindigo from './project_rediscoverindigo';



class Project1 extends Component {
  constructor(props, context) {
    super(props, context);

    this.chooseProject = this.chooseProject.bind(this);
  }

  chooseProject(projectNumber) {

    switch(projectNumber) {
      case 'Werewolf':
        return <ProjectWerewolf />
        break;
      case 'Triangle':
        return <ProjectTriangle />
        break;
      case 'Fanswifi':
        return <ProjectFanswifi />
        break;
      case 'Codedrillz':
        return <ProjectCodedrillz />
        break;
      case 'Nauticalcats':
        return <ProjectNauticalcats />
        break;
      case 'Rediscover Indigo':
        return <ProjectRediscoverindigo />
        break;
      default:
        return <div>Nothing</div>
    }
  }

	render() {
		return (
			<div className={this.props.className}>
        <button className="project__close-button" onClick={this.props.toggleProject}>
          <svg id="Layer_1" className="project__close-button-svg" data-name="Layer 1" viewBox="0 0 19.49 19.49">
            <rect x="947.17" y="540.36" width="25" height="2.56" transform="translate(-1051.84 305.33) rotate(-45)"/>
            <rect x="958.39" y="529.14" width="2.56" height="25" transform="translate(-1051.84 305.33) rotate(-45)"/>
          </svg>
        </button>
        <h1 className="project__title">{this.props.currentProject}</h1>
        {this.chooseProject(this.props.currentProject)}
        <button className="project__scroll-top" onClick={this.props.scrollTop}>
          <svg id="Layer_1" viewBox="0 0 23.49 13.56">
            <polygon points="13.56 1.81 11.74 0 9.93 1.81 0 11.74 1.81 13.56 11.74 3.62 21.68 13.56 23.49 11.74 13.56 1.81"/>
          </svg>
        </button>
      </div>
		)
	}
}

export default Project1;