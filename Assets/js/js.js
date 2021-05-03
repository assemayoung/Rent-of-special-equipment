// $(document).ready(function(){
	$('.myslide').slick({
		infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true, // не показывать стрелки
dots: true, // показывать точки индикаторы
dotsClass: 'slick-dots',
responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
	});
	$('.inner-slide').slick({
		slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // не показывать стрелки
dots: true, // показывать точки индикаторы
dotsClass: 'slick-dots'
	});


	$(".carousel").carousel({
         interval : false
});


// });