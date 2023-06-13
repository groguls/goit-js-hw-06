const refs = {
  inputEl: document.querySelector("#controls").firstElementChild,
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesContainerEl: document.querySelector("#boxes"),
}; 

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(+refs.inputEl.value);
};

function onDestroyBtnClick() {
  destroyBoxes();
};

function createBoxes(amount){
  let markup = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = `<div style="background-color:${getRandomHexColor()};width:${width}px;height:${height}px"></div>`;
    width += 10;
    height += 10;
    markup.push(boxEl);
  };

  refs.boxesContainerEl.insertAdjacentHTML("beforeend", markup.join(''));
};

function destroyBoxes(){
  refs.boxesContainerEl.innerHTML = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
