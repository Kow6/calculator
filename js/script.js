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

let displayContainer =''

let firstValue = ''

let secondValue = ''

let operatorValue = ''

let calculationRun = false

let hasDecimal = false

let deleteBlocked = false

const equationDisplay = document.querySelector('.equationDisplay');

const numberButtons = document.querySelectorAll('.number');

const operationButtons = document.querySelectorAll('.operation');

const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')

const percentButton = document.querySelector('.percent')

const deleteButton = document.querySelector('.delete')





//Function to call to put the number in the display when a button is clicked. Does not set the actual values of the variables.
    
const updateDisplay = function (input) {
    
    if (calculationRun === true){ //a calculation has already been run so entering a new number w/ no operator clear's the display.
       clearPressed()
    }

    //if input is a period and the new variable has period is full do this. will need to clear this variable on clear and operation
  
    
    if(input === '.' && hasDecimal === true){ //decimal check
        return 
    }

    if(input === '.'){
        hasDecimal = true
    }
    
    calculationRun = false
    deleteBlocked = false
    displayContainer = displayContainer + input
    equationDisplay.textContent = displayContainer;
    
    if (operatorValue != ''){ //if the operatorValue is full that means the second value of the equation should be being populated
        secondValue = secondValue + input;
        
    }


};

const operationPressed = function(input){
    if (displayContainer === 'No,No,No' || displayContainer === ''){
        updateDisplay(0)
    }
    if (secondValue != ''){ //code to check if when operator is pressed both values already exist then do the initial calculation
        equalsPressed();
        }

        
if (operatorValue === ''){ //put this in an if statement to not allow operator's to be hit multiple times in a row
    calculationRun = false //resets the calculation run variable to let program know the display does not need to clear on next number input
    firstValue = displayContainer;
    operatorValue = input
    displayContainer = displayContainer + ' ' + input + ' ';
    equationDisplay.textContent = displayContainer;
    hasDecimal = false //clear decimal blocker
}    
    
else{console.log(operatorValue)}
}


const equalsPressed = function(){
    displayContainer = (operate(Number(firstValue), Number(secondValue), operatorValue))
    equationDisplay.textContent = displayContainer;
    
    //set up variables for next operation
    firstValue = displayContainer;
    secondValue = '' 
    operatorValue = ''; 
    calculationRun = true 
    hasDecimal = false 
 
}



const clearPressed  = function()
{displayContainer = '';
firstValue = displayContainer;
secondValue = '';
operatorValue = '';
equationDisplay.textContent = displayContainer;
 } 


const percentPressed = function(){
    if (operatorValue != ''){
        return
    }
    firstValue = displayContainer;
    secondValue = .01
    operatorValue = 'x'
     equalsPressed()
}

const deletePressed = function(){
    
    if (displayContainer.slice(-1) === 'x' 
        || displayContainer.slice(-1) === '-' 
        || displayContainer.slice(-1) === '+' 
        || displayContainer.slice(-1) === '÷')
    {
        deleteBlocked = true
    }
    
    if (deleteBlocked === true){
        console.log(deleteBlocked)
        return
    }

         
    else{
        if(displayContainer.length === 1) {
            displayContainer = '';
            equationDisplay.textContent = displayContainer;
            
        }

        else{
        displayContainer = displayContainer.slice(0, -1);  
        equationDisplay.textContent = displayContainer;
        }
    }

    console.log('1st ' + firstValue + '2nd '+ secondValue + '3rd ' + operatorValue)

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

percentButton.addEventListener('click', () => percentPressed()
 )

 deleteButton.addEventListener('click', () => deletePressed())












