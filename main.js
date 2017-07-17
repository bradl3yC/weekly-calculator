
let displayAreaArr = []
let buttons = document.querySelectorAll(".buttons")
let displayArea = document.getElementById('display-area')
let clearButton = document.querySelector('.c-button')
let operatorButtons = document.querySelectorAll('.operator-buttons')
let equalButton = document.querySelector('.equal-button')
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

equalButton.addEventListener("click", () => equals())

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

const equals = (operator) => {
  secondNumber += parseInt(displayAreaArr.join(''))
  console.log(operator)

  switch (operator) {
    case operator === "/":
      clear()
      displayArea.innerHTML = (firstNumber / secondNumber)
      break;
    case operator === "*":
      clear()
      displayArea.innerHTML = (firstNumber * secondNumber)
      break
    case operator === "-":
      clear()
      displayArea.innerHTML = (firstNumber - secondNumber)
      break
    case operator === "+":
      clear()
      displayArea.innerHTML = (firstNumber + secondNumber)
      break
  }

}


// some notes on adding more functionality later


// Find the index of the operator, store the index -1 and +1 into temp variables
// do the math for that operator, return the number back to the original array
// loop
