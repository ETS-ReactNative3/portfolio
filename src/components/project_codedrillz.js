import React, { Component } from 'react';
import ImgHomescreen from './../assets/codedrillz/homepage.jpg';
import ImgSignup from './../assets/codedrillz/signup.jpg';
import ImgLeaderboard from './../assets/codedrillz/leaderboard.jpg';
import ImgDrills1 from './../assets/codedrillz/drills.jpg';
import ImgDrills2 from './../assets/codedrillz/drills2.jpg';
import ImgDrills3 from './../assets/codedrillz/drills3.jpg';

class ProjectCodedrillz extends Component {
	render() {
		return (
      <div className="project__content">
				<h1 className="project__title">CodeDrillz</h1>
        <img className="project__image" src={ImgHomescreen} alt="Codedrillz homescreen" />

        <p>
          A team project built over a 72 hour period for users to test their skills in coding which utilizes a point-based design for increased motivation. Built on Rails, Bootstrap, and jQuery. An emphasis was put towards GitHub collaboration and version control. My responsibilities included the website design using illustrator and front-end coding using jQuery and Bootstrap.
        </p>

        <div className="project__justify-flex">
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

        <img className="project__image" src={ImgSignup} alt="Codedrillz signup page" />
        <img className="project__image" src={ImgDrills1} alt="Codedrillz drillgroups" />
        <img className="project__image" src={ImgDrills2} alt="Codedrillz questions" />
        <img className="project__image" src={ImgDrills3} alt="Codedrillz questions" />
        <img className="project__image" src={ImgLeaderboard} alt="Codedrillz leaderboards" />
      </div>
		)
	}
}

export default ProjectCodedrillz;