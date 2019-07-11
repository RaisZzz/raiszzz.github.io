$(document).ready(function(){
	$('h1').css('opacity', '1');
	$('#timeline>.container>h3').css('opacity', '1');
	$('.logo').css('opacity', '1');
	$('#timeline>.container>p').css('opacity', '1');
	var news = $('#technology>.container>.blocks>.col>.block>.img>img').width();
	$('#technology>.container>.blocks>.col>.block>.img>img').css({'height':news+'px'});
	$('#header-slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '0px',
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: $('#left-arrow'),
		nextArrow: $('#right-arrow')
	});
	$('#mobile-slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '0px',
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: $('#mobile-left-arrow'),
		nextArrow: $('#mobile-right-arrow')
	});
	$('.footer-slider').slick({
		infinite: true,
		centerMode: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		prevArrow: $('#footer-left-arrow'),
		nextArrow: $('#footer-right-arrow')
	});
	const slider = $(".slider");
	slider.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(slider).slick('slickPrev');
		} else {
			$(slider).slick('slickNext');
		}
	}));
	$(window).scroll(function(){

		var st = $(this).scrollTop();

		if($(window).width() >= 1196){
			if ($(this).scrollTop() >= 280) {
				$('.timeline-item:nth-child(1)').css('opacity', '1');
				$('.timeline-item:nth-child(1)').css('left', '0');
			}
			if ($(this).scrollTop() >= 360) {
				$('.timeline-item:nth-child(2)').css('opacity', '1');
				$('.timeline-item:nth-child(2)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 440) {
				$('.timeline-item:nth-child(3)').css('opacity', '1');
				$('.timeline-item:nth-child(3)').css('left', '0');
			}
			if ($(this).scrollTop() >= 520) {
				$('.timeline-item:nth-child(4)').css('opacity', '1');
				$('.timeline-item:nth-child(4)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 600) {
				$('.timeline-item:nth-child(5)').css('opacity', '1');
				$('.timeline-item:nth-child(5)').css('left', '0');
			}
			if ($(this).scrollTop() >= 680) {
				$('.timeline-item:nth-child(6)').css('opacity', '1');
				$('.timeline-item:nth-child(6)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 760) {
				$('.timeline-item:nth-child(7)').css('opacity', '1');
				$('.timeline-item:nth-child(7)').css('left', '0');
			}
			if ($(this).scrollTop() >= 840) {
				$('.timeline-item:nth-child(8)').css('opacity', '1');
				$('.timeline-item:nth-child(8)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 920) {
				$('.timeline-item:nth-child(9)').css('opacity', '1');
				$('.timeline-item:nth-child(9)').css('left', '0');
			}
			if ($(this).scrollTop() >= 1000) {
				$('.timeline-item:nth-child(10)').css('opacity', '1');
				$('.timeline-item:nth-child(10)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 1300) {
				$('#technology>.container>h2').css('opacity', '1');
			}
			if ($(this).scrollTop() >= 1500) {
				$('#technology>.container>.blocks>.col:nth-child(1)').css('opacity', '1');
				$('#technology>.container>.blocks>.col:nth-child(1)').css('top', '0');
				$('#technology>.container>.blocks>.col:nth-child(2)').css('opacity', '1');
				$('#technology>.container>.blocks>.col:nth-child(2)').css('bottom', '0');
				$('#technology>.container>.blocks>.col:nth-child(3)').css('opacity', '1');
				$('#technology>.container>.blocks>.col:nth-child(3)').css('top', '0');

			}
			if ($(this).scrollTop() >= 3200) {
				$('#gallery>.container>h2').css('opacity', '1');
				$('#gallery>.container>h3').css('opacity', '1');
			}
			if ($(this).scrollTop() >= 3800) {
				$('#choose>.container>h2').css('opacity', '1');
			}
			if ($(this).scrollTop() >= 4800) {
				$('#footer>.container>h2').css('opacity', '1');
			}
		}
	});
});