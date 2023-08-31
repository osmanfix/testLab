

const slider = document.querySelector('.reviews-blocks'); // блок полностью
const slides =document.querySelectorAll('.review-block'); // блоки карточек


const prevButton = document.querySelector('.prev-button'); //назад 
const nextButton = document.querySelector('.next-button'); // вперед

const slideCount = slides.length;  // кол-во карточек
let slideIndex = 3;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }
  


function updateSlider() { 
        slides.forEach(elemee => {
            
            slides[0].remove()

        });

}
