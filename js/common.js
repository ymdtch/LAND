$(function() {
  var state = false;
  var scrollpos;
  var navHeight = $('#menu').outerHeight();
  $('.Toggle').click(function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('open');
    if (state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed');
      $('.menu').addClass('open').css('margin-top', 0);
      $('body').append('<div id="modal-overlay"></div>');
      $('#modal-overlay').fadeIn('700');
      state = true;
    } else {
      $('body').removeClass('fixed').css({
        'top': 0
      });
      window.scrollTo(0, scrollpos);
      $('.menu').removeClass('open');
      $('#modal-overlay').fadeOut('700');
      state = false;
    }
  });
});
