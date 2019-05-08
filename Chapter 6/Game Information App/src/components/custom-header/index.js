

export default class CustomHeader extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    this.render();
  }

  connectedCallback() {
    this.shadowObj.querySelectorAll('.custom-header__li a')
      .forEach((aTag, index) => {
        aTag.addEventListener('click', (e) => {
          this.handleClick(index);
        });
      });
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  handleClick(index) {
    this.dispatchEvent(new CustomEvent('custom-header-clicked', {
      detail: {
        data: index + 1,
      },
      bubbles: true,
    }));
  }

  getTemplate() {
    return `
      <ul class="custom-header__ul">
        <li class="custom-header__li">
          <a href="#search">Search</a>
        </li>
        <li class="custom-header__li">
          <a href="#trending">Trending</a>
        </li>
        <li class="custom-header__li">
          <a href="#random">Random</a>
        </li>
      </ul>
      ${this.getStyle()}
    `;
  }

  getStyle() {
    return `
      <style>
        :host {
          display: block;
          top: 0;
          background: #46cff3;
          position: sticky;
          height: 75px;
        }
        .custom-header__ul {
          display: flex;
          margin: 0;
          justify-content: flex-end;
          height: 100%;

        }
        .custom-header__li {
          align-self: center;
          list-style-type: none;
          margin-right: 25px;
        }

        .custom-header__li a {
          text-decoration: none;
          color: white;
          font-size: 25px;
        }
      </style>
    `;
  }
}
