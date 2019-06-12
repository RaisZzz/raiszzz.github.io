$(window).on('load', function () {
	$preloader = $('.loaderArea'),
	$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

$(window).scroll(function(){

	var st = $(this).scrollTop();

	$('.b-bg>img').css({
		'transform' : 'translate(0%, -' + (st/10-80) + '%)'
	});

	$('.parallax-brand>img').css({
		'transform' : 'translate(0%, -' + (st/10-80) + '%)'
	});

	$('.parallax>img').css({
		'transform' : 'translate(0%, -' + (st/10-60) + '%)'
	});

	$('.s-bg>img').css({
		'transform' : 'translate(0%, -' + (st/10-160) + '%)'
	});

	$('.mobil>img').css({
		'transform' : 'translate(0%, -' + (st/10-180) + '%)'
	});

	$('.m-bg>img').css({
		'transform' : 'translate(0%, -' + (st/10-230) + '%)'
	});

});

$('#menu-btn').click(function() {
  $('#submenu').toggleClass('zi-menu');
  $('body').toggleClass('body-scroll');
  $('.bottom').toggleClass('hbtn-b');
  function sub(){
    $('#sub-bg').toggleClass('bg-active');
    $('#sub-bg').toggleClass('bg-non-active');
    $('#submenu').toggleClass('show-menu');
    $('#submenu>nav').toggleClass('show-nav');
    $('.bottom').toggleClass('hbtn-b-d');
  }
  setTimeout(sub, 200);
})

$('.submenu-li1').click(function(){
	$('.submenu-2').removeClass('visible-div');
	$(this).find('.submenu-2').addClass('visible-div');
});

$('#slider-2').on('afterChange', function(){
	count = document.getElementById("counter");
	text = count.textContent;
	if(text == '01'){
		count.innerHTML = '02';
	}
	else if(text == '02'){
		count.innerHTML = '03'
	}
	else if(text == '03'){
		count.innerHTML = '04'
	}
	else if(text == '04'){
		count.innerHTML = '01'
	}
})
$('#slider-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$('.slider-2').addClass('slide-next');
	$('.hbg').addClass('slide-next');
	$('.slide>img:nth-child(1)').addClass('laptop');
	$('.slide>img:nth-child(2)').addClass('phone');
	function slide(){
		$('.slider-2').removeClass('slide-next');
		$('.hbg').removeClass('slide-next');
		$('.slide>img:nth-child(1)').removeClass('laptop');
		$('.slide>img:nth-child(2)').removeClass('phone');
	}
	setTimeout(slide, 5000);
});

$('#slider-3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$('.slider3-loader').addClass('slider3-loader-anim');
	function slide3(){
		$('.slider3-loader').removeClass('slider3-loader-anim');
	}
	setTimeout(slide3, 5000);
})

$(document).ready(function(){

	const $nextBtn = $(".progress")[0];

	$('.slider-2').on('init', function () {
		$($nextBtn).addClass('active');
	});

	$('.slider-2').on('beforeChange', function(){
		$($nextBtn).removeClass('active');
	});

	$('.slider-2').on('afterChange', function(){
		$($nextBtn).addClass('active');
	});

});

$(document).ready(function(){

	const $next = $(".slider3-loader")[0];

	$('.slider-3').on('init', function () {
		$($next).addClass('slider3-loader-anim');
	});

	$('.slider-3').on('beforeChange', function(){
		$($next).removeClass('slider3-loader-anim');
	});

	$('.slider-3').on('afterChange', function(){
		$($next).addClass('slider3-loader-anim');
	});

});

$(function(){
	$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();
		var sc = $(this).attr("href"),
		dn = $(sc).offset().top;
		$('html, body').animate({scrollTop: dn}, 1000);
	});
});

window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("scrollbar").style.width = scrolled + "%";
}