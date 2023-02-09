const mainDisplay = document.querySelector('#calculatorMainDisplay')
const subDisplay = document.querySelector('#calculatorSubDisplay');
const allClearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
const deleteBtn = document.querySelector('.delete');
const numberBtn = document.querySelectorAll('.buttonNumber');
const operatorBtn = document.querySelectorAll('.calculatorOperator');
const deciBtn = document.querySelector('#deci');
const sqrtBtn = document.querySelector('#squareRoot');
let bananaInput = '';
let valueReturn = '';
let operator = ''

sqrtBtn.addEventListener('click', () => sqRoot(bananaInput))
numberBtn.forEach((button) =>
button.addEventListener('click', () => newInput(button.value)));
operatorBtn.forEach((button) =>
button.addEventListener('click', () => setOperator(button.textContent)));
operatorBtn.forEach((button) =>
button.addEventListener('click', newValue));
window.addEventListener('keydown', (e) => keyboard(e));
equalBtn.addEventListener('click', () => operate(operator))
deleteBtn.addEventListener('click', deleteLast)
allClearBtn.addEventListener('click', clearAll)
window.addEventListener('keydown', (e) => console.log(e.key));
deciBtn.addEventListener('click', addDot);
function newInput (a) {
bananaInput += a;
mainDisplay.innerHTML = bananaInput;
}
function keyboard (e){
    if (e.key >= 0 && e.key <= 9) {
    newInput(String(e.key))
} else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*'){
    setOperator(e.key)
    newValue();
} else if (e.key === 'Enter' || e.key === '=') {
    operate(operator);
} else if (e.key === 'Backspace') {
    deleteLast();
} else if (e.key === '.') {
    addDot();
}
}
function clearAll() {
    mainDisplay.textContent = '0'
    subDisplay.textContent = '0';
    bananaInput = ''
    valueReturn = ''
}
function deleteLast() {
    bananaInput = bananaInput.toString();
    bananaInput = bananaInput.substring(0, bananaInput.length-1);
    mainDisplay.textContent = (bananaInput);
}
function addDot() {
    if (bananaInput === '') {
        bananaInput = '0';
    } else if (mainDisplay.textContent.includes('.')) {
        return
    }
    bananaInput += '.'
    mainDisplay.textContent = bananaInput;
}
function newValue (a) {
    valueReturn = bananaInput;
    bananaInput = '';
    mainDisplay.innerHTML = 0;
    subDisplay.innerHTML = `${valueReturn} ${operator}`;
}
function setOperator (a){
   return operator = a; 
}
function add(a, b) {
    bananaInput = roundNumber(a + b);
    mainDisplay.textContent = bananaInput;
    subDisplay.textContent = `${b} ${operator} ${a} =`
}
function minus(a, b) {
    bananaInput = roundNumber(b - a);
    mainDisplay.textContent = bananaInput;
    subDisplay.textContent = `${b} ${operator} ${a} =`
}
function multiply(a, b) {
    bananaInput = roundNumber(a * b);
    mainDisplay.textContent = bananaInput;
    subDisplay.textContent = `${b} ${operator} ${a} =`
}
function divide(a, b) {
    bananaInput = roundNumber(b / a);
    mainDisplay.textContent = bananaInput;
    subDisplay.textContent = `${b} ${operator} ${a} =`
}
function sqRoot(a) {
    bananaInput = roundNumber(Math.sqrt(a))
    mainDisplay.textContent = bananaInput;

}
function operate(operator) {
    let aValue = Number(bananaInput);
    let bValue = Number(valueReturn);
    switch (operator)
        {
            case '+':
                return add(aValue, bValue);
            case '-':
                return minus(aValue, bValue);
            case '*':
                return multiply(aValue, bValue);
            case '/':
                if (aValue === 0){
                    alert(`You cannot devide by 0! You're mad!`)
                } else {
                return divide(aValue, bValue);
                }
            default:
                console.log('dog')
                return null;
        }
}
function roundNumber (number) {
    return Math.round(number * 1000) / 1000;
}