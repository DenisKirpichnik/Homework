let buffer = document.querySelector(".buffer__display");
let currentV = document.querySelector(".currentValue__display");
let numberBtns = document.querySelectorAll(".btn__numbers ");
let operatorsBtns = document.querySelectorAll(".btn__operators ");

// previous and current operands
let previousO = null
let currentO = currentV.innerText
// setting the operator
let operator = "divide"

//checking if the last character of buffer is an operator 
let lastChar = null
// This function sets last char to the last char of buffer by default
function setLastChar(n = buffer.innerText.charAt(buffer.innerText.length - 1)) {
    lastChar = n
}

// operator check arr, last char == operator?, blocks adding new to buffer
let arr = ["+", "-", "/", "*"]

// number buttons functionality 
for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", (e) => {
        currentV.innerText += e.target.value
    })
}

//operators buttons functionality 
for (let i = 0; i < operatorsBtns.length; i++) {
    operatorsBtns[i].addEventListener("click", (e) => {

        if (e.target.value === "+" && !arr.includes(lastChar)) {
            operator = "add"
            previousO = currentV.innerText
            currentV.innerText = null
            buffer.innerText = buffer.innerText + previousO + e.target.value
            setLastChar()
        } else if (e.target.value === "-" && !arr.includes(lastChar)) {
            operator = "subtract"
            previousO = currentV.innerText
            currentV.innerText = null
            buffer.innerText = buffer.innerText + previousO + e.target.value
            setLastChar()
        } else if (e.target.value === "/" && !arr.includes(lastChar)) {
            operator = "divide"
            previousO = currentV.innerText
            currentV.innerText = null
            buffer.innerText = buffer.innerText + previousO + e.target.value
            setLastChar()
        } else if (e.target.value === "*" && !arr.includes(lastChar)) {
            operator = "multiply"
            previousO = currentV.innerText
            currentV.innerText = null
            buffer.innerText = buffer.innerText + previousO + e.target.value
            setLastChar()
        }
    })
}

//equal functionality
let equalBtn = document.getElementById("equal__op");
equalBtn.addEventListener("click", (e) => {
    e.preventDefault()
    switch (operator) {
        case "add":
            console.log(lastChar)
            currentO = currentV.innerText
            currentV.innerText = Number(previousO) + Number(currentO)
            buffer.innerText = null
            setLastChar(null)
            break;
        case "subtract":
            currentO = currentV.innerText
            currentV.innerText = previousO - currentO
            buffer.innerText = null
            setLastChar(null)
            break;
        case "multiply":
            currentO = currentV.innerText
            currentV.innerText = previousO * currentO
            buffer.innerText = null
            setLastChar(null)
            break;
        case "divide":
            currentO = currentV.innerText
            currentV.innerText = previousO / currentO
            buffer.innerText = null
            setLastChar(null)
            break;
    }
})

//delete one digit functionality //F 
deleteone_op.addEventListener("click", (e) => {
    e.preventDefault()
    if (currentV.innerText.length !== 0) {
        currentV.innerText = currentV.innerText.substring(0, currentV.innerText.length - 1)
    }
})

// clear all CE functionality //F
clearAll__op.addEventListener("click", (e) => {
    e.preventDefault()
    buffer.innerText = null
    currentV.innerText = null
})
//clear current input functionality C //F
clearInput__op.addEventListener("click", (e) => {
    e.preventDefault()

    currentV.innerText = null
})


// negate the number functionality //F
let negate = document.getElementById("negateCurrOperand__op")
negate.addEventListener("click", (e) => {
    e.preventDefault()
    if (+currentV.innerText > 0) {
        currentV.innerText = -Math.abs(+currentV.innerText)
        currentV.innerText = currentV.innerText.toString()
    } else {
        currentV.innerText = Math.abs(+currentV.innerText)
        currentV.innerText = currentV.innerText.toString()
    }
})

//decimal functionality //F
decimal__op.addEventListener("click", (e) => {
    e.preventDefault()
    if (/\./.test(currentV.innerText) || currentV.innerText.length == 0) {
        return
    } else {
        currentV.innerText += "."
    }
})