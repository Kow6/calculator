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

//function
let a
function clickOne() {
    a = 1
}

function clickTwo() {
    a = 2
}

//add event listeners to buttons to store values into the variables when pushed

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => clickOne())

const twoButton = document.querySelector('#two');
oneButton.addEventListener('click', () => clickTwo())



