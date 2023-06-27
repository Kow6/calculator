//Define Funtions that do the calculator things
function addition(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

//operation funtion
function operate(a, b, operator){
    switch(operator) {
        case 'add':
            return addition(a, b);
            
        
        case 'subtract':
            return subtract(a, b)
            
        
        case 'multiply':
            return multiply(a, b)
            
        
        case 'divide':
            return divide(a, b)
        
    }
}

//Function to add text to content to display area



const equationDisplay = document.querySelector('.equationDisplay');

const numberButtons = document.querySelectorAll('.number');

//Funtion to call to put the number in the display when a button is clicked





const updateDisplay = function (input) {
   
    equationDisplay.textContent = input;
};




numberButtons.forEach(numberButton => {
    
    numberButton.addEventListener('click', () => 
    updateDisplay(numberButton.textContent)
   
  
    );
})






//get the text content of the button
//put that text content in displayEquation w/addtextcontent (copy) => displayEquation.textContent = copy



/* OLD WAY w/ funtion per # function
let a
function clickOne() {
    a = 1
}

function clickTwo() {
    a = 2
}

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => clickOne())

const twoButton = document.querySelector('#two');
oneButton.addEventListener('click', () => clickTwo())
*/







