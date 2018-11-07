import React, { Component } from 'react';
import ImgBrandshift1 from './../assets/indigo/brandshift1.jpg';
import ImgBrandshift2 from './../assets/indigo/brandshift2.jpg';
import ImgBusinessproblem from './../assets/indigo/businessproblem.jpg';
import ImgConnect from './../assets/indigo/connect2.jpg';
import ImgJourneyframework from './../assets/indigo/customerjourneyframework.JPG';
import ImgJourneymapping from './../assets/indigo/customerjourneymapping.JPG';
import ImgDiscover from './../assets/indigo/discover2.jpg';
import ImgJourneySketch from './../assets/indigo/journey.jpg';
import ImgMobile from './../assets/indigo/mobile.jpg';
import ImgOpening from './../assets/indigo/opening.jpg';
import ImgPlatform from './../assets/indigo/platform.jpg';
import ImgRead from './../assets/indigo/read2.jpg';
import ImgSupport from './../assets/indigo/support2.jpg';

class ProjectRediscoverindigo extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
      <div className="project__content">
        <p>
          Rediscover Indigo is a mobile and web platform, designed to allow authors to showcase unpublished work and for readers to discover, support, and help bring their stories to the market.
        </p>
        <img className="project__image" src={ImgPlatform} />


        <h2>My Role</h2>
        <p>
          Rediscover Indigo was a project done in five weeks. For the first three weeks, I led the ideation and creation of the project including the interaction and user experience of the platform. On the last two weeks, I shifted to a more technical role, creating the motion graphics of the UI with AfterEffects and Premiere Pro.
        </p>

        <h2>Business and Sector Problem</h2>
        <p>
          Indigo's book sales are declining because readers are able to purchase their books more quickly, conveniently and at a lower cost using internet-based retailers
        </p>
        <p>
          Book sales are declining because people are opting for more convenient methods to obtain their books online or are finding other sources of entertainment. Where the source or how the source of entertainment comes from doesn't matter. What people look for is convenience, this is where stories relying on a physical retail space as their main source of revenue are struggling
        </p>
        <h2>Opening</h2>
        <img className="project__image" src={ImgOpening} />

        <h2>Indigo's Current Brand Position</h2>
        <img className="project__image" src={ImgBrandshift1} />

        <p>
          Indigo's current brand position is currently only focused on being a book vendor, putting it in a losing competition against Amazon. Without the need to maintain a physical presence, Amazon is easily able to undercut Indigo prices by a substantial amount.
        </p>

        <h2>Our Proposed Brand Shift</h2>
        <img className="project__image" src={ImgBrandshift2} />

        <p>
          By shifting Indigo's focus towards being a "Literary Agent" and promoting the works of potential author, Indigo can regain customer loyalty along with a revenue stream. A sustainable revenue model can be established because by acting as Literary Agent for published books, Indigo can receive a percentage for every book sold, whether it is sold at their own bookstore, or at online retailers such as Amazon.
        </p>

        <h2>Proposal</h2>
        <p>
          We propse a multi-device platform, that is optimized for mobile, tablet, and web usage. It allows authors to upload their unpublished work, to receive feedback and build a fanbase started prior to publication. After enough fans have supported the author's work, we will connect them with an appropriate publisher. Once published, the book will be displayed in Indigo's bookstore.
        </p>

        <img className="project__image" src={ImgMobile} />
        <img className="project__image" src={ImgDiscover} />
        <img className="project__image" src={ImgConnect} />
        <img className="project__image" src={ImgRead} />
        <img className="project__image" src={ImgSupport} />
        <img className="project__image" src={ImgJourneyframework} />
        <img className="project__image" src={ImgJourneymapping} />
        <img className="project__image" src={ImgJourneySketch} />

        <div className="project__collab-skills">
					<div className="project__collaborators">
						<h3>Collaborators</h3>
						<p>Michaela Tsumura</p>
						<p>Vanessa Liu</p>
						<p>Richard Hoang</p>
						<p>Naixin Zhang</p>
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
      </div>
		)
	}
}

export default ProjectRediscoverindigo;