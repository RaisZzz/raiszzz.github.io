$('#menu-btn').click(function() {
  $('#submenu').toggleClass('show-menu');
})

$('.submenu-li1').click(function(){
	$('.submenu-2').removeClass('visible-div');
	$(this).find('.submenu-2').addClass('visible-div');
});