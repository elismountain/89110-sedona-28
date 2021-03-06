var searchButton = document.querySelector(".button-search");
var form = document.querySelector(".interactive-form");
var arrivalDate = form.querySelector(".arrival-date");
var departureDate = form.querySelector(".departure-date");
var formSending = form.querySelector(".form");
var numberAdults = form.querySelector(".adults");
var numberChildren = form.querySelector(".children");

form.classList.add("form-hide");

searchButton.addEventListener("click", function() {
 form.classList.toggle("form-hide");
 form.classList.toggle(".interactive-form");
 arrivalDate.focus();
});

formSending.addEventListener("submit", function(evt) {
 if (!numberAdults.value ||
  !numberChildren.value ||
  !arrivalDate.value ||
  !departureDate.value) {
  evt.preventDefault();
  form.classList.add("form-error");
 } else {
  console.log("Sent to server!");
 }
});
