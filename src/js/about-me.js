import Accordion from 'accordion-js';
import Swiper from 'swiper';

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
        nextEl: '.about-me-slider-button',
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

});
