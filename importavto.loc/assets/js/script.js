$(document).ready(function(){
	var cont = $('.container').width();
	var cat = $('.catalog').width();
	var dw = document.documentElement.clientWidth;
	var dwc = (dw - cont)/2;
	$('.slide>.text').css({'left':(dwc + cat)+'px'});
	$('.catalog').css({'left':'-'+dwc+'px'});
	$('.catalog').css({'padding-left':dwc+'px'});
	$('.container-2').css({'width':(cont - cat*2)+'px'});
	$('#vert-h').css({'left':(dwc)+'px'});

	$('.slider').slick({
		arrows: true,
		dots: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
	$('.slick-dots').css({'right':(dwc + cat)+'px'});
	$('.arrows').css({'right':(dwc + cat)+'px'});
});