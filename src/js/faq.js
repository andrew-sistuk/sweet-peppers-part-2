import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const acc = new Accordion('.accordion-container', {
  duration: 700,
  showMultiple: true,
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
