$4.onInit("jQuery Slick",function($){
	$(document).ready(function() {
		$('.infinix-slider').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			prevArrow: $('.infinix-arrow-prev'),
			nextArrow: $('.infinix-arrow-next'),
			dots: true
		});
	});
});