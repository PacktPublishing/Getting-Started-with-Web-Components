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
      .addEventListener('click', (e) => {
        this.handleClick(e);
      });
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
