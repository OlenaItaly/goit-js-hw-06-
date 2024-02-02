const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');
const list = ingredients.map((product) => {
  const itemsLi = document.createElement('li');
  itemsLi.classList.add('item');
  itemsLi.textContent = product;
  ul.append(itemsLi)
  return itemsLi
});

// const items = ingredients.map(product => `
//  <li class="item">
//  ${product}
// </li>`).join('');

// console.log(items)
// ul.innerHTML = items;
console.log(list);
