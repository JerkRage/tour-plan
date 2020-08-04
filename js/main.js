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

var modalButton = $('[data-toggle="modal"]');
var closeModalButton = $('.modal__close');
var keyboardCloseModal
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

function openModal() {
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
};

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
};
// Закрытие по клавише Esc.
$(document).keydown(function (e) {
  if (e.keyCode === 27) {
    e.stopPropagation();
    $('.modal__overlay').removeClass('modal__overlay--visible');
    $('.modal__dialog').removeClass('modal__dialog--visible');
  }
});