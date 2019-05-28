export default class HeaderImage extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();
    this.src = '';
    this.alt = '';

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    // Then lets render the template
    this.render();
  }

  static get observedAttributes() {
    return ['src', 'alttext'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'src') {
      this.src = newValue;
      this.render();
    }
    if (name == 'alttext') {
      this.alt = newValue;
      this.render();
    }


  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <img src="${this.src}"
        alt="${this.alt}"/>
      ${this.handleErrors()}
      <style>
        img {
          width: 400px;;
        }
      </style>
    `;
  }

  handleErrors() {
    if(!this.alt) {
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
