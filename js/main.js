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
//Обработка форм
$('.form').each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Please enter a name longer than 2 letters",
      },
      phone: "Please enter your phone number",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
});
//Маска для телефона
$(document).ready(function () {
  $("#phone").mask("+7 (999) 999-99-99");
});
//Анимация
AOS.init();
//google карта
const map = document.querySelector('.map')
map.addEventListener('click', () => {
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.0474214391784!2d98.2942563!3d7.8901079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sru!4v1596687171109!5m2!1sru!2sru" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
})