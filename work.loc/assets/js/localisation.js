document.querySelectorAll('.english_lang_switch').forEach(elem => {
	elem.addEventListener('click', function(){
		document.querySelectorAll('*[data-en]').forEach(elem => {
			elem.innerHTML = elem.dataset.en;
		});

		document.querySelectorAll('.current-lang').forEach(elem => {
			elem.querySelector('.lang-icon').remove();
			elem.querySelector('.lang-name').innerHTML = 'English';
			let img = document.createElement('img');
			img.className = 'lang-icon';
			img.src = './assets/img/eng.png';
			elem.prepend(img);
		});
	});
});
document.querySelectorAll('.russia_lang_switch').forEach(elem => {
	elem.addEventListener('click', function(){
		document.querySelectorAll('*[data-ru]').forEach(elem => {
			elem.innerHTML = elem.dataset.ru;
		});

		document.querySelectorAll('.current-lang').forEach(elem => {
			elem.querySelector('.lang-icon').remove();
			elem.querySelector('.lang-name').innerHTML = 'Русский';
			let img = document.createElement('img');
			img.style.boxShadow = '0 0 10px 0.25px rgba(0,0,0,0.25)';
			img.className = 'lang-icon';
			img.src = './assets/img/ru.png';
			elem.prepend(img);
		});
	});
});