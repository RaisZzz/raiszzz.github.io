// Mobile Menu
document.getElementById('burger').addEventListener('click', function(){
	document.getElementById('mobile-menu').classList.toggle('active');
});

// Language Drop
document.querySelectorAll('.current-lang').forEach(elem => {
	elem.addEventListener('click', function(){
		elem.parentNode.querySelector('.lang__dropDown').classList.toggle('active');
		elem.querySelector('.lang-arrow').classList.toggle('active');
	});
});
document.body.addEventListener('click', function(){
	if(event.target.className != 'lang__dropDown__list-item-link' && event.target.className != 'lang-name' && event.target.className != 'row current-lang' && event.target.className != 'lang-arrow active' && event.target.className != 'lang-arrow'){
		document.querySelectorAll('.lang__dropDown').forEach(elem => {
			elem.className = 'lang__dropDown lang-drop-down-js';
			elem.parentNode.querySelector('.current-lang').querySelector('.lang-arrow').classList.remove('active');
		});
	}
});


// Delete confirm
document.querySelectorAll('.delete').forEach(elem => {
	elem.onclick = function(){
		document.getElementById('delete_confirm').classList.add('active');
		document.getElementById('cancel_delete').addEventListener('click', function(){
			document.getElementById('delete_confirm').classList.remove('active');
		});
		document.getElementById('confirm_delete').onclick = function(){
			let key = elem.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.id;
			document.getElementById('confirm_delete').onclick = null;
			document.getElementById('delete_confirm').classList.remove('active');
		}
	}
});
document.body.addEventListener('click', function(){
	if(event.target.className != 'setting-icon' && event.target.className != 'delete'){
		document.querySelectorAll('.settings-list').forEach(elem => {
			elem.className = 'settings-list';
		});
	}
});

// Create canvas
document.getElementById('create_canvas').addEventListener('click', function(){
	document.getElementById('create_modal').classList.add('active');
});
document.getElementById('create_modal').addEventListener('click', function(){
	document.getElementById('create_modal').classList.remove('active');
});

// Logined Drop
document.querySelectorAll('.header__right-enter-logined .name').forEach(elem => {
	elem.addEventListener('click', function(){
		elem.parentNode.querySelector('.list').classList.toggle('active');
	});
});
// Canvases List
document.getElementById('current_canvas').addEventListener('click', function(){
	document.getElementById('current_canvas').parentNode.querySelector('nav').classList.toggle('active');
});
document.querySelectorAll('.setting-icon').forEach(elem => {
	elem.addEventListener('click', function(){
		elem.parentNode.querySelector('.settings-list').classList.toggle('active');
	});
});