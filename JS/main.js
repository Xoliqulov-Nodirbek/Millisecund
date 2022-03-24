let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elBtn = document.querySelector(".form__btn");
let elText = document.querySelector(".result")


const MILLISECKUND_SECOND =1000;
const MILLISECKUND_MINUT = 60 * MILLISECKUND_SECOND;
const MILLISECKUND_HOUR = 60 * MILLISECKUND_MINUT;
const MILLISECKUND_DAY = 24 * MILLISECKUND_HOUR

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    let elInputValue = elInput.value

    elText.textContent = `${Math.floor(elInputValue / MILLISECKUND_DAY )} kun  ${Math.floor((elInputValue % MILLISECKUND_DAY ) / MILLISECKUND_HOUR )} soat ${Math.floor((elInputValue % MILLISECKUND_HOUR ) / MILLISECKUND_MINUT )} minut ${Math.floor((elInputValue % MILLISECKUND_MINUT ) / MILLISECKUND_SECOND )} secund ${elInputValue % MILLISECKUND_SECOND} millisecund`;
})