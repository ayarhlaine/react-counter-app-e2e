const { I } = inject();

module.exports = {
  // locators
  counterLabel: '.counter__label',
  increaseButton: '.counter__increaseBtn',
  decreaseButton: '.counter__decreaseBtn',
  // insert your locators and methods here
  seeCounterLabel(labelValue) {
    I.see(labelValue, this.counterLabel);
  },
  clickIncreaseButton() {
    I.say('Click Increase Button');
    I.click(this.increaseButton);
  },
  clickDecreaseButton() {
    I.say('Click Decrease Button');
    I.click(this.decreaseButton);
  },
}
