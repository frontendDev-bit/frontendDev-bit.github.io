const valueInputNode = document.querySelector('.js-value-input');
const valueOutputNode = document.querySelector('.js-value-output');
const inputCurrencySelectorNode = document.querySelector('.js-input-currency-selector');
const outputCurrencySelectorNode = document.querySelector('.js-output-currency-selector');

function getInput() {
    return {
        inputSum: Number(valueInputNode.value),
        inputCurrency: inputCurrencySelectorNode.value,
        outputCurrency: outputCurrencySelectorNode.value
    }
};

function getOutput() {
    return {
        inputSum: Number(valueOutputNode.value),
        inputCurrency: inputCurrencySelectorNode.value,
        outputCurrency: outputCurrencySelectorNode.value
    }
};

function inputResultMaker() {
    const result = convert(getInput());

    valueOutputNode.value = result;
};

function outputResultMaker() {
    const result = convert(getOutput());

    valueInputNode.value = result;
};

valueInputNode.addEventListener('input', inputResultMaker);
valueOutputNode.addEventListener('input', outputResultMaker);

function inputCurrencyMaker() {
    inputResultMaker();
};

inputCurrencySelectorNode.addEventListener('change', inputCurrencyMaker)
outputCurrencySelectorNode.addEventListener('change', inputCurrencyMaker)
