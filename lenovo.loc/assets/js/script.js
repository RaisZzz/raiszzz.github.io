$(document).ready(function(){
	$('#open').on('click', function(){
		$('#close').removeClass('none');
		$('#open').removeClass('block');
		$('#open').addClass('none');
		$('#close').addClass('block');
		$('.mobile-menu>nav').addClass('block');
	});
	$('#close').on('click', function(){
		$('#open').removeClass('none');
		$('#close').removeClass('block');
		$('.mobile-menu>nav').removeClass('block');
		$('#close').addClass('none');
		$('#open').addClass('block');
	});
});