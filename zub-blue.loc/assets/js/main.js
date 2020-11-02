document.addEventListener("DOMContentLoaded", function() {
	const examples_slider = new Swiper('.examples-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 15,
		pagination: {
			el: '.swiper-pagination'
		},
		navigation: {
			nextEl: '.example-next',
			prevEl: '.example-prev'
		},
		breakpoints: {
			1056: {
				spaceBetween: 10,
				slidesPerView: 2
			},
			875: {
				slidesPerView: 2
			}
		}
	})

	const doctors_slider = new Swiper('.doctors-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: true,
		slidesOffsetAfter: 100,
		pagination: {
			el: '.swiper-pagination'
		},
		navigation: {
			nextEl: '.doctors-next',
			prevEl: '.doctors-prev'
		},
		breakpoints: {
			1056: {
				slidesPerView: 4,
				spaceBetween: 30,
				centeredSlides: false,
				slidesOffsetAfter: 0
			},
			875: {
				slidesPerView: 3,
				spaceBetween: 15,
				centeredSlides: false,
				slidesOffsetAfter: 0
			},
			620: {
				slidesPerView: 2,
				spaceBetween: 15,
				centeredSlides: false,
				slidesOffsetAfter: 0
			}
		}
	})

	const information_slider = new Swiper('.information-slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination'
		},
		navigation: {
			nextEl: '.information-next',
			prevEl: '.information-prev'
		}
	})
});