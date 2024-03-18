import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.accordion-container', {
  duration: 700,
});

//закриття accordion при виході секції за межі viewport
const faqSection = document.querySelector('.faq');

faqSection.addEventListener('mouseleave', scrollAction);

function scrollAction(event) {
  acc.closeAll();
}
