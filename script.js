let calcDisplay = document.querySelector('#screenDisplay')
calcDisplay.textContent = ""
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const dotBtn = document.getElementById('dot')

function add (num1, num2) {
	let total = (num1 * 1) + (num2 * 1)
    calcDisplay.textContent = total
  return total
  
};

function subtract (num1, num2) {
	let total = (num1 * 1) - (num2 * 1)
    calcDisplay.textContent = total
  return total
};

function multiply (num1, num2) {
  let total = (num1 * 1) * (num2 * 1)
  calcDisplay.textContent = total
  return total
};

function divide (num1, num2) {
    let total = (num1 * 1) / (num2 * 1)
    calcDisplay.textContent = total
    return total
  };

  let btnArr = Array.from(document.querySelectorAll('button'))
  console.log(btnArr)

  function oneDot() {
    dotBtn.disabled = true
  }

  function btnsOff() {
    plusBtn.disabled = true
    minusBtn.disabled = true
    multiplyBtn.disabled = true
    divideBtn.disabled = true
  }

  function clearDisplay() {
    calcDisplay.textContent = ""
}

function btnsOn() {
    plusBtn.disabled = false
    minusBtn.disabled = false
    multiplyBtn.disabled = false
    divideBtn.disabled = false
    dotBtn.disabled = false
}

  function getResult() {
    let stringDisplay = calcDisplay.textContent.toString()
    if (stringDisplay.includes('+')) {
        let numbers = stringDisplay.split('+')
        console.log(numbers)
        add(numbers[0], numbers[1])
    } else if (stringDisplay.includes('-')) {
        let numbers = stringDisplay.split('-')
        console.log(numbers)
        subtract(numbers[0], numbers[1])
    } else if (stringDisplay.includes('x')) {
        let numbers = stringDisplay.split('x')
        console.log(numbers)
        multiply(numbers[0], numbers[1])
    } else if (stringDisplay.includes('÷')) {
        let numbers = stringDisplay.split('÷')
        console.log(numbers)
        divide(numbers[0], numbers[1])
    }
  }

  btnArr.forEach(btn => {
    btn.addEventListener('click', e => {
        switch (btn.value) {
            case '0': calcDisplay.textContent += btn.value
            break;
            case '1': calcDisplay.textContent += btn.value
            break;
            case '2': calcDisplay.textContent += btn.value
            break;
            case '3': calcDisplay.textContent += btn.value
            break;
            case '4': calcDisplay.textContent += btn.value
            break;
            case '5': calcDisplay.textContent += btn.value
            break;
            case '6': calcDisplay.textContent += btn.value
            break;
            case '7': calcDisplay.textContent += btn.value
            break;
            case '8': calcDisplay.textContent += btn.value
            break;
            case '9': calcDisplay.textContent += btn.value
            break;
            case '.': calcDisplay.textContent += btn.value
            oneDot()
            break;
            case 'clear': clearDisplay()
            btnsOn()
            break;
            case '+': calcDisplay.textContent += btn.value
            btnsOff()
            break;
            case '-': calcDisplay.textContent += btn.value
            btnsOff()
            break;
            case 'x': calcDisplay.textContent += btn.value
            btnsOff()
            break;
            case '÷': calcDisplay.textContent += btn.value
            btnsOff()
            break;
            case '=': 
            getResult()
            btnsOn()
            break;

        }
    })
})
