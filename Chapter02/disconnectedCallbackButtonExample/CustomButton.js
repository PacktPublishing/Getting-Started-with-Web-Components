export default class CustomButton extends HTMLElement {
  constructor() {
    super();

    // Initializing an initial state
    this.timesClicked = 0;

    let template = `
      <button>Click Me</button>
      <span>${this.getTimesClicked()}</span>
    `;

    this.innerHTML = template;
  }

  connectedCallback() {

    // adding event handler to the button
    this.querySelector('button')
      .addEventListener('click', this.handleClick.bind(this));
  }

  disconnectedCallback() {
    console.log('We are inside disconnectedCallback');
    
    // adding event handler to the button
    this.querySelector('button')
      .removeEventListener('click', this.handleClick);
  }

  handleClick() {
    // updating the state
    this.timesClicked++;

    this.querySelector('span')
      .innerText = this.getTimesClicked();
  }

  getTimesClicked() {
    return `Times Clicked: ${this.timesClicked}`;
  }
}
