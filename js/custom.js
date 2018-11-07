$(document).ready(function(){
  $('.venobox').venobox(); 
    
    
     $('.text_slide').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.client'
        });
    $('.client').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.text_slide',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
        arrows:true,
        centerMode: true,
        centerPadding: '0px',
        autoplay:true
    });

    
});