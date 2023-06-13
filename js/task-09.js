const refs = {
  body: document.body,
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.button.addEventListener("click", onButtonClick.bind(refs.span));

function onButtonClick() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  this.textContent = randomColor;
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
