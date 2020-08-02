var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: true,
});
var reviwsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: true,
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  console.log('Клик по меню');
  document.querySelector(".navbar-buttom").classList.toggle('navbar-buttom--visible');
});