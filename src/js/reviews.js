import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import axios from 'axios';

new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',
  watchOverflow: true,
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-wrapper',
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1440: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
  },

  virtual: {
    slides: (function () {

    })
  }
});

const baseUrl = 'https://portfolio-js.b.goit.study/api';
const reviewsList = document.querySelector('.reviews-list');

async function getReviews() {
  try {
    let response = await axios.get(`${baseUrl}${'/reviews'}`);

    if (!response.data) {
      throw new Error('Network response was not ok');
    }

    renderReviews(response.data, reviewsList);
  } catch (error) {
    alert.error;
  }
}

getReviews();

function renderReviews(reviews, reviewList) {
  const reviewHTML = reviews
    .map(
      ({ _id, author, avatar_url, review }) =>
        `<li class="reviews-list-item swiper-slide" id="review-${_id}">
                <img
                    class="review-photo"
                    src="${avatar_url}"
                    alt="Reviewer photo"
                    width="48"
                    height="48"
                    loading="lazy"
                />
            <h3 class="review-author">${author}</h3>
            <p class="review-text">
                ${review}
            </p>
      </li>`
    )
    .join('');

  reviewList.insertAdjacentHTML('beforeend', reviewHTML);
  reviewHeightCorrector();
}

function reviewHeightCorrector() {
  let elements = document.querySelectorAll('.reviews-list-item');

  let maxHeight = Math.max(...Array.from(elements, el => el.clientHeight));

  elements.forEach(element => {
    element.style.height = maxHeight + 'px';
  });
}
