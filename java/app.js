let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (!firstNumber && currentInput !== '') {
    firstNumber = currentInput;
    operator = op;
    currentInput = '';
  }
}

function calculateResult() {
  if (!firstNumber || !operator || !currentInput) return;
  let result;
  const a = parseFloat(firstNumber);
  const b = parseFloat(currentInput);

  switch(operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
  }

  display.value = result;
  currentInput = '';
  firstNumber = '';
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  firstNumber = '';
  operator = '';
  display.value = '';
}

// ✅ New function: remove last digit
function cancelLast() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}
