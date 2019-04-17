$(document).ready(function(){
	$('.step').click(function(){
		$(this).find('.sub-step').toggleClass('visible');
	})
});