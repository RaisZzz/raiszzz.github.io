document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('.icon').forEach(elem => {
		icon_anim({}, elem, elem.parentNode);
		elem.onmousedown = function(){
			alert('ok');
		}
	});
});

function icon_anim(args, icon, circle){
	var $ = {
		radius  :     circle.offsetWidth/2,
		speed   :     5
	}
	var f = Math.random() * 360;
	var s = 2 * Math.PI / 180 / 10;
	setInterval(function() {
		f += s;
		  icon.style.left = $.radius - icon.offsetWidth/2 + $.radius * Math.sin(f) + 'px';
		  icon.style.top =  $.radius - icon.offsetWidth/2 + $.radius * Math.cos(f) + 'px';
	}, $.speed)
}