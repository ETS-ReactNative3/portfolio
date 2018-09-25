import React, { Component } from 'react';

class Project1 extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
			<div className={this.props.className}>
        I am project 1 container
      </div>
		)
	}
}

export default Project1;