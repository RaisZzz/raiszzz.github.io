$(document).ready(function () {
	$('#loader').load('../home.html')
	$('#home').click(function () {
		$('#loader').load('../home.html')
	})
	$('#news').click(function () {
		$('#loader').load('../news.html')
	})
	$('#calc').click(function () {
		$('#loader').load('../calc.html')
	})

	//Проверка разделов на доступность
	var closed = document.getElementsByClassName('closed');
	for (var i = 0; i < closed.length; i++) {
		closed[i].onclick = function() {
			Swal.fire({
				title: 'Ошибка!',
				text: 'Извините, в данный момент раздел недоступен',
				type: 'error',
				confirmButtonText: 'Закрыть'
			})
		}
	}

	//Меню
	var menu_open = document.getElementById('menu-open');
	var menu_close = document.getElementById('menu-close');
	var menu = document.getElementById('menu');
	var main_page = document.getElementById('loader');
	var left = document.getElementById('left-bar-menu');
	menu_open.onclick = function() {
		menu.setAttribute('style', 'display: block;');
		left.setAttribute('style', 'width: 20% !important;');
		menu_open.setAttribute('style', 'display: none;');
		menu_close.setAttribute('style', 'display: block;');
	}
	menu_close.onclick = function() {
		menu.setAttribute('style', 'display: none;');
		left.setAttribute('style', 'width: 5% !important;');
		menu_open.setAttribute('style', 'display: block;');
		menu_close.setAttribute('style', 'display: none;');
	}
});