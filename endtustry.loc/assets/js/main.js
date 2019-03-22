$('#menu-btn').click(function() {
  $('#submenu').toggleClass('show-menu');
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