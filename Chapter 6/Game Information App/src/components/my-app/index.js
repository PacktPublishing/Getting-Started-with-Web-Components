import CustomHeader from '../custom-header';
import SearchContainer from '../search-container';
import ShowTrending from '../show-trending';
import ShowRandom from '../show-random';

export default class MyApp extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // to show what section
    this.shownSection = 1;

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    // lets register other elements
    this.registerOtherComponents();

    this.handleURL();
  }

  registerOtherComponents() {
    if (typeof customElements.get('custom-header') === 'undefined') {
      customElements.define('custom-header', CustomHeader);
    }

    if (typeof customElements.get('search-container') === 'undefined') {
      customElements.define('search-container', SearchContainer);
    }

    if (typeof customElements.get('show-trending') === 'undefined') {
      customElements.define('show-trending', ShowTrending);
    }

    if (typeof customElements.get('show-random') === 'undefined') {
      customElements.define('show-random', ShowRandom);
    }
  }

  connectedCallback() {
    this.shadowObj.querySelector('custom-header')
      .addEventListener('custom-header-clicked', (e) => {
        let newShownSection = e.detail.data;
        if(newShownSection !== this.shownSection) {
          this.shownSection = newShownSection;
          this.reRenderAppSection();
        }
      })
  }

  reRenderAppSection() {
    this.shadowObj.querySelector('.app-section').innerHTML = this.getSection(this.shownSection);
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <custom-header></custom-header>
      <div class="app-section">
        ${this.getSection(this.shownSection)}
      </div>
      ${this.getStyle()}
    `;
  }

  getSection(section) {
    switch(section) {
      case 1:
        return `
          <search-container></search-container>
        `;
      case 2:
        return `
          <show-trending></show-trending>
        `;
      case 3:
        return `
          <show-random></show-random>
        `;
    }
  }

  getStyle() {
    return `
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }

  handleURL() {
    switch(window.location.hash) {
      case '#search':
        this.shownSection = 1;
        break;
      case '#trending':
        this.shownSection = 2;
        break;
      case '#random':
        this.shownSection = 3;
        break;
      default:
        this.shownSection = 1;
        break;
    }

    this.render();
  }
}
