import React, { Component } from 'react';
import ImgHomescreen from './../assets/codedrillz/homepage.jpg';
import ImgSignup from './../assets/codedrillz/signup.jpg';
import ImgLeaderboard from './../assets/codedrillz/leaderboard.jpg';
import ImgDrills1 from './../assets/codedrillz/drills.jpg';
import ImgDrills2 from './../assets/codedrillz/drills2.jpg';
import ImgDrills3 from './../assets/codedrillz/drills3.jpg';

class ProjectCodedrillz extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
      <div className="project__content">
        <img className="project__image" src={ImgHomescreen} />

        <p>
          A team project built over a 72 hour period for users to test their skills in coding which utilizes a point-based design for increased motivation. Built on Rails, Bootstrap, and jQuery. An emphasis was put towards GitHub collaboration and version control. My responsibilities included the website design using illustrator and front-end coding using jQuery and Bootstrap.
        </p>

        <div className="project__collab-skills">
					<div className="project__collaborators">
						<h3>Collaborators</h3>
						<p>Amir Nabaei</p>
						<p>Sanny Trinh</p>
						<p>Colin Nebocat</p>
						<p>Allain Era</p>
						<p>Srinivas Rao</p>
						<p>Jackie Ellenberger</p>
					</div>

					<div className="project__skills-used">
						<h3>Technologies Used</h3>
						<p>Illustrator</p>
						<p>Corel Draw</p>
						<p>Solid Works</p>
					</div>
				</div>

        <img className="project__image" src={ImgSignup} />
        <img className="project__image" src={ImgDrills1} />
        <img className="project__image" src={ImgDrills2} />
        <img className="project__image" src={ImgDrills3} />
        <img className="project__image" src={ImgLeaderboard} />
      </div>
		)
	}
}

export default ProjectCodedrillz;