export default class ProfileInfo extends HTMLElement {
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

    this.updateCardBackground();
  }

  getTemplate() {
    return `
      <div class="profile-info__container">
        <img class="profile-info__picture"
          src="${this.getAttribute('picture-src')}" />
        <div class="profile-info__text">
          <div class="profile-info__name">
            ${this.getAttribute('name')}
          </div>
          <div class="profile-info__designation">
            ${this.getAttribute('designation')}
          </div>
          <div class="profile-info__id-number">
            ${this.getAttribute('id-number')}
          </div>
        </div>
      </div>
      ${this.getStyles()}
    `;
  }

  getStyles() {
    return `
      <style>
        :host {
          display: block;
          font-family: sans-serif;
        }
        :host(.profile-info__emp-type-ft) {
          background-color: #7bb57b;
        }
        :host(.profile-info__emp-type-pt) {
          background-color: #ffc107;
        }
        :host(.profile-info__emp-type-ct) {
          background-color: #03a9f4;
        }

        .profile-info__container {
          display: flex;
          color: white;
          flex-direction: column;
          text-align: center;
        }
        .profile-info__picture {
          border-radius: 50%;
          width: 80vw;
          height: 80vw;
          margin: 10px auto;
        }
        .profile-info__text {
          padding: 10px;
          flex: 1;
        }
        .profile-info__name {
          font-size: 28px;
        }
        .profile-info__designation {
          font-size: 22px;
          margin-top: 10px;
        }
        .profile-info__id-number {
          margin-top: 10px;
        }

        @media screen and (min-width: 450px) {
          .profile-info__container {
            flex-direction: row;
            text-align: left;
          }
          .profile-info__picture {
            width: 100px;
            height: 100px;
            margin: 10px;
          }
        }
      </style>
    `;
  }

  updateCardBackground() {
    this.classList.add(`profile-info__emp-type-${this.getAttribute('employee-type')}`);
  }
}
