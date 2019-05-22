import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'student-name',
  styleUrl: 'student-name.css',
  shadow: true
})
export class StudentName {
  @Prop({reflectToAttr: true}) first: string;
  @Prop() last: string;

  private getFullName(): string {
    return `${this.first} ${this.last}`;
  }

  render() {
    return <div>Student Name: {this.getFullName()}</div>;
  }
}
