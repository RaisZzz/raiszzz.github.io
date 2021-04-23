document.addEventListener("DOMContentLoaded", function() {
	const clientWidth = document.documentElement.clientWidth;
	// Attention
	const attentionBtn = document.getElementById("attention-open");
	const attention = document.getElementById("attention");
	if(attention) {
		attentionBtn.addEventListener("click", function() {
			attention.classList.toggle("active");
		});
	}
	// Mobile menu
	const menuBtn = document.getElementById("menu-btn");
	menuBtn.addEventListener("click", function() {
		const header = document.getElementById("header");
		const mobileMenu = document.getElementById("mobile-menu");
		const mobilePhone = document.getElementById("mobile-phone");
		menuBtn.classList.toggle("active");
		header.classList.toggle("active");
		mobileMenu.classList.toggle("active");
		mobilePhone.classList.toggle("active");
	});
	// Banner video
	const videoBtn = document.getElementById("banner-video-btn");
	const video = document.getElementById("video-container");
	const videoClose = document.getElementById("video-close");
	if(videoBtn) {
		videoBtn.addEventListener("click", function() {
			video.classList.add("active");
		});
		videoClose.addEventListener("click", function() {
			video.classList.remove("active");
		});
	}
	// Map
	function map_choose() {
		const buttons = document.querySelectorAll(".map-list-choose[data-id]");
		buttons.forEach(btn => {
			btn.addEventListener("click", function() {
				const pay = document.getElementById("pay");
				const plug = document.getElementById("pay-plug");
				const form = document.getElementById("pay-form");
				const name = document.getElementById("pay-form-name");
				const metro = btn.querySelector(".map-list-title").innerHTML;
				if (clientWidth > 820) {
					if(pay) {
						if(plug) {
							plug.remove();
							form.classList.add("active");
						}
						name.innerHTML = metro;
					}
				}

				const id = btn.dataset.id;
				buttons.forEach(btn => btn.classList.remove("active"));
				btn.classList.add("active");
				switch(id) {
					case "taganskaya": taganskaya.balloon.open(); break;					
					case "krasnie_vorota": krasnie_vorota.balloon.open(); break;					
				}
			});
		});
	}
	function map() {
		ymaps.ready(function () {
			const myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 12,
				controls: []
			}, {
				searchControlProvider: 'yandex#search'
			})

			taganskaya = new ymaps.Placemark(myMap.getCenter(), {
				balloonContent: '<div class="map-content"><svg class="map-content-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#AC6BAD"/><path d="M20.8992 16.603L17.1616 8L14 13.0291L10.8512 8L7.1008 16.603H6V17.9069H11.6576V16.603H10.8128L11.632 14.461L14 18L16.368 14.461L17.1872 16.603H16.3424V17.9069H22V16.603H20.8992Z" fill="white"/></svg><h3 class="map-content-title">Таганская</h3><p class="map-content-adress">2-й Верхний Михайловский проезд, д. 9, стр. 2, 3 этаж</p><a class="map-content-phone" href="tel:+74952662583">+7 495 266 25 83</a><p class="map-content-time">Пн-Пт: <span>8:00-22:00</span></p><p class="map-content-time">Сб-Вс: <span>9:00-21:00</span></p><div class="map-content-link"><a href="#">Подробнее</a></div></div>'
			}, {
				iconLayout: 'default#image',
				iconImageHref: './assets/img/map-icon.png',
				iconImageSize: [50, 66]
			})
			krasnie_vorota = new ymaps.Placemark([55.76, 37.6], {
				balloonContent: '<div class="map-content"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#F04438"/><path d="M20.8992 16.603L17.1616 8L14 13.0291L10.8512 8L7.1008 16.603H6V17.9069H11.6576V16.603H10.8128L11.632 14.461L14 18L16.368 14.461L17.1872 16.603H16.3424V17.9069H22V16.603H20.8992Z" fill="white"/></svg><h3 class="map-content-title">Красные ворота</h3><p class="map-content-adress">2-й Верхний Михайловский проезд, д. 9, стр. 2, 3 этаж</p><a class="map-content-phone" href="tel:+74952662583">+7 495 266 25 83</a><p class="map-content-time">Пн-Пт: <span>8:00-22:00</span></p><p class="map-content-time">Сб-Вс: <span>9:00-21:00</span></p><div class="map-content-link"><a href="#">Подробнее</a></div></div>'
			}, {
				iconLayout: 'default#image',
				iconImageHref: './assets/img/map-icon.png',
				iconImageSize: [50, 66]
			})
			myMap.geoObjects
				.add(taganskaya)
				.add(krasnie_vorota);

			map_choose();
		});
	}
	if (clientWidth > 820) {
		map();
	}
	map_choose()

	// Map choose mobile
	const listBtn = document.getElementById("adress-list");
	const mapBtn = document.getElementById("adress-map");
	const mapBg = document.getElementById("map-choose-bg");
	const mapList = document.getElementById("map-list");
	if(listBtn) {
		listBtn.addEventListener("click", function() {
			mapBg.style.transform = "translateX(0%)";
			listBtn.style.color = "#fff";
			mapBtn.style.color = "#464646";
			document.querySelectorAll(".ymaps-2-1-78-map")[0].remove();
			document.getElementById("map").style.height = "auto";
			mapList.style.display = "block";
		});
		mapBtn.addEventListener("click", function() {
			mapBg.style.transform = "translateX(100%)";
			mapBtn.style.color = "#fff";
			listBtn.style.color = "#464646";
			document.getElementById("map").style.height = "590px";
			map();
			mapList.style.display = "none";
		});
	}

	// Prices
	const pricesList = document.querySelectorAll(".prices-item-btn[data-table]");
	const tables = document.querySelectorAll(".prices-table[data-table]");

	if(pricesList[0]) {
		tables.forEach(table => table.classList.remove("active"));
		pricesList.forEach(btn => btn.classList.remove("active"));
		pricesList[0].classList.add("active");
		tables[0].classList.add("active");

		pricesList.forEach(btn => {
			btn.addEventListener("click", function() {
				const id = btn.dataset.table;
				const table = document.querySelector(".prices-table[data-table='" + id + "']");
				let height = table.clientHeight;
				const initialHeight = document.querySelectorAll(".prices-list")[0].clientHeight;
				if(height < initialHeight) {height = initialHeight};
				document.querySelectorAll(".prices-list")[0].style.height = height + "px";
				
				tables.forEach(table => table.classList.remove("active"));
				table.classList.add("active");
				pricesList.forEach(btn => btn.classList.remove("active"));
				btn.classList.add("active");
			});
		});

		const pricesSelect = document.getElementById("prices-select");
		pricesSelect.addEventListener("change", (event) => {
			tables.forEach(table => table.classList.remove("active"));
			const id = event.target.value;
			const table = document.querySelector(".prices-table[data-table='" + id + "']");
			table.classList.add("active");
		});
	}

	// Doctors slider
	const doctorsSlider = new Swiper('.doctors-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.doctors-button-next',
			prevEl: '.doctors-button-prev',
		},
		breakpoints: {
			1180: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			900: {
				slidesPerView: 3
			},
			555: {
				slidesPerView: 2,
				centeredSlides: false
			}
		}
	});

	// Reviews
	const reviewsBtns = document.querySelectorAll(".reviews-choose-btn[data-choose]");
	const reviewsSliders = document.querySelectorAll(".reviews-slider[data-choose]");
	const reviewsBtnsBg = document.getElementById("reviews-choose-bg");

	if(reviewsSliders[0]) {
		reviewsSliders.forEach(slider => {
			slider.classList.remove("active");
		});
		reviewsSliders[0].classList.add("active");
	}

	// Reviews Slider
	const reviewsSlider = new Swiper('.reviews-slider:not(.non-slider)', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: '.reviews-button-next',
			prevEl: '.reviews-button-prev',
		}
	});

	reviewsBtns.forEach(btn => {
		btn.addEventListener("click", function() {
			const id = parseInt(btn.dataset.choose);
			const slider = document.querySelector(".reviews-slider[data-choose='" + id + "']");

			reviewsBtnsBg.style.transform = "translateX(" + (id-1)*100 + "%)";

			reviewsBtns.forEach(btn => btn.classList.remove("active"));
			btn.classList.add("active");

			reviewsSliders.forEach(slider => {
				slider.classList.remove("active");
			});
			slider.classList.add("active");
			// Reviews Slider
			const reviewsSlider = new Swiper('.reviews-slider:not(.non-slider)[data-choose="' + id + '"]', {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 20,
				navigation: {
					nextEl: '.reviews-button-next',
					prevEl: '.reviews-button-prev',
				}
			});
		});
	});

	// License
	const licenseSlider = new Swiper('.license-slider', {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 25,
		navigation: {
			nextEl: '.license-button-next',
			prevEl: '.license-button-prev',
		},
		breakpoints: {
			910: {
				slidesPerView: 6
			},
			600: {
				slidesPerView: 4
			}
		}
	});

	// Prices page
	const pricesContBtns = document.querySelectorAll(".prices-table-container-info");
	if(pricesContBtns) {
		pricesContBtns.forEach(btn => {
			btn.addEventListener("click", function() {
				btn.classList.toggle("active");
				let height = btn.parentNode.parentNode.clientHeight;
				const initialHeight = document.querySelectorAll(".prices-list")[0].clientHeight;
				if(height < initialHeight) {height = initialHeight};
				document.querySelectorAll(".prices-list")[0].style.height = height + "px";
			});
		});
	}

	// Popups
	const appointmentPopup = document.getElementById("appointment-popup");
	const callbackPopup = document.getElementById("callback-popup");
	const questionPopup = document.getElementById("doctor-question");
	const reviewPopup = document.getElementById("review-popup");
	const mailPopup = document.getElementById("mail-popup");
	document.querySelectorAll(".close-popup").forEach(close => {
		close.addEventListener("click", function() {
			close.parentNode.parentNode.classList.remove("active");
		});
	});
	document.querySelectorAll(".open-appointment").forEach(btn => {
		btn.addEventListener("click", function() {
			appointmentPopup.classList.add("active");
		});
	});
	document.querySelectorAll(".callback-open").forEach(btn => {
		btn.addEventListener("click", function() {
			callbackPopup.classList.add("active");
		});
	});
	document.querySelectorAll(".question-open").forEach(btn => {
		btn.addEventListener("click", function() {
			questionPopup.classList.add("active");
		});
	});
	document.querySelectorAll(".review-open").forEach(btn => {
		btn.addEventListener("click", function() {
			reviewPopup.classList.add("active");
		});
	});
	document.querySelectorAll(".mail-open").forEach(btn => {
		btn.addEventListener("click", function() {
			mailPopup.classList.add("active");
		});
	});

	const popupStars = document.querySelectorAll(".popup-rating .review-star");
	function stars() {
		popupStars.forEach(star => {
			star.classList.remove("active");
		});
	}
	popupStars.forEach(function(star, index) {
		star.addEventListener("mouseover", function() {
			for (let i = 0; i < index; i++) {
				popupStars[i].classList.add("active");
			}
		});
		star.addEventListener("mouseout", stars);
		star.addEventListener("click", function() {
			popupStars.forEach(star => {
				star.removeEventListener("mouseout", stars);
				star.classList.remove("active");
			});
			for (let i = 0; i <= index; i++) {
				popupStars[i].classList.add("active");
			}
		});
	});

	const callNow = document.getElementById("call_now");
	const callLater = document.getElementById("call_later");
	const callbackDate = document.getElementById("callback-date");
	callLater.addEventListener("click", function() {
		callbackDate.classList.add("active");
	});
	callNow.addEventListener("click", function() {
		callbackDate.classList.remove("active");
	});
});