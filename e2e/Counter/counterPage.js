const { I } = inject();

module.exports = {
  // locators
  counterLabel: '.counter__label',
  counterError: '.counter__error',
  increaseButton: '.counter__increaseBtn',
  decreaseButton: '.counter__decreaseBtn',
  resetButton: '.counter__resetBtn',
  // insert your locators and methods here
  seeCounterLabel(labelValue) {
    I.see(labelValue, this.counterLabel);
  },
  seeCounterError(error) {
    I.see(error, this.counterError);
  },
  dontSeeCounterError() {
    I.dontSeeElement(this.counterError);
  },
  clickIncreaseButton() {
    I.say('Click Increase Button');
    I.click(this.increaseButton);
  },
  clickDecreaseButton() {
    I.say('Click Decrease Button');
    I.click(this.decreaseButton);
  },
  clickResetButton() {
    I.say('Click Reset Button');
    I.click(this.resetButton);
  },
}
