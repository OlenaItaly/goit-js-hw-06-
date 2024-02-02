const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const spanEl = document.querySelector('#value')
console.log(btnDecrement);
console.log(btnIncrement);
btnDecrement.addEventListener('click', onDecrement)
btnIncrement.addEventListener('click', onIncrement)
let counterValue = 0
function onDecrement() {
    counterValue -= 1
    counter()
}
function onIncrement() {
    counterValue += 1 
    counter()
}
function counter() {
    spanEl.textContent = counterValue
}


