
let displayAreaArr = []
let buttons = document.querySelectorAll(".buttons")
let displayArea = document.getElementById('display-area')
let clearButton = document.querySelector('.c-button')
let operatorButtons = document.querySelectorAll('.operator-buttons')
let firstNumber = 0 //storage for first number before the operator button press event
let secondNumber = 0 // storage for second number before equal button press
let operator = ""

clearButton.addEventListener('click', () => clear());

buttons.forEach((button) => {
  button.addEventListener("click", () => show(button))
})

operatorButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => operate(opButton))
})

const show = (button) => {
  displayAreaArr.push(button.dataset.value)
  displayArea.innerHTML = displayAreaArr.join('')
}

const clear = () => {
  displayAreaArr = []
  displayArea.innerHTML = ""
}

const operate = (button) => {
  firstNumber += parseInt(displayAreaArr.join(''))
  operator = button.dataset.value
  clear()
}

// const findOperator = (operator) => {
//   return operator === "+" || operator === "-" || operator === "*" || operator === "/"
// }



// Find the index of the operator, store the index -1 and +1 into temp variables
// do the math for that operator, return the number back to the original array
// loop
// Stop displaying operator on main screen - operator calls function to store
// currently input number with the next number until = is pressed
// don't allow operator 1st, last or repeating

// Enter Numbers > Press operator > Enter new number > press equals
// operator press will store a number in a temp variable and set the display to empty
// equal sign will store the current value into 2nd temp variable and do the equation based on the operator
// switch case on operator to determine the math returned
