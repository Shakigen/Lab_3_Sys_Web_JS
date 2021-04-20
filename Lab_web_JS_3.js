let numFirst = +prompt('Enter first number','');
    while(numFirst.toFixed()!=numFirst){
      numFirst = +prompt('Enter first number AGAIN','');
    }
let numSecond = +prompt('Enter first number','');
    while(numSecond.toFixed()!=numSecond){
      numSecond = +prompt('Enter first number AGAIN','');
    }
let operator = prompt('Введите знак операции');
function calcResult(numFirst, numSecond, operator) {
  return eval(`${numFirst}` + operator + `${numSecond}`);
}

alert(calcResult(numFirst, numSecond, operator));