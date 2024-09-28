let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function calculate() {
    if (firstOperand === '' || currentInput === '') return;
    let result;
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    operator = '';
    firstOperand = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    firstOperand = '';
}

function updateDisplay() {
    display.value = currentInput;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
