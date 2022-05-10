document.addEventListener('DOMContentLoaded', function() {
    const banner = new Swiper('.banner__slider', {
        loop: true,
        pagination: {
            el: '.banner__slider-pagination',
        },
        autoplay: {
            delay: 3000,
        }
    });

    const reviews = new Swiper('.reviews__video', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.reviews__video-arrow.next',
            prevEl: '.reviews__video-arrow.prev',
        },
        breakpoints: {
            850: {
                slidesPerView: 3
            },
            400: {
                slidesPerView: 2
            }
        }
    })
    const reviewsCenterBtns = document.querySelectorAll('.reviews__button[data-center]'),
          reviewsCenterPages = document.querySelectorAll('.reviews__page[data-center]')
    reviewsCenterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            reviewsCenterBtns.forEach(btn => btn.classList.remove('active'))
            btn.classList.add('active')

            reviewsCenterPages.forEach(page => page.classList.remove('active'))
            document.querySelector(`.reviews__page[data-center="${btn.dataset.center}"]`).classList.add('active')
        })
    })
    const reviewsBtns = document.querySelectorAll('.reviews__video-slide__play')
    reviewsBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            btn.parentNode.querySelector('iframe').src += '?autoplay=1'
            setTimeout(() => {
                btn.parentNode.classList.add('active')
            }, 1000)
        })
    })

    const patients = new Swiper('.reviews__patients', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.reviews__patients-arrow.next',
            prevEl: '.reviews__patients-arrow.prev',
        },
        breakpoints: {
            850: {
                slidesPerView: 2
            }
        }
    })

    const media = new Swiper('.reviews__media', {
        navigation: {
            nextEl: '.reviews__media-arrow.next',
            prevEl: '.reviews__media-arrow.prev',
        }
    })

    const employees = new Swiper('.employees-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.employees-arrow.next',
            prevEl: '.employees-arrow.prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 4
            },
            700: {
                slidesPerView: 2
            }
        }
    })

    const questions = document.querySelectorAll('.question')
    questions.forEach(question => {
        question.addEventListener('click', function() {
            question.classList.toggle('active')
        })
    })
})
