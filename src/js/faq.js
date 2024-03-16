import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const trigger = document.querySelectorAll('.ac-trigger');
const buttonIcon = document.querySelectorAll('.button-icon');

const acc = new Accordion('.accordion-container', {
  duration: 800,
  showMultiple: true,
  collapse: true,
  beforeOpen: currElement => {
    const icon = currElement.querySelector('.button-icon');
    icon.classList.add('button-icon-rotste');
  },
  beforeClose: currElement => {
    const icon = currElement.querySelector('.button-icon-rotste');
    icon.classList.remove('button-icon-rotste');
  },
});

trigger.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (window.innerWidth >= 1440) {
      switch (String(index)) {
        case '0':
          acc.toggle(3);
          break;

        case '3':
          acc.toggle(0);
          break;

        case '1':
          acc.toggle(4);
          break;

        case '4':
          acc.toggle(1);
          break;

        case '2':
          acc.toggle(5);
          break;

        case '5':
          acc.toggle(2);
          break;

        default:
          break;
      }
    }
  });
});

window.addEventListener('resize', checkIfCoversInView);
function checkIfCoversInView() {
  buttonIcon.forEach(elem => {
    if (elem.classList.contains('button-icon-rotste')) {
      elem.classList.remove('button-icon-rotste');
    }
  });
  acc.closeAll();
}