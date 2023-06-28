//Define Funtions that do the calculator things
function addition(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

//operation funtion
function operate(a, b, operator){
    switch(operator) {
        case '+':
            return addition(a, b).toFixed(5)
            
        
        case '-':
            return subtract(a, b).toFixed(5)
            
        
        case 'x':
            return multiply(a, b).toFixed(5)
            
        
        case '÷':
            return divide(a, b).toFixed(5)
        
    }
}



//setting the variables

let firstValue = ''

let secondValue = ''

let operatorValue = ''

let displayContainer =''

let calculationRun = ''

const equationDisplay = document.querySelector('.equationDisplay');

const numberButtons = document.querySelectorAll('.number');

const operationButtons = document.querySelectorAll('.operation');

const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')





//Function to call to put the number in the display when a button is clicked


    
const updateDisplay = function (input) {
    
    if (calculationRun === 'yes'){
        console.log(calculationRun)
        clearPressed()
    }
    calculationRun = ''
    displayContainer = displayContainer + input
    equationDisplay.textContent = displayContainer;
    if (operatorValue != ''){
        secondValue = secondValue + input;
        
    }

};

const operationPressed = function(input){
    if (secondValue != ''){ //code to check if when operator is pressed both values already exist then do the initial calculation
        console.log('butt')
        equalsPressed();
        
    }
    calculationRun = ''
    firstValue = displayContainer;
    operatorValue = input
    displayContainer = displayContainer + ' ' + input + ' ';
    equationDisplay.textContent = displayContainer;


}


const equalsPressed = function(){
    displayContainer = (operate(Number(firstValue), Number(secondValue), operatorValue))
    equationDisplay.textContent = displayContainer;
    firstValue = displayContainer;
    secondValue = ''
    operatorValue -'';
    calculationRun = 'yes'

    
}

const clearPressed  = function()
{displayContainer = '';
firstValue = displayContainer;
secondValue = '';
operatorValue = '';
equationDisplay.textContent = displayContainer;
 } 



//Adding the event listener to the the number buttons to put them in the display

numberButtons.forEach(numberButton => {
    
    numberButton.addEventListener('click', () => 
    updateDisplay(numberButton.textContent)
    );
})

//Adding event listener to the operation buttons
operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', () => operationPressed(operationButton.textContent))
})

equalsButton.addEventListener('click', () => equalsPressed())

clearButton.addEventListener('click', () => clearPressed())


console.log(calculationRun)









