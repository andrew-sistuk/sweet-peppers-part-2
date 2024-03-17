import Accordion from 'accordion-js';
import Swiper from 'swiper';


const buttonIconAbout = document.querySelectorAll('.two-about-button-icon');

new Accordion('.accordion-container', {
  duration: 800,
  showMultiple: true,
  collapse: true,
  openOnInit:[0],
  beforeOpen: currElement => {
    const icon = currElement.querySelector('.two-about-button-icon');
    icon.classList.add('two-about-button-icon-rotate');
  },
  beforeClose: currElement => {
    const icon = currElement.querySelector('.two-about-button-icon');
    icon.classList.remove('two-about-button-icon-rotate');
  },
});

window.addEventListener('resize', checkIfCoversInViewAbout);
function checkIfCoversInViewAbout() {
    buttonIconAbout.forEach(elem => {
    if (elem.classList.contains('about-button-icon-rotate')) {
      elem.classList.remove('about-button-icon-rotate');
    }
  });
  acc.closeAll();
}


const swiper = new Swiper('.about-me-slider', {
  //стрілки
  navigation: {
    nextEl: '.swiper-button-next',
    // nextEl: '.next-about-me-btn',
    // prevEl: '.swiper-button-prev'
  },

  slideToClickedSlide: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  // slidesPerView: 2,

  //infinity scroll
  loop: true,

  // кількість прокручуємих слайдів, за допомогою js знайти який у користувача екран і виставити значення
  // loopedslides: 2,
  breakpoints: {
    320: {
      // loopedslides: 2,
      slidesPerView: 2,
    },
    768: {
      // loopedslides: 3,
      slidesPerView: 3,
    },
    1440: {
      // loopedslides: 6,
      slidesPerView: 6,
    },
  },
});


swiper.on('slideChange', function () {
    const firstSlide = document.querySelector('.about-me-slider-item:first-child');
    const otherSlides = document.querySelectorAll('.about-me-slider-item:not(:first-child)');
    firstSlide.style.backgroundColor = 'var(--main-red)'; 
    otherSlides.forEach(slide => slide.style.backgroundColor = ''); 
});
// swiper.on('slideChange', function () {
//     const currentSlide = document.querySelector('.swiper-slide-active');
//     const otherSlides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-active)');
    
//     currentSlide.style.backgroundColor = 'red'; 
//     otherSlides.forEach(slide => slide.style.backgroundColor = '');
// });