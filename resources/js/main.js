
$(document).ready(function(){
  $('.carousel').slick({
      autoplay: true,
      mobileFirst: true,
      autoplaySpeed: 4000,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipeToSlide: true,
  });

  // var x = 0;
  // var y = $(this).scrollTop();
  // window.scroll(x, y);
  // if (y - x > 50) {
  //   var z = $('.navigation-bar').css('height');
  //  $('.navbar').animate({top: '-' + z}, 150);
  // }

});

