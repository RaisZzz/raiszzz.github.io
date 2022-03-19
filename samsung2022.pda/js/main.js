document.addEventListener('DOMContentLoaded', function() {
	const topSlider = new Swiper('.top-slider', {
		loop: true,
		pagination: {
			el: '.top-slider__pagination',
		},
		navigation: {
			nextEl: '.top-slider__next',
			prevEl: '.top-slider__prev',
		}
	})

	const photosSliderMini = new Swiper('.photos-slider-mini', {
		spaceBetween: 5,
		slidesPerView: 14,
		freeMode: true
	})
	const photosSlider = new Swiper('.photos-slider', {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 20,
		loop: true,
		autoHeight: true,
		navigation: {
			nextEl: '.photos-next',
			prevEl: '.photos-prev'
		},
		thumbs: {
			swiper: photosSliderMini
		}
	})

	const photosCounter = document.getElementById('photos-counter'),
				photosCurrent = document.getElementById('photos-current'),
				photosTotal = document.getElementById('photos-total')
	let totalSlides = 0
	photosSlider.on('slideChange', function() {
		photosCurrent.innerText = photosSlider.realIndex + 1
		const left = document.querySelectorAll(`.photos-slider-mini .photos-slider__item`)[photosSlider.realIndex].getBoundingClientRect().left - document.querySelector(`.photos-slider-mini`).getBoundingClientRect().left
		photosCounter.style.left = `${left}px`
	})
	document.querySelectorAll('.photos-slider .photos-slider__item').forEach(slide => {
		if(slide.dataset.swiperSlideIndex > totalSlides) totalSlides++
		slide.addEventListener('click', function(e) {
			if(slide.classList.contains('swiper-slide-prev')) photosSlider.slidePrev()
			else if (slide.classList.contains('swiper-slide-next')) photosSlider.slideNext()
		})
	})
	totalSlides++
	photosTotal.innerText = totalSlides

	const videoPlayBtn = document.getElementById('video-play'),
				video = document.getElementById('video')
	videoPlayBtn.addEventListener('click', function() {
		video.src += '&autoplay=1'
		setTimeout(() => videoPlayBtn.remove(), 1000)
	})

	const videos = document.querySelectorAll('.video-js')
	videos.forEach(video => {
		video.style.height = `${video.offsetWidth/16*9}px`
	})

	const videosPlay = document.querySelectorAll('.videos-play-js')
	videosPlay.forEach(play => {
		play.addEventListener('click', function() {
			play.parentNode.querySelector('iframe').src += '&autoplay=1'
			play.parentNode.classList.add('active')
			setTimeout(() => play.remove(), 1000)
		})
	})
})