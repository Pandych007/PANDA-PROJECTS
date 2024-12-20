let currentSlide = 0;
function showSlide(index) {
  //0+1=1
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    //1 > 14
    currentSlide = 0;
  } else if (index < 0) {
    //1<0
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index; //currentSlide=1
  }
  let slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = "translateX(-" + currentSlide * 100 + "%)";
}

function chengSlides(index) {
  //index=1
  showSlide(currentSlide + index);
}

setInterval(() => {
  chengSlides(1);
}, 10000);
