/*- animation */
$('.first-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInLeft',
    offset: 100
  });

$('.second-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInRight',
    offset: 100
  });

$('.third-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInUp',
    offset: 100
  });

$('.fourth-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInDown',
    offset: 100
  });

$('.five-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInTopLeft',
    offset: 100
  });

$('.six-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInTopRight',
    offset: 100
  });

/*- down scroll -*/ 
const $page = $('html, body');

$('.down-btn').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 700);
  return false;
});

/*- company-slider -*/
var swiper = new Swiper('.company-slider', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.company-slider .swiper-pagination',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }, 
});

/*- brans-slider -*/
var swiper = new Swiper('.brans-slider', {
	autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  speed: 1000,
  slidesPerView: 6,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    680: {
      slidesPerView: 3,
  		spaceBetween: 50,
    },
    809: {
      slidesPerView: 4,
  		spaceBetween: 90,
    },
    1025: {
      slidesPerView: 5,
  		spaceBetween: 130,
    },
  }, 
});

/*- accordion -*/
$('.accordion__header').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});

/*- mobile-menu -*/
$('.menu-btn').click(function(e) {
  $('.m-overlay').addClass('show');
  $('.header__col').addClass('show');
  $('body').addClass('scroll-none');
});

$('.close-btn').click(function(e) {
  $('.m-overlay').removeClass('show');
  $('.header__col').removeClass('show');
  $('body').removeClass('scroll-none');
});

$('.m-overlay').click(function(e) {
  $('.m-overlay').removeClass('show');
  $('.header__col').removeClass('show');
  $('body').removeClass('scroll-none');
});