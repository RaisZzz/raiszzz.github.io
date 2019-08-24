$(document).ready(function(){

	first_array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	second_array = ['9', '0', '8', '1', '7', '2', '6', '3', '5', '4'];

	text = document.getElementById('text');


	$('#text').on('change', function(){
		msg = text.value;
		a = [].map.call(msg, function(x, i) {
			return second_array[first_array.indexOf(x)];
		}).join('');
		alert(a);
	});
});