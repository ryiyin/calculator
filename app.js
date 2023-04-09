const buttons = document.querySelectorAll(".num")
const display = document.querySelector(".display")


buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        display.innerHTML += button.innerHTML
    })
});
