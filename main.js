
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

const reset = () => {
  firstNumber = 0
  secondNumber = 0
}

const operate = (button) => {
  firstNumber += parseInt(displayAreaArr.join(''))
  operator = button.dataset.value
  clear()
}

const equals = () => {
  secondNumber += parseInt(displayAreaArr.join(''))

  switch (operator) {
    case "/":
      clear()
      displayArea.innerHTML = (firstNumber / secondNumber)
      reset()
      break;
    case "X":
      clear()
      displayArea.innerHTML = (firstNumber * secondNumber)
      reset()
      break
    case "-":
      clear()
      displayArea.innerHTML = (firstNumber - secondNumber)
      reset()
      break
    case "+":
      clear()
      displayArea.innerHTML = (firstNumber + secondNumber)
      reset()
      break
    default:
      console.log("Something wen't wrong")
      reset()
      break
  }

}


// some notes on adding more functionality later


// Find the index of the operator, store the index -1 and +1 into temp variables
// do the math for that operator, return the number back to the original array
// loop
