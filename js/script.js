//Define Funtions that do the calculator things
function addition(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

//operation funtion
function operate(a, b, operator){
    
    if(operator === '÷' && b === 0){
        return 'No,No,No'
    }

    switch(operator) {
        case '+':
            return parseFloat(addition(a, b).toFixed(5))
            
        
        case '-':
            return parseFloat(subtract(a, b).toFixed(5))
            
        
        case 'x':
            return parseFloat(multiply(a, b).toFixed(5))
            
        
        case '÷':
            return parseFloat(divide(a, b).toFixed(5))
        
    }
}



//setting the variables

let firstValue = ''

let secondValue = ''

let operatorValue = ''

let displayContainer =''

let calculationRun = ''

//new code to test

let hasDecimal = false

const equationDisplay = document.querySelector('.equationDisplay');

const numberButtons = document.querySelectorAll('.number');

const operationButtons = document.querySelectorAll('.operation');

const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')





//Function to call to put the number in the display when a button is clicked


    
const updateDisplay = function (input) {
    
    if (calculationRun === 'yes'){ //a calculation has already been run so entering a new number w/ no operator clear's the display.
       clearPressed()
    }

    //if input is a period and the new variable has period is full do this. will need to clear this variable on clear and operation
  
    
    if(input === '.' && hasDecimal === true){
        return 
    }

    if(input === '.'){
        hasDecimal = true
    }

    //new code to test ^^

    calculationRun = ''
    displayContainer = displayContainer + input
    equationDisplay.textContent = displayContainer;
    
    if (operatorValue != ''){ //if the operatorValue is full that means the second value of the equation should be being populated
        secondValue = secondValue + input;
        
    }
console.log(hasDecimal)

};

const operationPressed = function(input){
    if (displayContainer === 'No,No,No' || displayContainer === ''){
        updateDisplay(0)
    }
    if (secondValue != ''){ //code to check if when operator is pressed both values already exist then do the initial calculation
        equalsPressed();
        }

        
if (operatorValue === ''){ //put this in an if statement to not allow operator's to be hit multiple times in a row
    calculationRun = '' //resets the calculation run variable to let program know the display does not need to clear on next number input
    firstValue = displayContainer;
    operatorValue = input
    displayContainer = displayContainer + ' ' + input + ' ';
    equationDisplay.textContent = displayContainer;
    hasDecimal = false //new code to test
}    
    
else{console.log(operatorValue)}
}


const equalsPressed = function(){
    displayContainer = (operate(Number(firstValue), Number(secondValue), operatorValue))
    equationDisplay.textContent = displayContainer;
    firstValue = displayContainer;
    secondValue = ''
    operatorValue = '';
    calculationRun = 'yes'
    hasDecimal = false

    
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









