//global variables for results. note numbers start off as strings to help will appendage. converted to number during operate function.
let firstNumberDisplay = "";
let secondNumberDisplay = "";
let operandDisplay = "";
let finalResultDisplay = "";

//DOM events
const numberButtons = document.querySelectorAll(".number");
const operandButtons = document.querySelectorAll(".operand");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const primaryDisplay = document.querySelector("#primary-display");
const secondaryDisplay = document.querySelector("#secondary-display");
const deleteButton= document.querySelector("#delete");

numberButtons.forEach((button) => 
    button.addEventListener("click", () => {
    if (operandDisplay=="") {
        firstNumberDisplayConcat(button.innerText);
    } else {
        secondNumberDisplayConcat(button.innerText);
    }
}));

operandButtons.forEach((button) => button.addEventListener("click", () => operand(button.id)));
equalsButton.addEventListener("click", () => operate(operandDisplay, firstNumberDisplay, secondNumberDisplay));
clearButton.addEventListener("click", () => clear());
deleteButton.addEventListener("click", () => deleteLastNumber());

//calculator functions
function addition(number1,number2){
    return number1+number2;
}

function multiply(number1, number2) {          
    return number1*number2;
}

function subtract(number1, number2) {
    return number1-number2;
}

function divide(number1, number2) {
    return number1/number2;
}

//changes to global variables allow continuous operation of calculator (i.e. X + Y / Z * ....)
function operate(operator, number1=1, number2=1) {
    let output =0;
    if (operator=="+"){
        output = addition(+number1, +number2);
    } else if (operator=="*"){
        output = multiply(+number1, +number2);
    } else if (operator=="-"){
        output = subtract(+number1, +number2);
    } else if (operator=="/") {
        output = divide(+number1, +number2);
    }
    updatePrimaryDisplay(output);
    finalResultDisplay = output.toString();
    updateSecondaryDisplay();
    secondNumberDisplay = "";
    operandDisplay="";
    firstNumberDisplay = output.toString();                
}

function firstNumberDisplayConcat(buttonNumber){
    if (finalResultDisplay!=""){
        firstNumberDisplay="";
    }
    let currentDisplay = firstNumberDisplay.toString();
    firstNumberDisplay = (currentDisplay+buttonNumber);
    updatePrimaryDisplay(firstNumberDisplay);
}

function secondNumberDisplayConcat(buttonNumber){
    let currentDisplay = secondNumberDisplay.toString();
    secondNumberDisplay = (currentDisplay+buttonNumber);
    
    updatePrimaryDisplay(secondNumberDisplay);
}

//required to handle the case of both: 1) automatically updating the total while chaining operands and 2) the single case of pressing equals.
function operand(operand){
    if (firstNumberDisplay!=0 && secondNumberDisplay!=0){
        operate(operandDisplay, firstNumberDisplay, secondNumberDisplay);
        operandDisplay=operand;
        updateSecondaryDisplay()
    } else {
        operandDisplay=operand;
        updateSecondaryDisplay();
    }
}

function clear(){
    firstNumberDisplay = "";
    secondNumberDisplay = "";
    finalResultDisplay = 0;
    operandDisplay="";
    updatePrimaryDisplay(firstNumberDisplay);
    updateSecondaryDisplay(operandDisplay);
}

function updatePrimaryDisplay(text){
    primaryDisplay.innerText = text;
}

function deleteLastNumber(){
    console.log(firstNumberDisplay);
    if (operandDisplay=="") {
        firstNumberDisplay=firstNumberDisplay.slice(0,-1);
        updatePrimaryDisplay(firstNumberDisplay);
    } else {
        secondNumberDisplay=secondNumberDisplay.slice(0,-1);
        updatePrimaryDisplay(secondNumberDisplay);
    }
}

function updateSecondaryDisplay(){
    let text= operandDisplay
    if ( text== "/") {
        text = "÷";
    } else if (text == "*"){
        text = "x";
    } else {
        text=text;
    }
    secondaryDisplay.innerText = `${firstNumberDisplay} ${text} ${secondNumberDisplay}`;
}