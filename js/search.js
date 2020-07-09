var searchButton = document.querySelector(".search-hotel-button");
var form = document.querySelector(".interactive-form");
var buttonClose = form.querySelector(".button-close");
var arrivalDate = form.querySelector(".arrival-date");
var departureDate = form.querySelector (".departure-date");
var numberOfAdults = form.querySelector(".adults");
var numberOfChildren = form.querySelector(".children");
var sendingForm = form.querySelector(".search-hotel-form");


var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("arrival");
} catch (err) {
  isStorageSupport = false;
}
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("departure");
} catch (err) {
  isStorageSupport = false;
}

form.classList.add("form-hide");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
	form.classList.toggle("form-hide");
	form.classList.toggle(".interactive-form");
  input.focus();
});

sendingForm.addEventListener ("submit", function (evt) {
	evt.preventDefault();
    if (!numberOfAdults.value || !numberOfChildren.value){
        evt.preventDefault();
        form.classList.add("form-error");
	} else {
	  if (isStorageSupport) {
    localStorage.setItem("adults", numberOfAdults.value);
  }
 }
});
