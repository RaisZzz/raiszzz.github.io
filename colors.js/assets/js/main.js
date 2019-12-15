var main = document.getElementById('main');

var ctx = main.getContext('2d');

var isdown = true;

var mouseDown = 0;

main.onmousedown = function(){ 
	++mouseDown;
}
main.onmouseup = function(){
	--mouseDown;
}

// Colors
for (var i = 0; i < $('.color').length; i++) {
	$('.color')[i].style.background = $('.color')[i].getAttribute('data-color');
}
var picked_color = $('.color')[0].getAttribute('data-color');
var radius = $('#size').val();

$('#main').mousemove(function(e){

	if(mouseDown){
		var offset = $(this).offset();
		var relativeX = (e.pageX - offset.left);
		var relativeY = (e.pageY - offset.top);

		ctx.beginPath();
		ctx.arc(relativeX, relativeY, radius, 0, 2*Math.PI, false);
		ctx.fillStyle = picked_color;
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = picked_color;
		ctx.stroke();
	}

}).mouseout(function(){
	mouseDown = 0;
});


// Change picked color (alpha-version)
$('#color-1').on('click', function(){
	picked_color = document.getElementById('color-1').getAttribute('data-color');
	$('#color-1').addClass('picked');
	$('#color-2').removeClass('picked');
	$('#color-3').removeClass('picked');
	$('#color-4').removeClass('picked');
	$('#color-5').removeClass('picked');
});
$('#color-2').on('click', function(){
	picked_color = document.getElementById('color-2').getAttribute('data-color');
	$('#color-2').addClass('picked');
	$('#color-1').removeClass('picked');
	$('#color-3').removeClass('picked');
	$('#color-4').removeClass('picked');
	$('#color-5').removeClass('picked');
});
$('#color-3').on('click', function(){
	picked_color = document.getElementById('color-3').getAttribute('data-color');
	$('#color-3').addClass('picked');
	$('#color-1').removeClass('picked');
	$('#color-2').removeClass('picked');
	$('#color-4').removeClass('picked');
	$('#color-5').removeClass('picked');
});
$('#color-4').on('click', function(){
	picked_color = document.getElementById('color-4').getAttribute('data-color');
	$('#color-4').addClass('picked');
	$('#color-1').removeClass('picked');
	$('#color-2').removeClass('picked');
	$('#color-3').removeClass('picked');
	$('#color-5').removeClass('picked');
});
$('#color-5').on('click', function(){
	picked_color = document.getElementById('color-5').getAttribute('data-color');
	$('#color-5').addClass('picked');
	$('#color-1').removeClass('picked');
	$('#color-2').removeClass('picked');
	$('#color-3').removeClass('picked');
	$('#color-4').removeClass('picked');
});

// Picked size
var min_range = document.getElementById('min_range');
var max_range = document.getElementById('max_range');
var input_range = document.getElementById('size');

min_range.innerHTML = input_range.getAttribute('min');
max_range.innerHTML = input_range.getAttribute('max');

$('#size').change(function(){
	radius = $('#size').val();
});