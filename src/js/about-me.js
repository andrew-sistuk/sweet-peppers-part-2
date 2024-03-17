import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

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


const nextButtonAbout = document.querySelector('.next-about-me-btn');

const swiper = new Swiper('.about-me-slider', {
    modules: [Navigation, Keyboard, Mousewheel],
    //стрілки
  Navigation: {  
    nextEl: null,
  },

  slideToClickedSlide: true,

  Keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  Mousewheel: {
    sensitivity: 1,
  },

  // slidesPerView: 2,

  //infinity scroll
  loop: true,

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


nextButtonAbout.addEventListener('click', function() {
    swiper.slideNext();
});


swiper.on('slideNextTransitionStart', function () {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const nextSlide = swiper.slides[swiper.activeIndex]; 
    const otherSlides = document.querySelectorAll('.about-me-slider-item');

    // Змінюємо колір фону наступного слайда на червоний
    if (nextSlide !== undefined && nextSlide.classList.contains('about-me-slider-item')) {
        nextSlide.style.backgroundColor = 'var(--main-red)';
    }

    // Очищаємо фон інших слайдів
    otherSlides.forEach(slide => {
        if (slide !== nextSlide) {
            slide.style.backgroundColor = '';
        }
    });
});

swiper.on('slidePrevTransitionStart', function () {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const prevSlide = swiper.slides[swiper.activeIndex]; 
    const otherSlides = document.querySelectorAll('.about-me-slider-item');

    // Змінюємо колір фону попереднього слайда на червоний
    if (prevSlide !== undefined && prevSlide.classList.contains('about-me-slider-item')) {
        prevSlide.style.backgroundColor = 'var(--main-red)';
    }

    // Очищаємо фон інших слайдів
    otherSlides.forEach(slide => {
        if (slide !== prevSlide) {
            slide.style.backgroundColor = '';
        }
    });
});






document.addEventListener("DOMContentLoaded", function() {
    const firstSlide = document.querySelector('.about-me-slider-item:first-child');
    firstSlide.style.backgroundColor = 'var(--main-red)';
});

