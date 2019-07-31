export default class StudentAttendanceTable extends HTMLElement {
  constructor() {
    super();

    this.innerText = this.getLoadingText();
  }

  connectedCallback() {
    // let's start our fetch call
    this.getStudentList();
  }

  getStudentList() {
    // lets use fetch api
    // https://developer.mozilla.org/en-US/docs/Web
    // /API/Fetch_API/Using_Fetch
    fetch('./student.json')
    .then(response => {

      // converts response to json
      return response.json();

    })
    .then(jsonData => {
      this.generateTable(jsonData);
    })
    .catch(e => {

      // lets set the error message for
      // the user
      this.innerText = this.getErrorText();

      // lets print out the error
      // message for the devs
      console.log(e);
    });

  }

  generateTable(names) {
    // lets loop through names
    // with the help of map
    let rows = names.map((data, index) => {
      return this.getTableRow(index, data.name);
    });

    // creating the table
    let table = document.createElement('table');
    table.innerHTML = rows.join('');

    // setting the table as html for this component
    this.appendHTMLToShadowDOM(table);
  }

  getTableRow(index, name) {
    let tableRow = `<tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>
          <input type="checkbox" name="${index}-attendance"/>
        </td>
      </tr>`;

    return tableRow;
  }

  appendHTMLToShadowDOM(html) {
    // clearing out old html
    this.innerHTML = '';

    let shadowRoot = this.attachShadow({mode: 'open'});

    // add a text node
    shadowRoot.append(html);
  }

  getLoadingText() {
    return `loading..`;
  }

  getErrorText() {
    return `unable to retrieve student list.`;
  }
}
