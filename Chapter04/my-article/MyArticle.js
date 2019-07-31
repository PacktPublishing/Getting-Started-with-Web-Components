export default class MyArticle extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});

    // Then lets render the template
    this.render();
  }

  render() {

    this.shadowObj.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <h1 class="article-heading">
        <slot name="article-heading"></slot>
      </h1>
      <div class="article-author">
        <slot name="author"></slot>
      </div>
      <div class="article-content">
        <slot name="article"></slot>
      </div>
      ${this.getStyle()}
    `;
  }

  getStyle() {
    return `
      <style>
        :host {
          display: block;
          background: #e4f4fb;
          padding: 10px;
        }
        .article-heading {
          text-align: right;
          text-transform: lowercase;
          font-size: 50px;
          margin-bottom: 0;
        }
        .article-author {
          text-align: right;
          text-transform: lowercase;
          font-style: italic;
          font-size: 22px;
          padding-bottom: 20px;
          border-bottom: 2px solid black;
        }
        .article-content {
          line-height: 1.5;
          margin-top: 20px;
        }
        .article-content::first-letter {
          font-size: 50px;
          line-height: 0;
        }
      </style>
    `;
  }
}
