import React, { Component } from 'react';
import HeaderImage from '../web-components/header-image/header-image.js';

export default class MainBody extends Component {

  constructor() {
    super();
    this.state = {
      src: 'https://www.freewebheaders.com/wordpress/wp-content/gallery/clouds-sky/clouds-sky-header-2069-1024x300.jpg',
      altText: 'Blue Clouds'
    }
  }

  componentDidMount() {
    customElements.define('header-image', HeaderImage);
  }
  render() {
    return (
      <div>
        <p>This is the main body</p>
        <header-image alttext={this.state.altText}
          src={this.state.src}>
        </header-image>
      </div>
    );
  }
}
