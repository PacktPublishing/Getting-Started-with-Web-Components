export default class CompanyHeader extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // Lets provide a default icon
    this.icon = 'newicon.jpeg';

    // Then lets render the template
    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  // Lets get icon and page-name from attributes
  static get observedAttributes() {
    return ['icon', 'page-name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'icon') {
      this.icon = newValue;
    }

    if (name == 'page-name') {
      this.pageName = newValue;
    }

    // Lets re-render after getting the new attributes
    this.render();
  }

  getTemplate() {
    return `
      <a href="/">
        <img class="icon" src="${this.icon}" />
      </a>
      <h1 class="heading">${this.pageName}</h1>
      <div>
        <a class="header-links" href="/home.html">Home</a>
        <a class="header-links" href="/aboutus.html">About Us</a>
      </div>
    `;
  }
}
