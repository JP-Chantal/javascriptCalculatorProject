let firstNumber
let secondNumber
let stage = 0
let operation
let calculate = 0


let firstNumArray = []
let secondNumArray = []



let display = document.getElementById("display")

function getNumber(num) {
  if(stage === 0 || stage === 1) {
    firstNumArray.push(num)
    stage === 1
    firstNumber = Number(firstNumArray.join("")) 
    display.value = firstNumber
   
  }else if(stage === 2) {
    secondNumArray.push(num)
    secondNumber = Number(secondNumArray.join("")) 
    display.value = secondNumber
  }
}


function getOperator(operatorBtn) {
  stage = 2
  operation = operatorBtn 
}


 function clearDisplay() {
  display.value = 0
  firstNumber = null
  secondNumber = null
  stage = 0
  operation = null
  calculate = 0
  firstNumArray = []
  secondNumArray = []
}


function deleteDisplay() {
  display.value = display.value.slice(0, -1);
  firstNumber = null
  secondNumber = null
  stage = 0
  operation = null
  calculate = 0
  firstNumArray = []
  secondNumArray = []
}


const calculateDisplay = () => {
  if(operation === "+") {
    calculate = firstNumber + secondNumber
    display.value = calculate

  }else if(operation === "-") {
    calculate = firstNumber - secondNumber
    display.value = calculate

  }else if(operation === "*") {
    calculate = firstNumber * secondNumber
    display.value = calculate

  }  if(operation === "/") {
    calculate = firstNumber / secondNumber
    display.value = calculate

}if(operation === "%") {
  calculate = firstNumber % secondNumber
  display.value = calculate
}

firstNumber = null
  secondNumber = null
  stage = 0
  operation = null
  calculate = 0
  firstNumArray = []
  secondNumArray = []
}





