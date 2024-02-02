const textInputEl = document.querySelector('#validation-input')
console.log(textInputEl)
console.dir(textInputEl)
const dataLength = textInputEl.getAttribute('data-length')
textInputEl.addEventListener('blur', onInputBlur)
  console.log(textInputEl.value.length)
function onInputBlur(event) {
    // removEl()
     if (Number(textInputEl.value.length) === Number(dataLength)) {
         textInputEl.classList.add('valid')
     } else {
         textInputEl.classList.add('invalid')
    }
   
    }
console.log(Number(textInputEl.value.length));
console.log(dataLength);

 
function removEl() {
  
        if (textInputEl.classList === 'valid' || textInputEl.classList === 'ivalid') {
            textInputEl.classList.remove('valid')
            textInputEl.classList.remove('invalid')
            textInputEl.value = "";
        }
}
    //  textInputEl.addEventListener("focus", removEL)







// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });