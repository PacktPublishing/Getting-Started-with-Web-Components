export default class SearchBar extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    this.key = 'fmuxd9jT3qfcEmMXnXDBGxA4NvWgNA6S';
    this.searchUrl = 'https://api.giphy.com/v1/gifs/search';
    this.showlimit = 20;

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    this.render();
  }

  connectedCallback() {
    this.shadowObj.querySelector('button')
      .addEventListener('click', (e) => {
        this.handleSearch();
      });
  }

  handleSearch() {
    let value = this.shadowObj.querySelector('input').value;

    fetch(`${this.searchUrl}?api_key=${this.key}&q=${value}&limit=${this.showlimit}`)
    .then(response => response.json())
    .then((jsonResponse) => {
      this.dispatchDataInEvent(jsonResponse.data);
    });

  }

  dispatchDataInEvent(data) {
    this.dispatchEvent(new CustomEvent('search-complete', {
      detail: {
        data: data,
      },
      bubbles: true,
    }));
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <div class="search-bar__container">
        <input type="text"
          class="search-bar__search-field"
          placeholder="Enter Search Text Here">
        <button class="search-bar__button">Search</button>
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
        .search-bar__container {
          display: flex;
        }
        .search-bar__search-field {
          flex: 1;
          margin: 10px;
          height: 50px;
          font-size: 18px;
          padding: 10px;
          border-radius: 5px;
          border: none;
          color: #8e8e8e;
        }
        .search-bar__button {
          margin: 10px;
          width: 200px;
          border: none;
          font-size: 18px;
          color: #5f5f5f;
          cursor: pointer;
        }
        .search-bar__button:hover {
          background: #68f583;
        }
      </style>
    `;
  }
}
