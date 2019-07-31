export default class RevampedParagraph extends HTMLElement {
  constructor() {
    super();

    // temaplte ref and content
    let templateReference = document.querySelector('#revamped-paragraph-template');
    let template = templateReference.content;

    // adding html from template
    this.append(template.cloneNode(true));
  }
}
