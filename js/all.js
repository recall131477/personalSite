$(document).ready(function () {

  AOS.init({
    duration: 1000,
    once: true,
  });

  setTimeout(function () {
    $('body').addClass('show');
  }, 1000);

  //當滑動到特定區塊時加入特定Class
  $(window).scroll(function () {

    if ($(window).scrollTop() >= $('.works__section').offset().top) {
      $('.header__scorll a').addClass('header__scorllArrowTop');
    } else {
      $('.header__scorll a').removeClass('header__scorllArrowTop');
    }
  });

});

$(document).ready(function () {

  //網頁載入完畢後body加入Class('show')
  $('body').addClass('show');

  //點擊滑動到特定區塊
  $('.header__scorllArrow').click(function (e) {

    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('.works__section').offset().top
    }, 800, 'swing');

  });

  //當滑動到特定區塊時加入特定Class
  $(window).scroll(function () {

    if ($(window).scrollTop() >= $('.works__section').offset().top) {
      $('.header__scorll a').addClass('header__scorllArrowTop');
    } else {
      $('.header__scorll a').removeClass('header__scorllArrowTop');
    }

  });

});