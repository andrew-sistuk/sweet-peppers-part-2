import Accordion from 'accordion-js';
import Swiper from 'swiper';


const buttonIconAbout = document.querySelectorAll('.about-button-icon');

new Accordion('.accordion-container', {
  duration: 800,
  showMultiple: true,
  collapse: true,
  openOnInit:[0],
  beforeOpen: currElement => {
    const icon = currElement.querySelector('.about-button-icon');
    icon.classList.add('about-button-icon-rotate');
  },
  beforeClose: currElement => {
    const icon = currElement.querySelector('.about-button-icon');
    icon.classList.remove('about-button-icon-rotate');
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


new Swiper('.about-me-slider', {
  //стрілки
  navigation: {
    // nextEl: '.swiper-button-next',
    nextEl: '.next-about-me-btn',
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
