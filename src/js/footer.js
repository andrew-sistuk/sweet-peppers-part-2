import {getPortfolioRequest} from "./portfolio"


const form = document.querySelector('.work-form');
const succesText = document.querySelector('.succes-text');
const invalidText = document.querySelector('.invalid-text');
const modalBackdropSucces = document.querySelector(".backdrop.succes");
const modalBackdropError = document.querySelector(".backdrop.error");
const modalClose = document.querySelectorAll(".modal-close-btn");

const reg = /([A-z0-9_\.\-]{1,})@([A-z0-9_\.\-]{1,})\.([A-z]{2,8})/;


form.elements['email'].value = localStorage.getItem('email');
form.elements['email'].value = localStorage.getItem('comment');



form.elements['email'].addEventListener("blur", event =>{

    localStorage.setItem('email', form.elements['email'].value.trim());

    if (reg.test(form.elements['email'].value.trim())) {
        form.elements['email'].classList.remove('invalid');
        invalidText.classList.add("visually-hidden")
        form.elements['email'].classList.add('succes');
        succesText.classList.remove("visually-hidden")
      } else {
        form.elements['email'].classList.remove('succes');
        succesText.classList.add("visually-hidden")
        form.elements['email'].classList.add('invalid');
        invalidText.classList.remove("visually-hidden")
      }
    if(!form.elements['email'].value.trim()){
      form.elements['email'].classList.remove('invalid');
      form.elements['email'].classList.remove('succes');
      invalidText.classList.add("visually-hidden");
      succesText.classList.add("visually-hidden");
    }
})


form.elements['comment'].addEventListener('input', () => {
  localStorage.setItem('comment', form.elements['comment'].value.trim())
})


form.addEventListener("submit", sendRequest)


async function sendRequest(event){
  event.preventDefault();
  if(!reg.test(form.elements['email'].value.trim())){
    return
  }
  await getPortfolioRequest({
    "email": form.elements['email'].value.trim(),
    "comment": form.elements['comment'].value.trim()
  }).then(response => {
    form.elements['email'].value = '';
    form.elements['comment'].value = '';
    localStorage.removeItem('email');
    localStorage.removeItem('comment');
    form.elements['email'].classList.remove('succes');
    succesText.classList.add("visually-hidden");
    
    modalBackdropSucces.classList.remove("visually-hidden");
    modalBackdropSucces.addEventListener('click', clickOnBackdrop);
    modalClose[0].addEventListener('click', clickOnModalClose)
    document.addEventListener("keydown", pressEscape); 
  }).catch(error => {
    console.log(error)
    document.querySelector('.modal-text-error').textContent = error.response.data.message;
    modalBackdropError.classList.remove("visually-hidden");
    modalBackdropError.addEventListener('click', clickOnBackdropError);
    modalClose[1].addEventListener('click', clickOnModalCloseError)
    document.addEventListener("keydown", pressEscapeError);
  });
}


function clickOnBackdrop(event){
  if(event.target === modalBackdropSucces){
    modalBackdropSucces.classList.add("visually-hidden");
  }
}

function clickOnModalClose(event){
    modalBackdropSucces.classList.add("visually-hidden");
}

function pressEscape(event){
  if (event.code == "Escape") {
    modalBackdropSucces.classList.add("visually-hidden");
  }
}

function clickOnBackdropError(event){
  if(event.target === modalBackdropError){
    modalBackdropError.classList.add("visually-hidden");
  }
}

function clickOnModalCloseError(event){
    modalBackdropError.classList.add("visually-hidden");
}

function pressEscapeError(event){
  if (event.code == "Escape") {
    modalBackdropError.classList.add("visually-hidden");
  }
}

