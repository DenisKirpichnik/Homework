/*
 * 1. we have an input box to input numbers.
 * 2. we have a button group.
 * 3. we have operators.
 */

let input = document.getElementById("input");
let buttons = document.querySelectorAll(".btn__numbers button");
let operators = document.querySelectorAll(".btn__operators button");
let equal = document.getElementById("Equal_op");
let resultDisplay = false;
/// adding click handler about number buttons
console.log("this is the buttons", buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    let inputString = input.value;
    console.log("test ", e.target.value);
    let lastchar = inputString[inputString.length - 1];
    if (resultDisplay === false) {
      input.value += e.target.value;
      console.log("this is the button value inputsring", input.value);
    } else if (
      (resultDisplay === true && lastchar === "+") ||
      lastchar === "-" ||
      lastchar === "*" ||
      lastchar === "/"
    ) {
      input.value += e.target.value;
      resultDisplay = false;
      console.log("this is the operator inputstring", inputString);
    } else {
      resultDisplay = false;
      input.value = "";
      input.value += e.target.value;
      console.log("this is the next inputstring", inputString);
    }
  });
}
/// adding click handler about operators  buttons
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    let inputString = input.value;
    let lastchar = inputString[inputString.length - 1];
    if (
      lastchar === "+" ||
      lastchar === "-" ||
      lastchar === "*" ||
      lastchar === "/"
    ) {
      let newString =
        inputString.subString(0, inputString.length - 1) + e.target.value;
      input.value = newString;
    } else if (inputString.length == 0) {
      console.log("please enter number");
    } else {
      input.value += e.target.value;
    }
  });
}

equal.addEventListener("click", (e) => {
  let inputString = input.value;
  let numbers = inputString.split(/\+|\-|\*|\//g);
  let operators = inputString.replace(/[0-9]|\./g, "").split("");
  console.log("this is numbers equal", numbers, operators);
  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }
  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(
      subtract,
      2,
      parseFloat(numbers[subtract]) - parseFloat(numbers[subtract + 1])
    );
    operators.splice(add, 1);
    subtract = operators.indexOf("-");
  }
  var multiply = operators.indexOf("*");
  while (multiply != -1) {
    numbers.splice(
      multiply,
      2,
      parseFloat(numbers[multiply]) * parseFloat(numbers[multiply + 1])
    );
    operators.splice(multiply, 1);
    multiply = operators.indexOf("*");
  }
  var divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(
      divide,
      2,
      parseFloat(numbers[divide]) / parseFloat(numbers[divide + 1])
    );
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  }
  input.value = numbers[0];
  resultDisplay = true;
});
