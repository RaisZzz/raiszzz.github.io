btn = document.getElementById('submenu');
$('#menu-btn').click(function toggle(el) {
	btn.style.opacity = (btn.style.opacity == '0') ? '1' : '0';
	btn.style.display = (btn.style.display == 'none') ? 'flex' : 'none';
})
$('.submenu-li1').click(function(){
	$('.submenu-2').removeClass('visible-div');
	$(this).find('.submenu-2').addClass('visible-div');
});