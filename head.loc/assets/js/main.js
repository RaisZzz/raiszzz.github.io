$(document).ready(function(){
	$('.step').click(function(){
		$(this).find('.sub-step').toggleClass('visible');
	});
	$('.popto').click(function(){
		$($(this).attr('href')).toggleClass('popup-visible');
		$('.overlay').toggleClass('overlay-visible');
	});
	$('.close').click(function(){
		$('.overlay').toggleClass('overlay-visible');
		$('.popup').toggleClass('popup-visible')
	});
});