export default class CustomClicker extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // Initially, the list is empty
    this._num = 0;

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});
    this.render();
  }

  connectedCallback() {

    // what should happen when the button is clicked
    this.shadowObj.querySelector('.js-button')
      .addEventListener("click", (e) => {
        this.handleClick(e);
      });
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  handleClick() {
    this._num++;
    this.shadowObj.querySelector('.custom-clicker__num').innerHTML = this.getTimesClicked();

    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        num: this._num,
      },
      bubbles: true,
    }));
  }

  getTemplate() {
    return `
      <div class="custom-clicker__container">
        <div class="custom-clicker__num">${this.getTimesClicked()}</div>
        <button class="js-button custom-clicker__button">Click Me</button>
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
        .custom-clicker__button {
          height: 50px;
          width: 200px;
          border-radius: 5px;
          display: inline-block;
          border: 1px solid #cac6c6;
        }
      </style>
    `;
  }

  getTimesClicked() {
    return `${this._num} times clicked.`;
  }
}
