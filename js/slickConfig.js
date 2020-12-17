$(document).ready(function(){
    $('.slideShow-mainPage').slick({
      //setting-name: setting-value
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      rtl: false,
      swipe: true,
      swipeToSlide: true, 
      waitForAnimate: false,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      fade: true,

    });
  });
 