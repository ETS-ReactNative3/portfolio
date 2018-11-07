import React, { Component } from 'react';
import ImgHomescreen from './../assets/fanswifi/homescreen.JPG';
import ImgCustomer from './../assets/fanswifi/customer.JPG';
import ImgProduct from './../assets/fanswifi/product.JPG';
import ImgWhitelabeling from './../assets/fanswifi/whitelabeling.JPG';
import ImgWhois from './../assets/fanswifi/whois.JPG';

class ProjectFanswifi extends Component {
  constructor(props, context) {
    super(props, context);
  }

	render() {
		return (
      <div className="project__content">
        <img className="project__image" src={ImgHomescreen} />

        <p>
          Fanswifi is a social, wifi hotspot platform with built in analytics for market insight, allowing their clients to gather valuable insights about their customers.
        </p>

        <p>
          For their exhibition in Singapore, I redesigned and developed their website to clearly articulate business values to their clients.
        </p>

        <img className="project__image" src={ImgWhois} />
        <img className="project__image" src={ImgProduct} />
        <img className="project__image" src={ImgWhitelabeling} />
        <img className="project__image" src={ImgCustomer} />
      </div>
		)
	}
}

export default ProjectFanswifi;