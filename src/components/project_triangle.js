import React, { Component } from 'react';
import Image1 from './../assets/triangle/1.jpg';

class ProjectTriangle extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
			<div>
				<img src={Image1} />
				<p>
					Tri-Angle is 3 triangular/modular lamps that can be placed at different angles. Tri-Angle consists of three tri-angular shaped pieces that lights up when another modular piece is connected with it.
				</p>
				<p>
					Please check out our team blog for a more indepth look of the process and behind the scenes!
				</p>

				</div>
		)
	}
}

export default ProjectTriangle;