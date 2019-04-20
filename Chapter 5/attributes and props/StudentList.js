export default class StudentList extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // Initially, the list is empty
    this._list = [];

    // lets create our shadow root
    this.shadowObj = this.attachShadow({mode: 'open'});
    this.render();
  }

  connectedCallback() {

    // what should happen when the button is clicked
    this.shadowObj.querySelector('.js-addButton')
      .addEventListener("click", (e) => {
        this.handleAdd(e);
      });
  }

  set students (value) {

    this._list = value;
    this.renderList();
  }

  get students (){
    return this._list;
  }

  render() {
    this.shadowObj.innerHTML = this.getTemplate();
  }

  renderList() {
    this.shadowObj.querySelector('.student-list__student-list').innerHTML
      = this.getStudents();
  }

  handleAdd() {
    let value = this.shadowObj.querySelector('input[name=student-name]').value;
    this._list.push(value);
    this.setAttribute("students", this._list);
    this.renderList();
  }

  getTemplate() {
    return `
      <div class="student-list__form">
        <input type="text" name="student-name"
          class="student-list__input"
          placeholder="Enter Student Name here"/>
        <button class="js-addButton student-list__add-button">Add Student</button>
      </div>
      <div class="student-list__student-container">
        <div class="student-list__student-container-heading">Student List</div>
        <div class="student-list__student-list">
          ${this.getStudents()}
        </div>
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
        .student-list__form {
          display: flex;
          align-items: center;
        }
        .student-list__input {
          height: 44px;
          margin: 0 25px;
          width: 300px;
          border-radius: 10px;
          border-width: 1px;
          font-size: 18px;
          padding: 0 20px;
        }
        .student-list__add-button {
          height: 50px;
          width: 200px;
          border-radius: 5px;
          display: inline-block;
          border: 1px solid #cac6c6;
        }
        .student-list__student-container {
          margin-top: 50px;
          border-top: 1px solid black;
          padding-top: 50px;
          font-size: 25px;
        }
        .student-list__student-container-heading {
          margin-bottom: 20px;
        }
        .student-list__student {
          padding: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #bfbfbf;
        }
      </style>
    `;
  }

  getStudents() {
    return this._list.map((item, num) => {
      return `<div class="student-list__student">${num + 1}. ${item}</div>`;
    }).join('');
  }
}
