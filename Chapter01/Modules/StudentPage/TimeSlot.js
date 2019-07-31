export default class TimeSlot extends HTMLElement {
  constructor() {
    super();

    // we simply called another method
    // inside the class
    this.render();
  }

  render() {

    // Get the reference to the template
    let templateReference = document.querySelector('#time-slot-template');

    // Get the content node
    let templateContent = templateReference.content;

    let shadowRoot = this.attachShadow({mode: 'open'});

    // add the template text to the shadow root
    shadowRoot.append(templateContent.cloneNode(true));
  }
}
