
const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

const itemsOfCateroriesArr = [...categoriesList.children];
itemsOfCateroriesArr.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const itemsOfIncludedList = item.querySelectorAll('li');
    console.log(`Elements: ${itemsOfIncludedList.length}`);
});

