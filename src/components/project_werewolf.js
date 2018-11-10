import React, { Component } from 'react';
import Banner from './../assets/werewolf/banner.jpg';
import Image1 from './../assets/werewolf/1.JPG';
import Image2 from './../assets/werewolf/2.JPG';
import Mobile1 from './../assets/werewolf/m1.JPG';
import Mobile2 from './../assets/werewolf/m2.JPG';
import Mobile3 from './../assets/werewolf/m3.JPG';
import Mobile4 from './../assets/werewolf/m4.JPG';
import Mobile5 from './../assets/werewolf/m5.JPG';
import Mobile6 from './../assets/werewolf/m6.JPG';
import Mobile7 from './../assets/werewolf/m7.JPG';
import Mobile8 from './../assets/werewolf/m8.JPG';
import Mobile9 from './../assets/werewolf/m9.JPG';


class ProjectWerewolf extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
      <div className="project__content">
        <img className="project__image" src={Banner} />

        <p>
          Werewolf is a web application adaption to the popular social game Werewolf and Mafia.
        </p>

        <p>
          Currently there are 3 roles, the Werewolf, the Seer, and the Villagers. Every night each special roledoes an action hidden from players with different roles. The werewolves will select a person to kill and the seer will identify a role of a player.
        </p>

        <p>
          During day time, the villagers and the seer must do their best to uncover the werewolves and lynch themwhile the werewolves must eliminate all the villagers.
        </p>

        <a className="project__button" href="https://github.com/jshchui/fwnext" target="_blank">
          Github
        </a>

        <div className="project__skills-used">
          <h3>Technologies Used</h3>
          <p>ReactJS</p>
          <p>Firebase Realtime Database</p>
          <p>Fireblase Cloud Functions</p>
          <p>Illustrator</p>
        </div>

        <img className="project__image" src={Image1} />
        <img className="project__image" src={Image2} />
        
        <div className="project__mobile-container">
          <img className="project__mobile-image" src={Mobile1} />
          <img className="project__mobile-image" src={Mobile2} />
          <img className="project__mobile-image" src={Mobile3} />
        </div>

        <div className="project__mobile-container">
          <img className="project__mobile-image" src={Mobile4} />
          <img className="project__mobile-image" src={Mobile5} />
          <img className="project__mobile-image" src={Mobile6} />
        </div>

        <div className="project__mobile-container">
          <img className="project__mobile-image" src={Mobile7} />
          <img className="project__mobile-image" src={Mobile8} />
          <img className="project__mobile-image" src={Mobile9} />
        </div>
      </div>
		)
	}
}

export default ProjectWerewolf;