import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './hello-string.js';

class StudentName extends PolymerElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: 'John Doe'
      }
    };
  }

  static get template() {
    return html`
      <hello-string name="[[name]]"></hello-string>
    `;
  }
}

customElements.define('student-name', StudentName);
