$('.radio-btn1').on('click', function(){
	$('.radio-btn1').removeClass('selected');
	$(this).addClass('selected');
	if(this.id == 'comp'){
		$('.imenno').removeClass('i-open');
		$('#i-1').addClass('i-open');
	}
	if(this.id == 'note'){
		$('.imenno').removeClass('i-open');
		$('#i-2').addClass('i-open');
	}
	if(this.id == 'smart'){
		$('.imenno').removeClass('i-open');
		$('#i-3').addClass('i-open');
	}
	if(this.id == 'gadj'){
		$('.imenno').removeClass('i-open');
		$('#i-4').addClass('i-open');
	}
});
$('.radio-btn2').on('click', function(){
	$('.radio-btn2').removeClass('selected');
	$(this).addClass('selected');
});
$('.radio-btn3').on('click', function(){
	$('.radio-btn3').removeClass('selected');
	$(this).addClass('selected');
});
$('.radio-btn4').on('click', function(){
	$(this).toggleClass('selected');
});