import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './second-element.js';

class HelloWorld extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html`
      <p>Hello World</p>
      <second-element></second-element>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
