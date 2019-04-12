export default class HeaderImage extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();
    this.altText = '';

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
      <img src="${this.getAttribute('src')}"
        alt="${this.getAttribute('alt')}"/>
      ${this.handleErrors()}
      <style>
        img {
          width: 400px;;
        }
      </style>
    `;
  }

  handleErrors() {
    if(!this.getAttribute('alt')) {
      return `
        <div class="error">Missing Alt Text</div>
        <style>
          .error {
            color: red;
          }
        </style>
      `;
    }

    return ``;
  }
}
