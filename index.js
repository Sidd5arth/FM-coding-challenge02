const errorText = document.querySelector(".input-error-text")
const buttonInput = document.querySelector(".email-input input");
var submitFlag = false;
var inputValue = "";
const form = document.querySelector("form");
const modal = document.querySelector(".modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
const closeModalButton = document.querySelector(".close-modal");
const successMessage = document.querySelector(".message");

buttonInput.addEventListener("input", function() {
    console.log(buttonInput);  
  inputValue = buttonInput.value;
  console.log(inputValue);
  if(inputValue.length > 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)){
    submitFlag = true;
    errorText.style.opacity = 0;
    buttonInput.classList.remove("input-error");
  }else {
    submitFlag = false;
  }

});


form.addEventListener("submit", function(event) {
  event.preventDefault();
  if(inputValue.length >= 0 && submitFlag === false){
    submitFlag = false;
    buttonInput.classList.add("input-error");
    errorText.style.opacity = 1;
  }else{
    successMessage.textContent = `A confirmation email has been sent to ${inputValue}. Please open it and click the button inside to confirm your subscription`;
    modal.style.display = "block";
    modal.style.opacity = 1;
    modalBackdrop.style.display = "block";
    modalBackdrop.style.opacity = 1;
  }
});

closeModalButton.addEventListener("click", function() {
  modal.style.display = "none";
  modal.style.opacity = 0;
  modalBackdrop.style.display = "none";
  modalBackdrop.style.opacity = 0;
  submitFlag = false;
  buttonInput.value = "";
  inputValue = "";
  buttonInput.classList.remove("input-error");
});

window.onbeforeunload = function() {
  buttonInput.value = "";
  inputValue = "";
};
      