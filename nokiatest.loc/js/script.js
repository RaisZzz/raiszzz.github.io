$4.onInit("jQuery",function($){
	$('#nokia9btn').on('click', function(){
		$('#nokia9').css('display', 'flex');
		$('#nokia4').css('display', 'none');
		$('#nokia3').css('display', 'none');
		$('#nokia2').css('display', 'none');
		$('#nokia9btn').css('background', '#F26352');
		$('#nokia4btn').css('background', 'none');
		$('#nokia3btn').css('background', 'none');
		$('#nokia2btn').css('background', 'none');
	});
	$('#nokia4btn').on('click', function(){
		$('#nokia4').css('display', 'flex');
		$('#nokia9').css('display', 'none');
		$('#nokia3').css('display', 'none');
		$('#nokia2').css('display', 'none');
		$('#nokia4btn').css('background', '#F26352');
		$('#nokia9btn').css('background', 'none');
		$('#nokia3btn').css('background', 'none');
		$('#nokia2btn').css('background', 'none');
	});
	$('#nokia3btn').on('click', function(){
		$('#nokia3').css('display', 'flex');
		$('#nokia9').css('display', 'none');
		$('#nokia4').css('display', 'none');
		$('#nokia2').css('display', 'none');
		$('#nokia3btn').css('background', '#F26352');
		$('#nokia9btn').css('background', 'none');
		$('#nokia4btn').css('background', 'none');
		$('#nokia2btn').css('background', 'none');
	});
	$('#nokia2btn').on('click', function(){
		$('#nokia2').css('display', 'flex');
		$('#nokia9').css('display', 'none');
		$('#nokia4').css('display', 'none');
		$('#nokia3').css('display', 'none');
		$('#nokia2btn').css('background', '#F26352');
		$('#nokia9btn').css('background', 'none');
		$('#nokia4btn').css('background', 'none');
		$('#nokia3btn').css('background', 'none');
	});
})