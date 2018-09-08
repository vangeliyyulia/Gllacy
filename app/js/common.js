// Slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("slider__toggle");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
};

//Toggling Body Background Color
var buttonMint = document.getElementById("blue");
var bodyMint = document.getElementsByTagName("body");	
buttonMint.addEventListener("click", function () {
  bodyMint[0].style.backgroundColor = "#8996a6"
});

var buttonBlue = document.getElementById("mint");
var bodyBlue = document.getElementsByTagName("body");	
buttonBlue.addEventListener("click", function () {
  bodyBlue[0].style.backgroundColor = "#849d8f"
});

var buttonChoco = document.getElementById("choco");
var bodyChoco = document.getElementsByTagName("body");	
buttonChoco.addEventListener("click", function () {
  bodyChoco[0].style.backgroundColor = "#9d8b84"
});
