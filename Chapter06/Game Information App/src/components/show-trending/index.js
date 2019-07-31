import GifCover from '../gif-cover';

export default class ShowTrending extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    this.key = 'fmuxd9jT3qfcEmMXnXDBGxA4NvWgNA6S';
    this.url = 'https://api.giphy.com/v1/gifs/trending';
    this.showlimit = 20;

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    this.registerOtherComponents();
    this.render();
  }

  registerOtherComponents() {
    if (typeof customElements.get('gif-cover') === 'undefined') {
      customElements.define('gif-cover', GifCover);
    }
  }

  connectedCallback() {
    this.makeApiCall();
  }

  makeApiCall() {
    fetch(`${this.url}?api_key=${this.key}&limit=${this.showlimit}`)
    .then(response => response.json())
    .then((jsonResponse) => {
      this.handleTrendingData(jsonResponse.data);
    });

  }

  handleTrendingData(data) {

    data = data.map((val, index) => {
      return `
        <gif-cover url=${val.images.downsized_medium.url}></gif-cover>
      `;
    }).join('');

    this.shadowObj.querySelector('.show-trending__images')
      .innerHTML = data;
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <div class="show-trending__container">
        <h2 class="show-trending__heading">Trending Gifs</h2>
        <div class="show-trending__images"></div>
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
        .show-trending__heading {
          text-align: center;
        }
        .show-trending__images {
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
