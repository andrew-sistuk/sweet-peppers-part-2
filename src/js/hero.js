const buttonHero = document.querySelector('.button-hero-anime');
const heroSection = document.querySelector('.hero-section');
const heroButtonColor = document.querySelectorAll('.hero-button');

const heroSectionDesk = document.querySelector('.hero-section-decktop');

const colors = ['#ed3b44', '#2B4441', '#0041e8'];

const localIndex = Number(localStorage.getItem('index_color'));
let indexColor = localIndex;

buttonHero.addEventListener('click', () => {
  if (indexColor <= 1) {
    indexColor += 1;
  } else {
    indexColor = 0;
  }

  heroButtonColor.forEach(element => {
    if (heroButtonColor[indexColor] === element) {
      element.style.color = colors[indexColor];
      if (colors[indexColor] === '#2B4441') {
        element.style.color = '#09b109';
      }
    } else {
      element.style.color = '';
    }
  });

  document.documentElement.style.setProperty('--main-red', colors[indexColor]);
  if (colors[indexColor] === '#2B4441') {
    buttonHero.style.borderColor = '#09b109';
  } else {
    buttonHero.style.borderColor = colors[indexColor];
  }

  if (indexColor === 1) {
    console.log('green');
    heroSection.classList.add('hero-sectio-one');
  } else if (indexColor === 2) {
    console.log('blue');
    heroSection.classList.remove('hero-sectio-one');
    heroSection.classList.add('hero-sectio-two');
  } else {
    heroSection.classList.remove('hero-sectio-two');
  }

  localStorage.setItem('index_color', indexColor);
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1440) {
    document.documentElement.style.setProperty('--main-red', '#ed3b44');
  } else {
    document.documentElement.style.setProperty(
      '--main-red',
      colors[indexColor]
    );
  }

  if (indexColor === 1) {
    heroSection.classList.add('hero-sectio-one');
  } else if (indexColor === 2) {
    heroSection.classList.remove('hero-sectio-one');
    heroSection.classList.add('hero-sectio-two');
  } else {
    heroSection.classList.remove('hero-sectio-two');
  }

  if (colors[indexColor] === '#2B4441') {
    buttonHero.style.borderColor = '#09b109';
  } else {
    buttonHero.style.borderColor = colors[indexColor];
  }

  heroButtonColor.forEach(element => {
    if (heroButtonColor[indexColor] === element) {
      element.style.color = colors[indexColor];
      if (colors[indexColor] === '#2B4441') {
        element.style.color = '#09b109';
      }
    } else {
      element.style.color = '';
    }
  });
});

function checkIfCoversInView() {
  if (window.innerWidth < 1440) {
    document.documentElement.style.setProperty('--main-red', '#ed3b44');
  } else {
    document.documentElement.style.setProperty(
      '--main-red',
      colors[indexColor]
    );
  }
}

window.addEventListener('resize', checkIfCoversInView);
