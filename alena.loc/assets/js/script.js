$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	$('#modala').on('click', function(){
		$('.modal').addClass('modal-active');
		$('.overlay').addClass('overlay-active');
	});
	$('#close').on('click', function(){
		$('.modal').removeClass('modal-active');
		$('.overlay').removeClass('overlay-active');
	});
	$('.overlay').on('click', function(){
		$('.modal').removeClass('modal-active');
		$('.overlay').removeClass('overlay-active');
	});
});