let firstOperand = 1;
let secondOperand = 1;

function FirstOperand() {
  firstOperand = parseInt(inputFirstOperand.value);
  if (isNaN(firstOperand)) {
    firstOperand = 0;
    inputFirstOperand.placeholder = 0;
  }
}

function SecondOperand() {
  secondOperand = parseInt(inputSecondOperand.value);
  if (isNaN(secondOperand)) {
    secondOperand = 0;
    inputSecondOperand.placeholder = 0;
  }
}

function Operation () {
  let operation = selectOperation.value;
  switch (operation) {
    case ('+'):
      result.innerHTML = firstOperand + secondOperand;
      console.log("Ответ: ", firstOperand + secondOperand);
      break;
    case ('-'):
      result.innerHTML = firstOperand - secondOperand;
      console.log("Ответ: ", firstOperand - secondOperand);
      break;
    case ('*'):
      result.innerHTML = firstOperand * secondOperand;
      console.log("Ответ: ", firstOperand * secondOperand);
      break;
    case ('/'):
      let divideRes = firstOperand / secondOperand;
      switch (divideRes){
        default:
          result.innerHTML = divideRes;
          break;
        case  (Infinity):
          result.innerHTML = "Бесконечность";
          break;
      }
      console.log("Ответ: ", firstOperand / secondOperand);
      break;
  }
}
inputFirstOperand.oninput = inputSecondOperand.oninput = selectOperation.oninput = function Main () {
  FirstOperand();
  SecondOperand();
  Operation();
}