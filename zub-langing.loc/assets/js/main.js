document.addEventListener("DOMContentLoaded", function() {
	// Prices
	const pricesList = document.querySelectorAll(".prices-item-btn[data-table]");
	const tables = document.querySelectorAll(".prices-table[data-table]");

	tables.forEach(table => table.classList.remove("active"));
	pricesList.forEach(btn => btn.classList.remove("active"));
	pricesList[0].classList.add("active");
	tables[0].classList.add("active");

	pricesList.forEach(btn => {
		btn.addEventListener("click", function() {
			const id = btn.dataset.table;
			const table = document.querySelector(".prices-table[data-table='" + id + "']");
			
			tables.forEach(table => table.classList.remove("active"));
			table.classList.add("active");
			pricesList.forEach(btn => btn.classList.remove("active"));
			btn.classList.add("active");
		});
	});

	// Doctors slider
	const doctorsSlider = new Swiper('.doctors-slider', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.doctors-button-next',
			prevEl: '.doctors-button-prev',
		}
	});

	// Reviews
	const reviewsBtns = document.querySelectorAll(".reviews-choose-btn[data-choose]");
	const reviewsSliders = document.querySelectorAll(".reviews-slider[data-choose]");
	const reviewsBtnsBg = document.getElementById("reviews-choose-bg");

	reviewsSliders.forEach(slider => {
		slider.classList.remove("active");
	});
	reviewsSliders[0].classList.add("active");

	// Reviews Slider
	const reviewsSlider = new Swiper('.reviews-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
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
			const reviewsSlider = new Swiper('.reviews-slider[data-choose="' + id + '"]', {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 0,
				navigation: {
					nextEl: '.reviews-button-next',
					prevEl: '.reviews-button-prev',
				}
			});
		});
	});
});