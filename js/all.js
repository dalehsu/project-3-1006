$(document).ready(function() {

  //menu下拉式選單
  $('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  $(window).on('load', function(){  
    $('#slider').nivoSlider(); 
  });

  // lightbox 效果
  // lightbox.option({
  //       'resizeDuration': 2000,
  //       'wrapAround': true
  //     });
   $('.backtotop a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
 });

});