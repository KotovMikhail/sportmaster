let swiper2 = new Swiper('.s2', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.main-slider__btn-next',
    prevEl: '.main-slider__btn-prev',
  },

  autoplay: false,

  breakpoints: {
    900: {
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      autoplay: true,
    }
  }
});
