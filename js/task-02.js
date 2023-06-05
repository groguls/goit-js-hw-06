const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const createListElementFromArr = list => {
  return list.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    itemEl.classList.add('item');
    return itemEl;
  });
};

const listElements = createListElementFromArr(ingredients);
listOfIngredients.append(...listElements);



