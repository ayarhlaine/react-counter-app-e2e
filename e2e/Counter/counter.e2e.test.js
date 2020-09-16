Feature('Counter');

const { I, counterPage } = inject();

Before((I) => { 
    I.amOnPage('/');
});

Scenario('See initial counter label with 0', (I) => {
    counterPage.seeCounterLabel(0);
});

Scenario('See counter label 1 when click the increase button', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.seeCounterLabel(1);
});

Scenario('See counter label 1 when increase button then click the decrease button', (I) => {
    counterPage.clickIncreaseButton();
    counterPage.clickIncreaseButton();
    counterPage.clickDecreaseButton();
    counterPage.seeCounterLabel(1);
});
