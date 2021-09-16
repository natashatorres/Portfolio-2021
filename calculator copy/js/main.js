//listen for specific (add, sub, divide, multiply click
//get two inputs
//determine which calculation
//create diff formulas to calculate it
//show the answer

document.querySelector('#add').addEventListener('click', add)
document.querySelector('#subtract').addEventListener('click', subtract)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#multiply').addEventListener('click', multiply)


function add() {
    const num1 = document.querySelector('#input1').value 
    const num2 = document.querySelector('#input2').value
    sum = parseInt(num1) + parseInt(num2)

    document.querySelector('#answer').innerText = sum
}

function subtract() {
    const num1 = document.querySelector('#input1').value 
    const num2 = document.querySelector('#input2').value
    sum = parseInt(num1) - parseInt(num2)

    document.querySelector('#answer').innerText = sum
}

function multiply() {
    const num1 = document.querySelector('#input1').value 
    const num2 = document.querySelector('#input2').value
    sum = parseInt(num1) * parseInt(num2)

    document.querySelector('#answer').innerText = sum
}

function divide() {
    const num1 = document.querySelector('#input1').value 
    const num2 = document.querySelector('#input2').value
    sum = parseInt(num1) / parseInt(num2)

    document.querySelector('#answer').innerText = sum
}

