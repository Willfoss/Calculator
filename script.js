let firstNumberDisplay = 0;
let secondNumberDisplay = 0;
let operandDisplay = "";
let FinalResult = 0;

function addition(number1,number2){
    return number1+number2;
}

function multiply(number1, number2) {
    console.log(`final ${number1*number2}`);
    return number1*number2;
}

function subtract(number1, number2) {
    return number1-number2;
}

function divide(number1, number2) {
    return number1/number2;
}

function operate(operator, number1, number2) {
    let output =0;
    if (operator=="+"){
        output = addition(number1, number2);
    } else if (operator=="*"){
        output = multiply(number1, number2);
    } else if (operator=="-"){
        output = subtract(number1, number2);
    } else if (operator=="/") {
        output = divide(number1, number2);
    }              
}