import {getPortfolioRequest} from "./portfolio"


const form = document.querySelector('.work-form');
const emailInput = document.querySelector('.email');
const comment = document.querySelector('.comment');
const succesText = document.querySelector('.succes-text');
const invalidText = document.querySelector('.invalid-text');
const modalBackdropSucces = document.querySelector(".backdrop.succes");
const modalBackdropError = document.querySelector(".backdrop.error");
const modalClose = document.querySelectorAll(".modal-close-btn");

const reg = /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/;


emailInput.value = localStorage.getItem('email');
comment.value = localStorage.getItem('comment');



emailInput.addEventListener("input", event =>{

    localStorage.setItem('email', emailInput.value.trim());

    if (reg.test(emailInput.value.trim())) {
        emailInput.classList.remove('invalid');
        invalidText.classList.add("is-hidden")
        emailInput.classList.add('succes');
        succesText.classList.remove("is-hidden")
      } else {
        emailInput.classList.remove('succes');
        succesText.classList.add("is-hidden")
        emailInput.classList.add('invalid');
        invalidText.classList.remove("is-hidden")
      }
    if(!emailInput.value.trim()){
      emailInput.classList.remove('invalid');
      emailInput.classList.remove('succes');
      invalidText.classList.add("is-hidden");
      succesText.classList.add("is-hidden");
    }
})


comment.addEventListener('input', () => {
  localStorage.setItem('comment', comment.value.trim())
})


form.addEventListener("submit", sendRequest)


async function sendRequest(event){
  event.preventDefault();
  if(!reg.test(emailInput.value.trim())){
    return
  }
  await getPortfolioRequest({
    "email": emailInput.value.trim(),
    "comment": comment.value.trim()
  }).then(response => {
    emailInput.value = '';
    comment.value = '';
    localStorage.removeItem('email');
    localStorage.removeItem('comment');
    emailInput.classList.remove('succes');
    succesText.classList.add("is-hidden");
    
    modalBackdropSucces.classList.remove("is-hidden");
    modalBackdropSucces.addEventListener('click', clickOnBackdrop);
    modalClose[0].addEventListener('click', clickOnModalClose)
    document.addEventListener("keydown", pressEscape);
    
  }).catch(error => {
    console.log(error)
    document.querySelector('.modal-text-error').textContent = error.response.data.message;
    modalBackdropError.classList.remove("is-hidden");
    modalBackdropError.addEventListener('click', clickOnBackdropError);
    modalClose[1].addEventListener('click', clickOnModalCloseError)
    document.addEventListener("keydown", pressEscapeError);
  });
}


function clickOnBackdrop(event){
  if(event.target === modalBackdropSucces){
    modalBackdropSucces.classList.add("is-hidden");
  }
}

function clickOnModalClose(event){
    modalBackdropSucces.classList.add("is-hidden");
}

function pressEscape(event){
  if (event.code == "Escape") {
    modalBackdropSucces.classList.add("is-hidden");
  }
}

function clickOnBackdropError(event){
  if(event.target === modalBackdropError){
    modalBackdropError.classList.add("is-hidden");
  }
}

function clickOnModalCloseError(event){
    modalBackdropError.classList.add("is-hidden");
}

function pressEscapeError(event){
  if (event.code == "Escape") {
    modalBackdropError.classList.add("is-hidden");
  }
}

