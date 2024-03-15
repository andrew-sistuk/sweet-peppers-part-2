const form = document.querySelector('.work-form');
const emailInput = document.querySelector('.email');
const comment = document.querySelector('.comment');
const succesText = document.querySelector('.succes-text');
const invalidText = document.querySelector('.invalid-text');


emailInput.addEventListener("input", event =>{
    if (emailInput.validity.valid) {
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



form.addEventListener("submit", sendRequest)


async function sendRequest(event){
  const response = await fetch(url, {
    method: "POST",
    body:{
    "email": emailInput.value.trim(),
    "comment": comment.value.trim()
  }});

}