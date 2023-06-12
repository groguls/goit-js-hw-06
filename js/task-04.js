const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueFieldEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick.bind(valueFieldEl));
incrementBtn.addEventListener("click", onIncrementBtnClick.bind(valueFieldEl));

function onDecrementBtnClick() { 
    counterValue -= 1;
    this.textContent = counterValue;
};
function onIncrementBtnClick() { 
    counterValue += 1;
    this.textContent = counterValue;
};