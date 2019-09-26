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
	var slider = $(".slider");
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
				$('#technology>.container .blocks>.col:nth-child(1)').css('opacity', '1');
				$('#technology>.container .blocks>.col:nth-child(1)').css('top', '0');
				$('#technology>.container .blocks>.col:nth-child(2)').css('opacity', '1');
				$('#technology>.container .blocks>.col:nth-child(2)').css('bottom', '0');
				$('#technology>.container .blocks>.block').css('opacity', '1');
				$('#technology>.container .blocks>.block').css('top', '0');
				$('#technology>.container .blocks>.col:nth-child(4)').css('opacity', '1');
				$('#technology>.container .blocks>.col:nth-child(4)').css('bottom', '0');

			}
			if ($(this).scrollTop() >= 2400) {
				$('#gallery>.container>h2').css('opacity', '1');
				$('#gallery>.container>h3').css('opacity', '1');
			}
			if ($(this).scrollTop() >= 3100) {
				$('#test>.container>h2').css('opacity', '1');
				$('#test>.container>h3').css('opacity', '1');
			}
			if ($(this).scrollTop() >= 3500) {
				$('#choose>.container>h2').css('opacity', '1');
			}
			if ($(this).scrollTop() >= 4500) {
				$('#footer>.container>h2').css('opacity', '1');
			}
		}
	});

	$.ajax({
		url: 'https://4pda.ru/tag/samsung_tech1/feed/json/', // по какой ссылки делается запрос
		dataType: 'json', // какой тип данных возвращается
		success: function(result) { // данные возвращаются готовым моссивом объектов
			var blocks = [];

			result.forEach(function(block) { // готовим блоки
				blocks.push(`
					<div class="block">
						<a href="https:${block.url}"></a>
						<div class="img">
							<img src="https:${block.img}" alt="">
						</div>
						<h3>${block.title}и</h3>
					</div>
				`);
			});

			// выводим блоки, делая проверку на то, что блок существует
			$('.tech-slider').html(`
				<div class="blocks tech-slide">
					<div class="col">
						${blocks[0] ? blocks[0] : ''}
						${blocks[1] ? blocks[1] : ''}
					</div>
					<div class="col">
						${blocks[2] ? blocks[2] : ''}
						${blocks[3] ? blocks[3] : ''}
					</div>
					${blocks[4] ? blocks[4] : ''}
					<div class="col">
						${blocks[5] ? blocks[5] : ''}
						${blocks[6] ? blocks[6] : ''}
					</div>
				</div>
				<div class="blocks tech-slide">
					<div class="col">
						${blocks[7] ? blocks[7] : ''}
						${blocks[8] ? blocks[8] : ''}
					</div>
					<div class="col">
						${blocks[9] ? blocks[9] : ''}
						${blocks[10] ? blocks[10] : ''}
					</div>
					${blocks[11] ? blocks[11] : ''}
					<div class="col">
						${blocks[12] ? blocks[12] : ''}
						${blocks[13] ? blocks[13] : ''}
					</div>
				</div>
			`);

			// инициализируем слайдер
			$('.tech-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: $('#tech-left-arrow'),
				nextArrow: $('#tech-right-arrow'),
				responsive: [
					{
						breakpoint: 699,
						settings: {
							accessibility: false,
							draggable: false,
							touchMove: false
						}
					}
				]
			});
		},
	});

	// запрос не будет работать, если не поставить плагин https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=ru
	// т.к. запрос делается на другой домен
	$.ajax({
		url: 'http://4pda.ru/tag/samsung_future1/feed/json/', // по какой ссылки делается запрос
		dataType: 'json', // какой тип данных возвращается
		success: function(result) { // данные возвращаются готовым моссивом объектов
			var blocks = [];

			result.forEach(function(block) { // готовим блоки
				blocks.push(`
					<div class="block">
						<a href="https:${block.url}"></a>
						<p>${block.title}</p>
						<img src="https:${block.img}" alt="">
					</div>
				`);
			});

			// выводим блоки, делая проверку на то, что блок существует
			$('.footer-slider').html(` 
				<div class="slide">
						<div class="left">
							${blocks[0] ? blocks[0] : ''}
						</div>
						<div class="right">
							<div class="top">
								${blocks[1] ? blocks[1] : ''}
								${blocks[2] ? blocks[2] : ''}
							</div>
							<div class="bottom">
								${blocks[3] ? blocks[3] : ''}
								${blocks[4] ? blocks[4] : ''}
							</div>
						</div>
					</div>
					<div class="slide">
						<div class="left">
							${blocks[5] ? blocks[5] : ''}
						</div>
						<div class="right">
							<div class="top">
								${blocks[6] ? blocks[6] : ''}
								${blocks[7] ? blocks[7] : ''}
							</div>
							<div class="bottom">
								${blocks[8] ? blocks[8] : ''}
								${blocks[9] ? blocks[9] : ''}
							</div>
						</div>
					</div>
			`);

			// инициализируем слайдер
			$('.footer-slider').slick({
				infinite: true,
				centerMode: false,
				adaptiveHeight: true,
				slidesToShow: 1,
				prevArrow: $('#footer-left-arrow'),
				nextArrow: $('#footer-right-arrow')
			});
		},
	});
});