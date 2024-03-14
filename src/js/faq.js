import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const ac = document.querySelectorAll('.ac');
const trigger = document.querySelectorAll('.ac-trigger');

const acc = new Accordion('.accordion-container', {
  duration: 800,
  showMultiple: true,
  // ariaEnabled: true,
  collapse: true,
  beforeOpen: currElement => {
 
  },
  onOpen: function (currentElement) {
    trigger.forEach(element => {
      element.classList.add('trigger-js')
    })
    console.log(trigger); 
  },
  onClose: currElement => {
    // trigger.forEach(element => {
    //   element.classList.removed('trigger-js')
    // })
  },
});

