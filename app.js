const textarea = document.getElementById('textarea');
const Totalcharacter = document.getElementById('Totalcharacter');
let Remainingcount = document.getElementById('Remainingcount');

let func = ()=>{
    Totalcharacter.innerHTML = `Total Character : ${textarea.value.length}`;
    // Remainingcount.innerText =  `Remaining Count : ${textarea.getAttribute('maxlength')-textarea.value.length}`
    Remainingcount.innerText = `Remaining Count : ${50-textarea.value.length}`
}
func()
textarea.addEventListener('input',()=>{
func()

})