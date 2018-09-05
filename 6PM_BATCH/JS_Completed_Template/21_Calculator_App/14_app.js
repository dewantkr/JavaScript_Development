// Get the HTML Elements
var firstNumber = document.querySelector('#firstNumber');
var secondNumber = document.querySelector('#secondNumber');
var operator = document.querySelector('#operator');
var equalsButton = document.querySelector('#equals-button');
var resultButton = document.querySelector('#result-button');
var plusButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var divButton = document.querySelector('#divide-button');
var mulButton = document.querySelector('#multiply-button');
var clearButton = document.querySelector('#clear-button');

// Event Listener for Plus Button
plusButton.addEventListener('click',function() {
    var symbol = plusButton.textContent.trim();
    operator.textContent = symbol;
});

// Event Listener for Minus Button
minusButton.addEventListener('click',function() {
    var symbol = minusButton.textContent.trim();
    operator.textContent = symbol;
});

// Event Listener for Div Button
divButton.addEventListener('click',function() {
    var symbol = divButton.textContent.trim();
    operator.textContent = symbol;
});

// Event Listener for Multiply Button
mulButton.addEventListener('click',function() {
    var symbol = mulButton.textContent.trim();
    operator.textContent = symbol;
});

// Equals Button Logic
equalsButton.addEventListener('click',function() {
    var num1 = firstNumber.value;
    var num2 = secondNumber.value;
    var opr = operator.textContent.trim();
    var result = 0;

    if(num1 !== '' && num2 !== ''){
        var fNumber = parseFloat(num1);
        var sNumber = parseFloat(num2);
        switch(opr){
            case '+':
                result = fNumber + sNumber;
                break;
            case '-':
                result = fNumber - sNumber;
                break;
            case '/':
                result = fNumber / sNumber;
                break;
            case '*':
                result = fNumber * sNumber;
                break;
            default:
                result = 'RESULT';
                break;
        }
        resultButton.textContent = result;
    }
    else{
        resultButton.textContent = 'RESULT';
    }
});

// Clear Button
clearButton.addEventListener('click',function() {
    firstNumber.value = '';
    secondNumber.value = '';
    operator.textContent = '+';
    resultButton.textContent = 'RESULT';
});