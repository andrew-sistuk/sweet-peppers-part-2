import Accordion from 'accordion-js';
import Swiper from 'swiper';

const buttonIconAbout = document.querySelectorAll('.two-about-button-icon');

const aboutMeAcc = new Accordion('.about-accordion-container', {
  duration: 700,
  showMultiple: true,
  collapse: true,
  openOnInit: [0],
});

const aboutMeSwiper = new Swiper('.about-me-slider', {
  //infinity scroll
  loop: true,
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,

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

document
  .querySelector('.about-me-swiper-container')
  .addEventListener('mouseover', function () {
    document.addEventListener('keydown', keyPressHandler);
  });
document
  .querySelector('.about-me-swiper-container')
  .addEventListener('focusin', function () {
    document.addEventListener('keydown', keyPressHandler);
  });
// Видаляємо обробник події при знятті ховера або фокусу
document
  .querySelector('.about-me-swiper-container')
  .addEventListener('mouseout', function () {
    document.removeEventListener('keydown', keyPressHandler);
  });
document
  .querySelector('.about-me-swiper-container')
  .addEventListener('focusout', function () {
    document.removeEventListener('keydown', keyPressHandler);
  });

// Функція обробника події
function keyPressHandler(event) {
  if (event.key === 'ArrowLeft') {
    aboutMeSwiper.slidePrev();
  } else if (event.key === 'ArrowRight') {
    aboutMeSwiper.slideNext();
  }
}

// підключення кнопки
const nextButtonAbout = document.querySelector('.next-about-me-btn');

nextButtonAbout.addEventListener('click', function () {
  aboutMeSwiper.slideNext();
});

// Зміна бекграунду першого елемента
aboutMeSwiper.on('slideNextTransitionStart', function () {
  const nextSlide = aboutMeSwiper.slides[aboutMeSwiper.activeIndex];
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

aboutMeSwiper.on('slidePrevTransitionStart', function () {
  const prevSlide = aboutMeSwiper.slides[aboutMeSwiper.activeIndex];
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
