import React, { Component } from 'react';
import Img1 from './../assets/haikugenerator/IMG1.JPG';
import Img2 from './../assets/haikugenerator/IMG2.JPG';
import Img3 from './../assets/haikugenerator/IMG3.JPG';
import Img4 from './../assets/haikugenerator/IMG4.JPG';

class ProjectHaikugenerator extends Component {
	render() {
		return (
      <div className="project__content">
        <h1 className="project__title">Haiku Generator</h1>
        <img className="project__image" src={Img1} alt="Haiku Generator Home Page" />
        <p>Haiku Generator generates a not too great haiku based on the words from an Image. Right now the Haiku only contains adjectives and nouns!</p>
        <p>The image is sent to the google api which will return a list of web and label words. Those words will be randomly chosen to create a 5 7 5 haiku.</p>
        <div className="project__justify-flex">
          <a className="project__button" href="https://github.com/jshchui/haiku-generator" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a className="project__button" href="https://hi-koo-generator.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            Site
          </a>
        </div>
        <img className="project__image" src={Img4} alt="Generated Haiku" />
        <div className="project__skills-used">
          <h3>Technologies Used</h3>
          <p>Express JS</p>
          <p>Google Vision API</p>
        </div>
      </div>
		)
	}
}

export default ProjectHaikugenerator;