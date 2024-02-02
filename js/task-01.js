// const list = document.querySelector('ul#categories');
// console.dir(list);
// console.dir(`Number of categories: ${list.children.length}`)
const liItem = document.querySelectorAll('.item');
console.dir(`Number of categories: ${liItem.length}`)
liItem.forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
});
