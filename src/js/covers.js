const elements = document.querySelectorAll('.animations');
const covers = document.querySelector('.content');

function checkIfCoversInView() {
  const bounding = covers.getBoundingClientRect();

  const coversInView =
    bounding.top >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight);

  if (coversInView) {
    if (window.innerWidth < 1440) {
      elements.forEach(element => {
        element.classList.add('animations-mobile-tablet');
      });
    }
  } else {
    elements.forEach(element => {
      element.classList.remove('animations-mobile-tablet');
    });
  }
}

window.addEventListener('scroll', checkIfCoversInView);
window.addEventListener('resize', checkIfCoversInView);
