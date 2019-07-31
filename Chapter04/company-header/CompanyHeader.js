export default class CompanyHeader extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    // Then lets render the template
    this.render();
  }

  render() {

    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <a href="/">
        <img class="icon" src="${this.getAttribute('icon')}" />
      </a>
      <h1 class="heading">${this.getAttribute('page-name')}</h1>
      <div>
        <slot name="other-links"></slot>
      </div>
      ${this.getStyle()}
    `;
  }

  getStyle() {
    return `
      <style>
        :host {
          display: flex;
          background: #44afdc;
          align-items: center;
          padding: 0 10px;
        }
        .icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .heading {
          flex: 1;
          color: white;
          padding-left: 20px;
        }
      </style>
    `;
  }
}
