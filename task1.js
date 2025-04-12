var firstOperand = 1;
var secondOperand = 2;
function FirstOperand() {
  firstOperand = parseInt(prompt("Введите первое число", 1));
  if (!isNaN(firstOperand)) {
    SecondOperand();
  } else{
    alert('Ошибка. Введите число.');
    FirstOperand();
  }
}
function SecondOperand() {
  secondOperand = parseInt(prompt("Введите второе число", 1));
  if (!isNaN(secondOperand)) {
    Operation();
  } else {
    alert('Ошибка. Введите число.');
    SecondOperand();
  }
}
FirstOperand();

function Operation () {
  let operation = prompt("Выберите операцию +,-,*,/", '+');
  switch (operation) {
    case ('+'):
      alert("Ответ: " + (firstOperand + secondOperand));
      console.log("Ответ: ", firstOperand + secondOperand);
      break;
    case ('-'):
      alert("Ответ: " + (firstOperand - secondOperand));
      console.log("Ответ: ", firstOperand - secondOperand);
      break;
    case ('*'):
      alert("Ответ: " + (firstOperand * secondOperand));
      console.log("Ответ: ", firstOperand * secondOperand);
      break;
    case ('/'):
      alert("Ответ: " + firstOperand / secondOperand);
      console.log("Ответ: ", firstOperand / secondOperand);
      break;
    default:
      alert("Вы не вырбрали операцию");
      window.location.reload();
  }
  FirstOperand();
}
