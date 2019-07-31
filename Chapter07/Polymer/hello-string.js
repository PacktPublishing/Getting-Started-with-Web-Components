import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HelloString extends PolymerElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: 'No Name Provided Yet'
      }
    };
  }

  static get template() {
    return html`
      <p>Hello, [[name]]</p>
    `;
  }
}

customElements.define('hello-string', HelloString);
