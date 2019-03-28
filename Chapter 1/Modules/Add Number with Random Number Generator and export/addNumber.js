export default class AddNumber {
  constructor() {
    // let's set the inner text of
    // this element to a smiley
    document.querySelector('p').innerText = randomNumberGenerator();
  }
}

function randomNumberGenerator() {
  return Math.random();
}
