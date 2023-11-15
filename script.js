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

function firstNumberDisplayConcat(buttonNumber){
    if (operandDisplay=="") {
        let currentDisplay = firstNumberDisplay.toString();
            if (currentDisplay=="0"){
                currentDisplay="";
            }
            firstNumberDisplay = +(currentDisplay+buttonNumber);
            console.log(`first ${firstNumberDisplay}`);
            updatePrimaryDisplay(firstNumberDisplay);
            return firstNumberDisplay;
        }
}

function secondNumberDisplayConcat(buttonNumber){
    if (operandDisplay!="") {
        let currentDisplay = secondNumberDisplay.toString();
            if (currentDisplay=="0"){
                currentDisplay="";
            }
            secondNumberDisplay = +(currentDisplay+buttonNumber);
            console.log(`second ${secondNumberDisplay}`);
            updatePrimaryDisplay(secondNumberDisplay)
            return secondNumberDisplay;
    } 
}

function OperandFeedbackToDisplay(){
    const operandButtons = document.querySelectorAll(".operand");
    const operandButtonsArray = Array.from(operandButtons);
    for (let i=0; i<operandButtonsArray.length; i++) {
        operandButtonsArray[i].addEventListener("click", (e) => {
            let operand = e.target;
            operandDisplay=operand.id;
            console.log(operand.id);
            updateSecondaryDisplay(operandDisplay);
            return operand.id;
        });
    }
}

function secondNumberFeedbackToDisplay(){
        const numberButtons = (document.querySelectorAll(".number"));
        const numberButtonsArray = Array.from(numberButtons);
        for (let i=0; i<numberButtonsArray.length; i++) {
            numberButtonsArray[i].addEventListener("click", (e) => {
            let number = e.target;
            secondNumberDisplayConcat(number.innerText);
            });
        }
}

function firstNumberFeedbackToDisplay(){ 
    const numberButtons = (document.querySelectorAll(".number"));
    const numberButtonsArray = Array.from(numberButtons);
    for (let i=0; i<numberButtonsArray.length; i++) {
        numberButtonsArray[i].addEventListener("click", (e) => {
        let number = e.target;
        return firstNumberDisplayConcat(number.innerText);
        });
    }
}

function equals(){
    const equals = document.querySelector("#equals");
        equals.addEventListener("click", (e) => operate(operandDisplay, firstNumberDisplay, secondNumberDisplay));
}