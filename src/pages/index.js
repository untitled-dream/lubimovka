import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './index.css';
import { popupPhotoGallery, imageGallerySelector } from '../utils/constants.js';
import PopupPhotoGallery from '../components/PopupPhotoGallery.js';
import Scroll from '../components/Scroll.js';

const galleryView = new PopupPhotoGallery(popupPhotoGallery);
galleryView.setEventListener();

document.querySelectorAll(imageGallerySelector).forEach(photo => {
  photo.addEventListener('click', () => galleryView.open(photo))
});

/*
//import Slider from '../components/Slider.js';
const sliderWithReviews = new Slider({sliderSelector: '.slider_reviews'})
sliderWithReviews.setListeners();
*/

/* Play Video */
const video = document.querySelector('.project-article__video');
const videoPlayButton = document.querySelector('.project-article__video-cover');

videoPlayButton.addEventListener('click', () => {
  videoPlayButton.style.display = 'none';
  video.src += '&autoplay=1';
});

/* Scrolling */

const scroll = new Scroll({ selector: '.scroll-to-up' });

scroll._buttonScroll.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }, { once: true })
});

window.onscroll = () => scroll.scrollToTop();

/* Slider with Swiper */
Swiper.use([Navigation, Pagination]);

var reviewSlider = new Swiper('.slider', {
  slideClass: 'slider__item',
  slideActiveClass: 'slider__item_active',
  spaceBetween: 30,
  wrapperClass: 'slider__items-container',
  
  grabCursor: true,
  rewind: true,

  navigation: {
    prevEl: '.slider__button-prev',
    nextEl: '.slider__button-next',
    disabledClass: 'slider__button_disable'
  },

  pagination: {
    el: '.slider__pagination',
    clickable: true,
    bulletClass: 'slider__dot',
    bulletActiveClass: 'slider__dot_active',
    horizontalClass: 'slider__markers',
  }
});