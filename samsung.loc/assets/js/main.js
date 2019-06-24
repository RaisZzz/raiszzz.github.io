$(document).ready(function(){
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
			if ($(this).scrollTop() >= 80) {
				$('.timeline-item:nth-child(1)').css('opacity', '1');
				$('.timeline-item:nth-child(1)').css('left', '0');
			}
			if ($(this).scrollTop() >= 160) {
				$('.timeline-item:nth-child(2)').css('opacity', '1');
				$('.timeline-item:nth-child(2)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 240) {
				$('.timeline-item:nth-child(3)').css('opacity', '1');
				$('.timeline-item:nth-child(3)').css('left', '0');
			}
			if ($(this).scrollTop() >= 320) {
				$('.timeline-item:nth-child(4)').css('opacity', '1');
				$('.timeline-item:nth-child(4)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 400) {
				$('.timeline-item:nth-child(5)').css('opacity', '1');
				$('.timeline-item:nth-child(5)').css('left', '0');
			}
			if ($(this).scrollTop() >= 480) {
				$('.timeline-item:nth-child(6)').css('opacity', '1');
				$('.timeline-item:nth-child(6)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 560) {
				$('.timeline-item:nth-child(7)').css('opacity', '1');
				$('.timeline-item:nth-child(7)').css('left', '0');
			}
			if ($(this).scrollTop() >= 640) {
				$('.timeline-item:nth-child(8)').css('opacity', '1');
				$('.timeline-item:nth-child(8)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 720) {
				$('.timeline-item:nth-child(9)').css('opacity', '1');
				$('.timeline-item:nth-child(9)').css('left', '0');
			}
			if ($(this).scrollTop() >= 800) {
				$('.timeline-item:nth-child(10)').css('opacity', '1');
				$('.timeline-item:nth-child(10)').css('right', 'calc(-50% - 13px)');
			}
			if ($(this).scrollTop() >= 2100) {
				$('#technology>.container>.blocks>.col:nth-child(1)').css('opacity', '1');
				$('#technology>.container>.blocks>.col:nth-child(1)').css('top', '0');
				$('#technology>.container>.blocks>.col:nth-child(2)').css('opacity', '1');
				$('#technology>.container>.blocks>.col:nth-child(2)').css('bottom', '0');
			}
		}
	});
});