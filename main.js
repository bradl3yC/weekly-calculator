
let displayAreaArr = []
let buttons = document.querySelectorAll(".buttons")
let displayArea = document.getElementById('display-area')
let clearButton = document.querySelector('.c-button')

clearButton.addEventListener('click', clear);

buttons.forEach((button) => {
  button.addEventListener("click", () => show(button))
})

function show(button){
  displayAreaArr.push(button.dataset.value)
  displayArea.innerHTML = displayAreaArr.join('')
}

function clear() {
  displayAreaArr = []
  displayArea.innerHTML = ""
}
