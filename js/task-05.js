const nameInput = document.querySelector('#name-input')
console.dir(nameInput)
const nameOutput = document.querySelector('#name-output')
nameInput.addEventListener('input', onOutput)
function onOutput(event) {
    if (event.currentTarget.value) {
      nameOutput.textContent= event.currentTarget.value 
    }  
}