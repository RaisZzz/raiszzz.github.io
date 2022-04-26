document.addEventListener('DOMContentLoaded', function() {
    const servicesButtons = document.querySelectorAll('.services__button[data-toggle]'),
          services = document.querySelectorAll('.services__table[data-toggle]')
    servicesButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = btn.dataset.toggle

            servicesButtons.forEach(btn => btn.classList.remove('active'))
            btn.classList.add('active')

            services.forEach(service => service.classList.remove('active'))
            document.querySelector(`.services__table[data-toggle="${index}"]`).classList.add('active')
        })
    })

    const photosSlider = new Swiper('.photos__gallery', {
        pagination: {
            el: '.photos__gallery-pagination',
        },
        autoplay: {
            delay: 4000
        },
        on: {
            init: photosSliderFirstImage,
            resize: photosSliderFirstImage
        }
    })

    const faqButtons = document.querySelectorAll('.faq__button[data-toggle]'),
          answers = document.querySelectorAll('.faq__answer[data-toggle]')
    faqButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = btn.dataset.toggle

            faqButtons.forEach(btn => btn.classList.remove('active'))
            btn.classList.add('active')

            answers.forEach(answer => answer.classList.remove('active'))
            document.querySelector(`.faq__answer[data-toggle="${index}"]`).classList.add('active')
        })
    })

    const commandSlider = new Swiper('.command-slider', {
        pagination: {
            el: '.command-slider__pagination',
        },
        autoplay: {
            delay: 4000
        }
    })

    const questions = document.querySelectorAll('.question')
    questions.forEach(question => {
        question.addEventListener('click', function() {
            question.classList.toggle('active')

            const answer = question.querySelector('.question__answer')
            if (question.classList.contains('active')) {
                answer.style.height = `${answer.scrollHeight}px`
            } else {
                answer.style.height = '0'
            }
        })
    })

    const reviewsSlider = new Swiper('.reviews-slider', {
        pagination: {
            el: '.reviews-slider__pagination',
        },
        autoplay: {
            delay: 4000
        }
    })
})

function photosSliderFirstImage() {
    document.querySelectorAll('.photos__gallery-grid').forEach(slide => {
        const firstImage = slide.querySelector('.photos-gallery-grid__image-wrapper:first-child')
        firstImage.style.height = `${firstImage.clientWidth}px`
    })
}