var searchButton = document.querySelector(".search-hotel__button");
var form = document.querySelector(".interactive-form");
var arrivalDate = form.querySelector(".arrival-date");
var sendingForm = form.querySelector(".search-hotel__form");
var numberOfAdults = form.querySelector(".adults");
var numberOfChildren = form.querySelector(".children");

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("quantity");
} catch (err) {
  isStorageSupport = false;
}
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("visitors");
} catch (err) {
  isStorageSupport = false;
}

form.classList.add("form-hide");

searchButton.addEventListener("click", function (evt) {
	form.classList.toggle(".interactive-form");
	form.classList.toggle("form-hide");
	form.classList.toggle(".interactive-form");
	arrivalDate.focus();
});


sendingForm.addEventListener ("submit", function (evt) {
	evt.preventDefault();
    if (!numberOfAdults.value || !numberOfChildren.value){
        evt.preventDefault();
	} else {
	  if (isStorageSupport) {
    localStorage.setItem("quantity", numberOfAdults.value);
  }
 }
});

sendingForm.addEventListener ("submit", function (evt) {
	evt.preventDefault();
    if (!numberOfAdults.value || !numberOfChildren.value){
    evt.preventDefault();
	} else {
	  if (isStorageSupport) {
    localStorage.setItem("visitors", numberOfAdults.value);
  }
 }
});
