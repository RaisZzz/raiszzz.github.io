$(document).ready(function(){
	$('.movie-slider').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});

	var comm_1 = document.getElementById('comm-1');
	var comm_2 = document.getElementById('comm-2');

	comm_1.scrollTop = '60';
	comm_2.scrollTop = '140';

	// Dark-Theme
	$('.theme-btn').on('click', function(){
		if(document.getElementById('theme-btn').innerHTML == 'DARK'){
			document.getElementById('theme-btn').innerHTML = 'LIGHT';
		} else{
			document.getElementById('theme-btn').innerHTML = 'DARK';
		}
		$('.theme-btn').toggleClass('white-bg');
		$('.theme-btn p').toggleClass('black-text');
		$('#header').toggleClass('black-bg');
		$('body').toggleClass('black-bg');
		$('#header a.logo').toggleClass('white-text');
		$('#header .header nav ul li a').toggleClass('white-text');
		$('#header .header .logreg a.login').toggleClass('white-text');
		$('#head h1').toggleClass('white-text');
		$('#head h3').toggleClass('white-text');
		$('#features h2').toggleClass('white-text');
		$('#features .feature-desc').toggleClass('white-text');
		$('#features .row .col h3').toggleClass('white-text');
		$('#features .row .col p').toggleClass('white-text');
		$('#head .left img').toggleClass('white-img');
		$('#description h2').toggleClass('white-text');
		$('#description p').toggleClass('white-text');
		$('#description .row h4').toggleClass('white-text');
		$('#footer h2').toggleClass('white-text');
		$('#footer h3').toggleClass('white-text');
		$('#footer p').toggleClass('white-text');
		$('#footer .row a').toggleClass('white-text');
		$('#footer h4').toggleClass('white-text');
	});
});