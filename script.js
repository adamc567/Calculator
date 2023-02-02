const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const mainDisplay = document.querySelector('#calculatorMainDisplay')
const subDisplay = document.querySelector('#calculatorSubDisplay');
const allClearBtn = document.querySelector('#clear');
const addBtn = document.querySelector('#add');
const equalBtn = document.querySelector('#equal');

let valueDisplay = [];
let valueDisplayTwo = [];
let addOn = false

oneBtn.addEventListener('click', () => addToValue(oneBtn.value));
twoBtn.addEventListener('click', () => addToValue(twoBtn.value));
threeBtn.addEventListener('click', () => addToValue(threeBtn.value));
fourBtn.addEventListener('click', () => addToValue(fourBtn.value));
fiveBtn.addEventListener('click', () => addToValue(fiveBtn.value));
sixBtn.addEventListener('click', () => addToValue(sixBtn.value));
sevenBtn.addEventListener('click', () => addToValue(sevenBtn.value));
eightBtn.addEventListener('click', () => addToValue(eightBtn.value));
nineBtn.addEventListener('click', () => addToValue(nineBtn.value));
zeroBtn.addEventListener('click', () => addToValue(zeroBtn.value));

equalBtn.addEventListener('click', () => equal())
addBtn.addEventListener('click', () => add())
allClearBtn.addEventListener('click', () => valueDisplay = []);
allClearBtn.addEventListener('click', () => mainDisplay.innerHTML = 0);

function addToValue(a) {
    mainDisplay.innerHTML = '';
    valueDisplay.push(a)
    mainDisplay.innerHTML = (valueDisplay.join(''));
    return (valueDisplay.join(''))
}

function add() {
    addOn = true
    valueDisplayTwo = (valueDisplay.join(''));
    subDisplay.innerHTML = valueDisplayTwo;
    valueDisplay = [];
    console.log(addOn);

}

function equal() {
let result
result = valueDisplay.map(Number) + valueDisplayTwo.map(Number);
mainDisplay.innerHTML = result;
console.log(result)
    }

// define a string
// have string take in value when button pressed,
// create function to manipulate string
// display string
// display result of function
