import SearchBar from '../search-bar';
import GifCover from '../gif-cover';

export default class SearchContainer extends HTMLElement {
constructor() {

  // We are not even going to touch this.
  super();

  // lets create our shadow root
  this.shadowObj = this.attachShadow({mode: 'open'});

  this.registerOtherComponents();
  this.render();
}

  connectedCallback() {
    this.shadowObj.querySelector('search-bar')
      .addEventListener('search-complete', (e) => {
        this.handleSearchData(e.detail.data);
      });
  }

  handleSearchData(data) {
    data = data.map((val, index) => {
      return `
        <gif-cover url=${val.images.downsized_medium.url}></gif-cover>
      `;
    }).join('');
    this.shadowObj.querySelector('.search-container__images')
      .innerHTML = data;
  }



  registerOtherComponents() {
    if (typeof customElements.get('search-bar') === 'undefined') {
      customElements.define('search-bar', SearchBar);
    }

    if (typeof customElements.get('gif-cover') === 'undefined') {
      customElements.define('gif-cover', GifCover);
    }
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <div class="search-container__container">
        <search-bar></search-bar>
        <div class="search-container__images">
          <p>Try Searching for a tag in the search bar</p>
        </div>
      </div>
      ${this.getStyle()}
    `;
  }

  getStyle() {
    return `
      <style>
        :host {
          display: block;
        }
        .search-container__container {
          display: block;
          padding: 10px;
        }
        .search-container__images {
          display: flex;
          padding: 10px;
          flex-wrap: wrap;
          box-sizing: border-box;
          justify-content: space-evenly;
        }
        gif-cover {
          flex-basis: 10%;
          padding: 5px;
        }
      </style>
    `;
  }
}
