let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '0';

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        if (b === 0) {
        displayValue = "Error: Dividing by zero? Nice try!";
        return;
        }
        return ((a / b).toFixed(2));
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendNumber(number) {
    if (displayValue === 'Error') return;
    if (operator === '') {
    firstNumber += number;
    displayValue = firstNumber;
    } else {
    secondNumber += number;
    displayValue = secondNumber;
    }
    updateDisplay();
}

function setOperator(newOperator) {
    if (displayValue === 'Error') return;
    if (operator !== '' && secondNumber !== '') {
    calculate();
    }
    operator = newOperator;
}

function calculatePercentage() {
    if (operator !== '' && secondNumber !== '') {
      secondNumber = operate('/', secondNumber, '100').toString();
      calculate();
    } else if (firstNumber !== '') {
      firstNumber = operate('/', firstNumber, '100').toString();
      displayValue = firstNumber;
      updateDisplay();
    }
}

function calculate() {
    if (operator === '' || secondNumber === '') return;
    displayValue = operate(operator, firstNumber, secondNumber);
    firstNumber = displayValue;
    operator = '';
    secondNumber = '';
    updateDisplay();
}

function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayValue = '0';
    updateDisplay();
}

function addDecimal() {
    if (displayValue === 'Error') return;
    if (operator === '') {
    if (!firstNumber.includes('.')) {
        firstNumber += '.';
        displayValue = firstNumber;
    }
    } else {
    if (!secondNumber.includes('.')) {
        secondNumber += '.';
        displayValue = secondNumber;
    }
    }
    updateDisplay();
}

function backspace() {
    if (displayValue === 'Error') return;
    if (operator === '') {
    firstNumber = firstNumber.slice(0, -1);
    displayValue = firstNumber || '0';
    } else {
    secondNumber = secondNumber.slice(0, -1);
    displayValue = secondNumber || '0';
    }
    updateDisplay();
}