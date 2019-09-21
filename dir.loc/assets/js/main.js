$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('#prev-arrow'),
		nextArrow: $('#next-arrow')
	});
	$.scrollify({
		section : ".fullpage"
	});
	$('.trigger').on('click', function(){
		$('.modal-wrapper').toggleClass('open');
		$('.overlay').toggleClass('block');
		$('#main').toggleClass('blur');
		return false;
	});
	$('.prices').on('click', function(){
		$('.first').css('display', 'none');
		$('.second').css('display', 'flex');
		$('.information').css('display', 'flex');
		$('.places').css('display', 'flex');
		$('.prices').css('display', 'none');
		$('#list-desc-info>.container:nth-child(4)>h2').css('left', '-3px');
		document.getElementById('tablet').innerHTML = 'Наши цены';
	});
	$('.information').on('click', function(){
		$('.first').css('display', 'flex');
		$('.second').css('display', 'none');
		$('.information').css('display', 'none');
		$('.places').css('display', 'none');
		$('.prices').css('display', 'flex');
		$('#list-desc-info>.container:nth-child(4)>h2').css('left', '60px');
		document.getElementById('tablet').innerHTML = 'Основная информация';
	});
	$('.places').on('click', function(){
		$('.first').css('display', 'none');
		$('.second').css('display', 'none');
		$('.third').css('display', 'flex');
		$('.information').css('display', 'none');
		$('.places').css('display', 'none');
		$('.prices').css('display', 'none');
		$('.prices2').css('display', 'flex');
		$('#list-desc-info>.container:nth-child(4)>h2').css('left', '-60px');
		document.getElementById('tablet').innerHTML = 'Места размещения';
	});
	$('.prices2').on('click', function(){
		$('.first').css('display', 'none');
		$('.second').css('display', 'flex');
		$('.third').css('display', 'none');
		$('.information').css('display', 'flex');
		$('.places').css('display', 'flex');
		$('.prices').css('display', 'none');
		$('.prices2').css('display', 'none');
		$('#list-desc-info>.container:nth-child(4)>h2').css('left', '-3px');
		document.getElementById('tablet').innerHTML = 'Наши цены';
	});
});