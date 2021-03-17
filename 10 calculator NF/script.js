let buffer = document.querySelector(".buffer__display");
let currentV = document.querySelector(".currentValue__display"); //current operand
let numberBtns = document.querySelectorAll(".btn__numbers ");
let operatorsBtns = document.querySelectorAll(".btn__operators ");

// array for calculation
let bufferArr = [];
buffer.innerText = bufferArr.join("");
let currentValue = null;

// number buttons functionality
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", (e) => {
    currentV.innerText += e.target.value;
  });
}
// pushes current value and the operator to the array, sets current val to null, displays buffer
function pushCurrAndTargetVupdateDisplay(targetValue) {
  bufferArr.push(currentV.innerText);
  bufferArr.push(targetValue);
  currentV.innerText = null;
  buffer.innerText = bufferArr.join("");
}

//operators buttons functionality
function handleOperation(e) {
  if (e.target.value === "+") {
    pushCurrAndTargetVupdateDisplay(e.target.value);
  } else if (e.target.value === "-") {
    pushCurrAndTargetVupdateDisplay(e.target.value);
  } else if (e.target.value === "/") {
    pushCurrAndTargetVupdateDisplay(e.target.value);
  } else if (e.target.value === "*") {
    pushCurrAndTargetVupdateDisplay(e.target.value);
  }
}

for (let i = 0; i < operatorsBtns.length; i++) {
  operatorsBtns[i].addEventListener("click", handleOperation);
}

//equal functionality
function handleEqual(e) {
  e.preventDefault();
  if (currentV.innerText.length > 0) {
    bufferArr.push(currentV.innerText);
  }
  let lastChar = bufferArr[bufferArr.length - 1];
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    bufferArr.splice(-1, 1);
  }
  currentV.innerText = calcAddSubtract(calcMultiplyDivide(bufferArr));
  bufferArr = [];
  buffer.innerText = null;
}

let equalBtn = document.getElementById("equal__op");
equalBtn.addEventListener("click", handleEqual);

//delete one digit functionality //F
deleteone_op.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentV.innerText.length !== 0) {
    currentV.innerText = currentV.innerText.substring(
      0,
      currentV.innerText.length - 1
    );
  }
});

// clear all CE functionality //F
clearAll__op.addEventListener("click", (e) => {
  e.preventDefault();
  bufferArr = [];
  currentV.innerText = null;
  buffer.innerText = null;
});
//clear current input functionality C //F
clearInput__op.addEventListener("click", (e) => {
  e.preventDefault();
  currentV.innerText = null;
});

// negate the number functionality //F
let negate = document.getElementById("negateCurrOperand__op");
negate.addEventListener("click", (e) => {
  e.preventDefault();
  if (+currentV.innerText > 0 && currentV.innerText.length > 0) {
    currentV.innerText = -Math.abs(+currentV.innerText);
    currentV.innerText = currentV.innerText.toString();
  } else if (+currentV.innerText < 0 && currentV.innerText.length > 0) {
    currentV.innerText = Math.abs(+currentV.innerText);
    currentV.innerText = currentV.innerText.toString();
  }
});

//decimal functionality //F
decimal__op.addEventListener("click", (e) => {
  e.preventDefault();
  if (/\./.test(currentV.innerText) || currentV.innerText.length == 0) {
    return;
  } else {
    currentV.innerText += ".";
  }
});

//function recursively calculates  + || -
function calcAddSubtract(array) {
  let arr = array;
  if (arr.some((e) => /[+-]/.test(e)) === false || arr.length == 1) {
    return array;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == "+") {
      let res = Number(arr[i - 1]) + Number(arr[i + 1]);
      arr.splice(i - 1, 3, res);
    } else if (arr[i] == "-") {
      let res = Number(arr[i - 1]) - Number(arr[i + 1]);
      arr.splice(i - 1, 3, res);
    }
  }
  return calcAddSubtract(arr);
}
// function recursively calculates  * || /
function calcMultiplyDivide(array) {
  let arr = array;
  if (arr.some((e) => /[/*]/.test(e)) === false) {
    return array;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == "/") {
      let res = (Number(arr[i - 1]) / Number(arr[i + 1])).toFixed(8);
      arr.splice(i - 1, 3, res);
    } else if (arr[i] == "*") {
      let res = Number(arr[i - 1]) * Number(arr[i + 1]);
      arr.splice(i - 1, 3, res);
    }
  }
  return calcMultiplyDivide(arr);
}
