$(document).ready(function(){
	$('.slider').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		prevArrow: $('#left-arrow'),
		nextArrow: $('#right-arrow')
	});
	$('.footer-slider').slick({
		centerMode: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		prevArrow: $('#footer-left-arrow'),
		nextArrow: $('#footer-right-arrow')
	});
});