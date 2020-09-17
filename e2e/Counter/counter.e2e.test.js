Feature('Counter');

const { I, counterPage } = inject();

Before((I) => { 
    I.amOnPage('/');
});

Scenario('See initial counter value with 0', (I) => {
    counterPage.seeCounterLabel(0);
});

Scenario('See counter value 1 when click the increase button', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.seeCounterLabel(1);
});

Scenario('See counter value 1 when increase button then click the decrease button', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickDecreaseButton();
    counterPage.seeCounterLabel(1);
});

Scenario('See counter value 0 when increase button then click the reset button', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickResetButton();
    counterPage.seeCounterLabel(0);
});

Scenario('See counter error "Cannot increase greater than 10!" when the counter value 10', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    I.say('Already clicked increase button 10 times');
    counterPage.clickIncreaseButton();
    counterPage.seeCounterError('Cannot increase greater than 10!');
});

Scenario('See counter error "Cannot decrease less than or equal 0!" when the counter value 0', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.clickDecreaseButton();
    I.say('Already increased 1 times and decreased 1 times');
    counterPage.clickDecreaseButton();
    counterPage.seeCounterError('Cannot decrease less than or equal 0!');
});

Scenario('Hide error message when increase again', (I) => {
    counterPage.clickDecreaseButton();
    I.say('Already decrease & see the error');
    counterPage.clickIncreaseButton();
    counterPage.dontSeeCounterError();
});

Scenario('Hide error message when decrease again', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    I.say('Already clicked increase button 10 times');
    counterPage.clickIncreaseButton();
    I.say('See the error message');
    counterPage.clickDecreaseButton();

    counterPage.dontSeeCounterError();
});
