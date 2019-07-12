$(document).ready(function(){
	var cont = $('.container').width();
	var dw = document.documentElement.clientWidth;
	var dwc = (dw - cont)/2;
	$('.slide>.text').css({'left':dwc+'px'});
	$('.catalog').css({'left':'-'+dwc+'px'});
	$('.catalog').css({'padding-left':dwc+'px'});

	$('.slider').slick({
		arrows: true,
		dots: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
	$('.slick-dots').css({'right':dwc+'px'});
	$('.arrows').css({'right':dwc+'px'});
});