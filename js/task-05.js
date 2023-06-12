const inputEl = document.querySelector("#name-input");
const spanOutputEl = document.querySelector('#name-output');

inputEl.addEventListener("input", onInput.bind(spanOutputEl));

function onInput(event) {

    
    this.textContent = !event.currentTarget.value ? "Anonymous" : event.currentTarget.value;


}