const transition = 200
const imageTransition = 3000
const servicesTransition = 1500

document.addEventListener('DOMContentLoaded', function() {
    // Menu
    const links = document.querySelectorAll('*[data-page]')
    const pages = document.querySelectorAll('.page')
    const catalogPopup = document.getElementById('catalog-popup')
    links.forEach(link => {
        link.addEventListener('click', function() {
            pages.forEach(page => page.classList.remove('active', 'full'))
            catalogPopup.classList.remove('active')
            document.querySelector(`.page#${link.dataset.page}`).classList.add('active')
        })
    })

    // Titles
    const pageTitles = document.querySelectorAll('.page__title')
    pageTitles.forEach(title => {
        title.addEventListener('click', () => {title.parentNode.classList.add('full')})
    })

    // Animations
    const pageBgs = document.querySelectorAll('.page__bg')
    pageBgs.forEach(bg => {
        const paths = bg.querySelectorAll('path')
        bgAnim(paths)
    })
    const pagess = document.querySelectorAll('.page')
    pagess.forEach(page => {
        const pageImages = page.querySelectorAll('.page__img')
        imgAnim(pageImages)
    })

    // Page next btn animation
    const nextBtns = document.querySelectorAll('.page__next-icon')
    nextBtns.forEach(btn => {
        const paths = btn.querySelectorAll('path')
        if (paths.length) nextAnim(paths)
    })

    // Catalog
    const catalogItems = document.querySelectorAll('.catalog__item')
    const catalogTitle = document.getElementById('catalog-popup-title')
    const catalogPrice = document.getElementById('catalog-popup-price')
    const catalogSize = document.getElementById('catalog-popup-size')
    const catalogImage = document.getElementById('catalog-popup-image')
    const catalogBuy = document.getElementById('catalog-popup-buy')
    catalogItems.forEach(item => {
        item.style.height = `${item.clientWidth}px`

        item.addEventListener('click', function() {
            catalogImage.src = item.querySelector('img.catalog__item-image').src
            catalogTitle.innerText = item.dataset.name
            catalogPrice.innerText = item.dataset.price
            if (item.dataset.size !== undefined) {
                catalogSize.classList.add('active')
            } else {
                catalogSize.classList.remove('active')
            }
            catalogPopup.classList.add('active')
        })
    })
    catalogBuy.addEventListener('click', function() {
        catalogPopup.classList.remove('active')
    })

    // Services
    const servicesImages = document.querySelectorAll('.services-promo__image')
    const servicesCards = document.querySelectorAll('.services-grid__item')
    servicesCards.forEach((card, index) => {
        if (index !== servicesCards.length - 1) card.querySelector('.services-grid__item-image-wrapper').style.height = `${card.clientWidth}px`
    })
    servicesAnim(servicesImages, 0)
})


function bgAnim(paths) {
    for (let i = 0; i < paths.length; i++) {
        setTimeout(() => {
            paths[i].classList.add('active')
            if (i === paths.length - 1) {
                for (let j = paths.length; j > 0; j--) {
                    setTimeout(() => {
                        paths[j - 1].classList.remove('active')
                        if (j === 1) setTimeout(() => bgAnim(paths), transition)
                    }, (paths.length - j) * transition)
                }
            }
        }, i*transition)
    }
}
function imgAnim(images) {
    if (images.length) {
        images.forEach(img => img.classList.remove('active'))
        images[0].classList.add('active')
        for (let i = 0; i <= images.length; i++) {
            setTimeout(() => {
                images.forEach(img => img.classList.remove('active'))
                images[i].classList.add('active')
                if (i === images.length - 1) {
                    imgAnim(images)
                }
            }, i*imageTransition)
        }
    }
}

function nextAnim(paths) {
    if (paths.length) {
        paths.forEach(path => path.classList.remove('active'))
        paths[0].classList.add('active')
        for (let i = 0; i <= paths.length; i++) {
            setTimeout(() => {
                paths.forEach(path => path.classList.remove('active'))
                if (paths[i]) paths[i].classList.add('active')
                if (i === paths.length - 1) {
                    setTimeout(() => {
                        nextAnim(paths)
                    }, transition)
                }
            }, i*transition)
        }
    }
}

function servicesAnim(images, i) {
    if (!images[i]) servicesAnim(images, 0)
    images[i].classList.add('active')
    images[i].style.top = '-30%'
    images[i].style.left = '-30%'
    setTimeout(() => {
        images[i].style.top = '-150%'
        images[i].style.left = '0'
        setTimeout(() => {
            images[i].style.top = '-200%'
            images[i].style.left = '-30%'
            setTimeout(() => {
                images[i].style.top = '0'
                images[i].style.left = '0'
                setTimeout(() => {
                    images[i].classList.remove('active')
                    servicesAnim(images, i + 1)
                }, servicesTransition)
            }, servicesTransition)
        }, servicesTransition)
    }, servicesTransition)
}
