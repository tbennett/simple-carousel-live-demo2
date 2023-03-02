document.addEventListener('DOMContentLoaded', init);

function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  
  // show the first slide
  slides[0].classList.remove("hide");
  
   next_btn.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);
}



function changeSlide(e) {
  
    // stop link from trying to reload page
    e.preventDefault();
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    let nextUp = "";
  
    if(e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    }
  
    if(e.target.className == 'back-btn') {
      nextUp = showing.previousElementSibling;
    }
    
    // deactivate current image
    showing.classList.add("hide");
    showing.classList.remove("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.remove("hide");
    nextUp.classList.add("current");
  }