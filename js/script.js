var searchButton = document.querySelector(".btn-hotel-search");
var form = document.querySelector(".hotel-search-form");

form.classList.add("hotel-form-hide");

searchButton.addEventListener("click", function(){
	form.classList.toggle("hotel-form-hide");
});
