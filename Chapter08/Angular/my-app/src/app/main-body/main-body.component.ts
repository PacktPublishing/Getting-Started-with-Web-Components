import { Component, OnInit } from '@angular/core';
import HeaderImage from '../web-components/header-image/header-image.js';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  src: string ;
  alttext: string;

  constructor() {
    this.src = 'https://www.freewebheaders.com/wordpress/wp-content/gallery/clouds-sky/clouds-sky-header-2069-1024x300.jpg';
    this.alttext = 'Blue Clouds';
  }

  ngOnInit() {
    customElements.define('header-image', HeaderImage);
  }

}
