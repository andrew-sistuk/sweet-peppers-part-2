import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const projectsSwiper = new Swiper('.projects-swiper', {
  modules: [Navigation, Keyboard],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',
  spaceBetween: 16,

  navigation: {
    nextEl: '.next-project-btn',
    prevEl: '.prev-project-btn',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.projects-list',
  },
});
