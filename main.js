let buttons = document.querySelectorAll(".buttons")
let displayArea = document.getElementById('display-area')
let clearButton = document.querySelector('.c-button')
let operatorButtons = document.querySelectorAll('.operator-buttons')
let equalButton = document.querySelector('.equal-button')
let firstNumber = 0.00
let secondNumber = 0.00
let operator = ""

const show = (event) => {
  displayArea.textContent += event.target.dataset.value
}

const clear = (event) => {
  displayArea.textContent = ""
}

const reset = (event) => {
  firstNumber = 0.00
  secondNumber = 0.00
}

const operate = (event) => {
  firstNumber += parseFloat(displayArea.textContent)
  operator = event.target.dataset.value
  clear()
  return firstNumber ? firstNumber : displayArea.textContent = "Error: Please start with a number"
}

const equals = (event) => {
  secondNumber += parseFloat(displayArea.textContent)
  clear()
  displayArea.textContent = (
    () => {
      switch (operator) {
        case "/": return (firstNumber / secondNumber)
        case "X": return (firstNumber * secondNumber)
        case "-": return (firstNumber - secondNumber)
        case "+": return (firstNumber + secondNumber)
        default:  return "ERR"
      }
    }
  )()

  reset()
}

clearButton.addEventListener("click", clear)

buttons.forEach(button => button.addEventListener("click", show))

operatorButtons.forEach(button => button.addEventListener("click", operate))

equalButton.addEventListener("click", equals)
