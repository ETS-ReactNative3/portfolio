import React, { Component } from 'react';
import ProjectTriangle from './project_triangle';
import ProjectWerewolf from './project_werewolf';

class Project1 extends Component {
  constructor(props, context) {
    super(props, context);

    this.chooseProject = this.chooseProject.bind(this);
  }

  chooseProject(projectNumber) {
    if (projectNumber === '2') {
      return <ProjectWerewolf />
    } else if (projectNumber === '3') {
      return <ProjectTriangle />
    } else {
      return <div>Nothing</div>
    }
  }

	render() {
		return (
			<div className={this.props.className}>
        <button onClick={this.props.toggleProject}>Close</button>
        I am project {this.props.currentProject} container
        {this.chooseProject(this.props.currentProject)}
      </div>
		)
	}
}

export default Project1;