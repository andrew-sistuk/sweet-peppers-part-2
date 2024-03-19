import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const projectsSwiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-wrapper',
  },
});
