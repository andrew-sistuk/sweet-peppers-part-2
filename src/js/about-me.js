import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const buttonIconAbout = document.querySelectorAll('.two-about-button-icon');

new Accordion('.accordion-container', {
  duration: 800,
  showMultiple: true,
  collapse: true,
  openOnInit: [0],
  beforeOpen: currElement => {
    const icon = currElement.querySelector('.two-about-button-icon');
    icon.classList.add('two-about-button-icon-rotate');
  },
  beforeClose: currElement => {
    const icon = currElement.querySelector('.two-about-button-icon');
    icon.classList.remove('two-about-button-icon-rotate');
  },
});

//перезавантаження акордеону під час зміни маштабу
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


  //infinity scroll
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});



// підключення кнопки
const nextButtonAbout = document.querySelector('.next-about-me-btn');

nextButtonAbout.addEventListener('click', function () {
  swiper.slideNext();
});



// Зміна бекграунду першого елемента
swiper.on('slideNextTransitionStart', function () {
  const nextSlide = swiper.slides[swiper.activeIndex];
  const otherSlides = document.querySelectorAll('.about-me-slider-item');

  // Змінюємо колір фону наступного слайда на червоний
  if (
    nextSlide !== undefined &&
    nextSlide.classList.contains('about-me-slider-item')
  ) {
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
  const prevSlide = swiper.slides[swiper.activeIndex];
  const otherSlides = document.querySelectorAll('.about-me-slider-item');

  // Змінюємо колір фону попереднього слайда на червоний
  if (
    prevSlide !== undefined &&
    prevSlide.classList.contains('about-me-slider-item')
  ) {
    prevSlide.style.backgroundColor = 'var(--main-red)';
  }

  // Очищаємо фон інших слайдів
  otherSlides.forEach(slide => {
    if (slide !== prevSlide) {
      slide.style.backgroundColor = '';
    }
  });
});


// задаєм бекграунд першому елементу при завантаженні
document.addEventListener('DOMContentLoaded', function () {
  const firstSlide = document.querySelector(
    '.about-me-slider-item:first-child'
  );
  firstSlide.style.backgroundColor = 'var(--main-red)';
});
