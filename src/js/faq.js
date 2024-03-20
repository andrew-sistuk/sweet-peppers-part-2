import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.faq-list', {
  duration: 700,
});

//Закриття accordion при скролі секції за межі viewport
document.addEventListener('scroll', checkIfFaqInView);
const faqSection = document.querySelector('.faq');

function checkIfFaqInView() {
  const bounding = faqSection.getBoundingClientRect();

  if (bounding.bottom <= 0 || bounding.bottom >= bounding.height * 2) {
    acc.closeAll();
  }
}
