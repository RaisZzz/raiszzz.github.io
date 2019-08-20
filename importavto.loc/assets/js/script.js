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

	$('.dark').on('click', function(){
		$('.dark').css({'display':'none'});
		$('.light').css({'display':'block'});
		$('body').css({'background':'#2d3436'});
		$('#header').css({'background':'#2d3436'});
		$('#skills').css({'background':'#636e72'});
		$('.menu').css({'border':'none'});
		$('.cart').css({'border':'none'});
		$('.like').css({'border':'none'});
		$('p').css({'color':'#ffffff'});
		$('a').css({'color':'#ffffff'});
		$('h2').css({'color':'#ffffff'});
		$('.first>p').css({'color':'#ffffff !important'});
		$('.auto>.row>a').css({'background':'#b2bec3'});
	});
	$('.light').on('click', function(){
		$('.light').css({'display':'none'});
		$('.dark').css({'display':'block'});
		$('body').css({'background':'#fff'});
		$('#header').css({'background':'#fff'});
		$('#skills').css({'background':'#f5f5f5'});
		$('p').css({'color':'#202020'});
		$('a').css({'color':'#202020'});
		$('h2').css({'color':'#202020'});
		$('.first>p').css({'color':'#535353 !important'});
		$('.auto>.row>a').css({'background':'#b2bec3'});
	});
});