$( document ).ready(function() {

  //moderniser svg fallback
  /*if(Modernizr.svg) {
      $('img[src*="svg"]').attr('src', function() {
          return $(this).attr('src').replace('.svg', '.png');
      });
  }*/

  //datepicker
	$('#date').fdatepicker({
		format: 'dd-mm-yyyy'
	});

  //slick slider
	$('.food-menu').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
	  arrows: false,
    draggable: false,
    touchMove: false,
    swipe: false
	});
  

  //menu nav
	$(".food-nav a.foodCategories").click(function(e){
        e.preventDefault();
        $(".food-nav a.foodCategories").removeClass('active');
        $(this).addClass('active');
        slideIndex = $(this).prevAll().length;
        $('.food-menu').slick('slickGoTo', parseInt(slideIndex));
        
    });

  $(".menu-select#eat").click(function(e){
    e.preventDefault();
    $(".menu-select").removeClass('active');
    $(this).addClass('active');
    //$('.menu').slick('slickGoTo', 0);
    $('.food').slideDown();
    $('.drinks').slideUp();
  });
  $(".menu-select#drink").click(function(e){
    e.preventDefault();
    $(".menu-select").removeClass('active');
    $(this).addClass('active');
    //$('.menu').slick('slickGoTo', 1);
    $('.food').slideUp();
    $('.drinks').slideDown();
  });

  //show newsletter
	$(".newsletter-anchor").click(function(e){
		e.preventDefault();
    	$(".newsletter-signup").slideToggle();
      //$(".newsletter-signup").toggleClass( 'open' );
    	$("html, body").animate({ scrollTop: $('.newsletter-signup').offset().top });

    });

  //stick nav scrolling
    $( ".sticky-nav a" ).click(function(e){
      e.preventDefault();
      var section = $(this).attr( "id" );
      $("html, body").animate({ scrollTop: $('.' + section).offset().top - 40 });
    });

});

$(window).scroll(function() {  
    stickyNav();  
}); 

function stickyNav() {
  if ($(document).scrollTop() >= 600 && $(window).width() > 650) {
    $('.sticky-nav').addClass('sticky');
  } else {
    $('.sticky-nav').removeClass('sticky');
  }
}

//twitter bg parralax
$(window).resize(function(){
  if ($(window).width() > 650) {
  	Move('.twitter-wrap', 0.6, 0);
  }
   //Move('#gallery61 .slick-active', 0.2, 20);
});

$(window).bind('scroll', function(){
  if ($(window).width() > 650) {
  	Move('.twitter-wrap', 0.6, 0);
  }
	//Move('#gallery61 .slick-slide', 0.2, 20);
});

function Move(elem, shift, offset){
   pos = $(window).scrollTop() - ($(elem).offset().top - offset);
   topMove = pos * shift;

   $(elem).css({
       "background-position" :
       "center " +  topMove + "px" ,
   });

}