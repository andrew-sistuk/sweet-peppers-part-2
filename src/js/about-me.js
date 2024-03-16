import Accordion from 'accordion-js';
import Swiper from 'swiper';
// import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

new Accordion('.accordeon', {
  duration: 400,
  // showMultiple: true,
  elementClass: '.accardeon-item',
  triggerClass: '.accardeon-trigger',
  panelClass: '.about-accordeon-text-container',
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});

new Swiper('.about-me-slider',{
    //стрілки
    navigation:{
        // nextEl: '.swiper-button-next',
        nextEl: '.next-about-me-btn',
        // prevEl: '.swiper-button-prev'
    },
   
    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    
    mousewheel:{
        sensitivity: 1,
    },

    // slidesPerView: 2,

    //infinity scroll
    loop: true,

    // кількість прокручуємих слайдів, за допомогою js знайти який у користувача екран і виставити значення
    // loopedslides: 2,
    breakpoints:{
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
        }
    }

});
