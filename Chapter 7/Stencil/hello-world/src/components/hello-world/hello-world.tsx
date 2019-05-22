import { Component, h } from '@stencil/core';

@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.css',
  shadow: true
})

export class HelloWorld {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}
