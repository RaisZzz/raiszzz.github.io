// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('.canvas_input').forEach(elem => {
		let text = elem.dataset.value;
		let p = document.createElement('p');
		p.innerHTML = text;
		p.className = 'canvas_input';
		elem.parentNode.parentNode.append(p);
		elem.remove();
	});
});