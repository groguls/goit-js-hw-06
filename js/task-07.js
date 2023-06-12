const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange.bind(spanTextEl));

function onInputChange(event){
    this.style.fontSize = `${event.currentTarget.value}px`;
};