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
        <button className="project__close-button" onClick={this.props.toggleProject}>X</button>
        <h1 className="project__title">{this.props.currentProject}</h1>
        {this.chooseProject(this.props.currentProject)}
      </div>
		)
	}
}

export default Project1;