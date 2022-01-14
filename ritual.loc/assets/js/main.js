document.addEventListener('DOMContentLoaded', function() {
	const windowWidth = document.documentElement.clientWidth;

	// Menu mobile
	const menu = document.getElementById('menu');
	const menuBtn = document.getElementById('menu-btn');
	const menuClose = document.getElementById('menu-close');
	menuBtn.addEventListener('click', function() {
		menu.classList.add('active');
	});
	menuClose.addEventListener('click', function() {
		menu.classList.remove('active');
	});

	// Menu scroll to
	const menuItems = document.querySelectorAll('.menu-list__item-link');
	menuItems.forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			const id = item.dataset.href;
			const block = document.querySelector(id);
			const top = block.offsetTop;
			window.scrollTo({
				top: top,
				behavior: 'smooth'
			});
			menu.classList.remove('active');
		});
	});
	// Planes logic
	const planesButtons = document.querySelectorAll('.planes__choose-button');
	const planes = document.querySelectorAll('.planes-grid');
	
	planesButtons.forEach(btn => {
		btn.addEventListener('click', function() {
			const index = btn.dataset.index;
			planesButtons.forEach(btn => btn.classList.remove('active'));
			planes.forEach(plane => plane.classList.remove('active'));

			btn.classList.add('active');
			document.querySelector('.planes-grid[data-index="' + index + '"]').classList.add('active');
		});
	});

	// Video logic
	const video = document.getElementById('video');
	const videoPlay = document.getElementById('video-play');
	const videoImage = document.getElementById('video-image');
	video.style.height = video.clientWidth / 16 * 9 + 'px';

	videoPlay.addEventListener('click', function() {
		videoPlay.remove();
		videoImage.remove();
		video.src += '?autoplay=1';
	});

	// Photos logic
	const photos = document.querySelectorAll('.photos-grid__item');
	const imagePopup = document.getElementById('image-popup');
	const imagePopupClose = document.getElementById('image-popup-close');
	const image = document.getElementById('image-popup-image');
	photos.forEach(photo => {
		photo.style.height = photo.clientWidth + 'px';
		photo.addEventListener('click', function() {
			image.src = photo.querySelector('img').src;
			imagePopup.classList.add('active');
		});
	});
	imagePopupClose.addEventListener('click', function() {
		imagePopup.classList.remove('active');
	});

	// Help logic
	const helpButtons = document.querySelectorAll('.help__choose-button');
	const helpTexts = document.querySelectorAll('.help__text-item');
	helpButtons.forEach(btn => {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			helpButtons.forEach(btn => btn.classList.remove('active'));
			btn.classList.add('active');

			const index = btn.dataset.index;
			helpTexts.forEach(text => text.classList.remove('active'));
			document.querySelector('.help__text-item[data-index="' + index + '"]').classList.add('active');

			if(windowWidth <= 950) {
				const helpBtnActive = document.querySelector('.help__choose-button.active');
				const helpTextActive = document.querySelector('.help__text-item.active');
				helpBtnActive.after(helpTextActive);
			}
		});
	});
	if(windowWidth <= 950) {
		const helpBtnActive = document.querySelector('.help__choose-button.active');
		const helpTextActive = document.querySelector('.help__text-item.active');
		helpBtnActive.after(helpTextActive);
	}

	// Accordion logic
	const accordionBtns = document.querySelectorAll('.accordion-list__item-button');
	accordionBtns.forEach(btn => {
		btn.addEventListener('click', function() {
			btn.parentNode.classList.toggle('active');
		});
	});

	// Command slider
	const commandSlider = new Swiper('.command-slider', {
		slidesPerView: 1.2,
		spaceBetween: 16,
		loop: true,
		pagination: {
			el: '.command-slider__pagination',
		},
		navigation: {
			nextEl: '.command-slider__next',
			prevEl: '.command-slider__prev',
		},
		breakpoints: {
			950: {
				slidesPerView: 4
			}
		}
	});

	// Reviews slider
	const reviewsSlider = new Swiper('.reviews-slider', {
		slidesPerView: 1.2,
		spaceBetween: 16,
		loop: true,
		pagination: {
			el: '.reviews-slider__pagination',
		},
		navigation: {
			nextEl: '.reviews-slider__next',
			prevEl: '.reviews-slider__prev',
		},
		breakpoints: {
			950: {
				slidesPerView: 2
			}
		}
	});

	// Services all btn
	const servicesList = document.getElementById('services-list');
	const servicesAllBtn = document.getElementById('services-all');
	servicesAllBtn.addEventListener('click', function() {
		servicesList.classList.add('active');
		servicesAllBtn.remove();
	});

	// Catalog all btn
	const catalogList = document.getElementById('catalog-list');
	const catalogAllBtn = document.getElementById('catalog-all');
	catalogAllBtn.addEventListener('click', function() {
		catalogList.classList.add('active');
		catalogAllBtn.remove();
	});

	// Map in mobile
	const map = document.getElementById('map');
	if(windowWidth <= 950) {
		map.style.height = windowWidth + 'px';
	}
});