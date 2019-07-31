import HeaderImage from '../web-components/header-image/header-image.js';

Vue.component('main-body', {
  props: ['src', 'alt'],
  template: `
    <p>This is the main body</p>
    <header-image src="{{src}}" alttext="{{alt}}"></header-image>
    `,
  created: function() {
    customElements.define('header-image', HeaderImage);
  }
})
