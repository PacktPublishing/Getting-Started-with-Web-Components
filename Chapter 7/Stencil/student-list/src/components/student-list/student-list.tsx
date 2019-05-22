import { Component, h } from '@stencil/core';

@Component({
  tag: 'student-list',
  styleUrl: 'student-list.css',
  shadow: true
})

export class StudentList {
  render() {
    return <div>
      <div>Student List is as follows: </div>
      <student-name class="student-list__student" first="John" last="Doe"></student-name>
      <student-name class="student-list__student" first="Tom" last="Hanks"></student-name>
    </div>;
  }
}
