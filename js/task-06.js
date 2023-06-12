const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur.bind(inputEl));

function onInputBlur(event){
if (event.currentTarget.value.length == this.dataset.length) {
    if(this.classList.contains("invalid")) {
        this.classList.replace("invalid", "valid");
    }
    this.classList.add("valid");
} else {
    if (this.classList.contains("valid")) {
        this.classList.replace("valid", "invalid");
    }
    this.classList.add("invalid");
}
};
