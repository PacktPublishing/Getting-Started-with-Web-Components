import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class SecondElement extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html`
      <style>
        p {
          color: red;
        }
      </style>
      <p>This is the second element</p>
    `;
  }
}

customElements.define('second-element', SecondElement);
