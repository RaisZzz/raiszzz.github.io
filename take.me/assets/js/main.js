let toggle = true;

document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('.icon').forEach(elem => {
		icon_anim({}, elem, elem.parentNode, toggle);
	});
});

function icon_anim(args, icon, circle, toggle){
	icon.onmouseenter = function(){
		toggle = false;
		icon.querySelector('.desc').classList.add('active');
		icon.onmousemove = function(){
			if(event.target.className == 'desc' || event.target.className == ''){
				toggle = true;
				icon.querySelector('.desc').classList.remove('active');
			}
		}
	}
	icon.onmouseleave = function(){
		toggle = true;
		icon.querySelector('.desc').classList.remove('active');
	}
	var $ = {
		radius : circle.offsetWidth/2,
		speed : 5
	}
	var f = Math.random() * 360;
	var s = 2 * Math.PI / 180 / 10;
	setInterval(function anim() {
		if(toggle == true){
			f += s;
			icon.style.left = $.radius - icon.offsetWidth/2 + $.radius * Math.sin(f) + 'px';
			icon.style.top =  $.radius - icon.offsetWidth/2 + $.radius * Math.cos(f) + 'px';
		}
	}, $.speed)
}