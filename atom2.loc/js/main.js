let stairsStarted = false
let largeStarted = false

document.addEventListener('DOMContentLoaded', function() {
	const bgFirst = document.getElementById('main-bg-first'),
				bgSecond = document.getElementById('main-bg-second')
	setInterval(() => {
		bgFirst.classList.toggle('active')
		bgSecond.classList.toggle('active')
	}, 3000)

	const windowOpens = document.querySelectorAll('.window__open[data-window]'),
				windowCloses = document.querySelectorAll('.window__close'),
				largeIcon = document.getElementById('window-large-icon'),
				windowQuestions = document.querySelectorAll('.window__question-btn')
	windowOpens.forEach(btn => {
		btn.addEventListener('click', function() {
			document.querySelector(`.window[data-window="${btn.dataset.window}"]`).classList.add('active')
			if (btn.dataset.window == 3 && !stairsStarted) {
				stairsAnimate()
				stairsStarted = true
			}
			if (btn.dataset.window == 10 && !largeStarted) {
				largeIconAnimate(largeIcon)
				largeStarted = true
			}
		})
	})
	windowQuestions.forEach(question => {
		question.addEventListener('mouseenter', function() {
			question.parentNode.parentNode.querySelector('.window__answer').classList.add('active')
		})
		question.addEventListener('mouseleave', function() {
			question.parentNode.parentNode.querySelector('.window__answer').classList.remove('active')
		})
	})
	windowCloses.forEach(btn => {
		btn.addEventListener('click', function() {
			btn.parentNode.parentNode.classList.remove('active')
		})
	})


	const windowCircles = document.querySelectorAll('.window__circle')
	windowCircles.forEach(circle => {
		circle.addEventListener('click', function() {
			circle.classList.toggle('small')
		})
	})


	const drawingWindow = document.getElementById('drawing'),
				ctx = drawingWindow.getContext('2d'),
				letter = new Image()
	const letters = [
		document.getElementById('letterA1').src,
		document.getElementById('letterA2').src,
		document.getElementById('letterA3').src,
		document.getElementById('letterA4').src
	]
	let letterNumber = 0
	drawingWindow.addEventListener('mousemove', function (e) {
		const drawX = e.clientX - drawingWindow.getBoundingClientRect().left,
					drawY = e.clientY - drawingWindow.getBoundingClientRect().top
		letter.src = letters[letterNumber]
		ctx.drawImage(letter, drawX/2, drawY/2, 40, 40)
	})

	drawingWindow.addEventListener('touchstart', function () {
		document.body.style.overflowY = 'hidden'
	})
	drawingWindow.addEventListener('touchmove', function(e) {
		const drawX = e.targetTouches[0].screenX - drawingWindow.getBoundingClientRect().left,
					drawY = e.targetTouches[0].screenY - drawingWindow.getBoundingClientRect().top
		letter.src = letters[letterNumber]
		ctx.drawImage(letter, drawX/2, drawY/2, 40, 40)
	})
	setInterval(() => {
		if (letterNumber < 3) {
			letterNumber++
		} else {
			letterNumber = 1
		}
	}, 2000)
	drawingWindow.addEventListener('touchend', function () {
		document.body.style.overflowY = 'auto'
	})


	const rectanglePlus = document.getElementById('window-plus'),
				rectangleMinus = document.getElementById('window-minus'),
				rectangle = document.getElementById('window-rectangle')
	rectanglePlus.addEventListener('click', function() {
		if(rectangle.offsetHeight + 20 <= 140) rectangle.style.height = `${rectangle.offsetHeight + 20}px`
	})
	rectangleMinus.addEventListener('click', function() {
		if(rectangle.offsetHeight - 20 >= 20) rectangle.style.height = `${rectangle.offsetHeight - 20}px`
	})
	setInterval(() => {
		rectanglePlus.style.top = `${Math.random()*100}%`
		rectanglePlus.style.left = `${Math.random()*100}%`
		rectangleMinus.style.top = `${Math.random()*100}%`
		rectangleMinus.style.left = `${Math.random()*100}%`
	}, 2000)


	const flowerFirst = document.getElementById('flower-first'),
				flowerSecond = document.getElementById('flower-second'),
				flowerThird = document.getElementById('flower-third')
	flowersAnimate(flowerFirst)
	flowersAnimate(flowerSecond)
	flowersAnimate(flowerThird)


	const atom = document.getElementById('window-atom')
	atom.addEventListener('click', function() {
		atom.classList.add('active')
		document.querySelectorAll('.window-atom-small').forEach(atom => atom.classList.add('active'))
	})


	const $text = document.getElementById('window-text')
	let text = 'маленький',
			size = 48
	$text.addEventListener('click', function() {
		switch (text) {
			case 'маленький':
				text = 'средний'
				size = 96
				break
			case 'средний':
				text = 'БОЛЬШОЙ'
				size = 122
				break
			case 'БОЛЬШОЙ':
				text = 'ОГРОМНЫЙ'
				size = 156
				break
			case 'ОГРОМНЫЙ':
				text = 'маленький'
				size = 48
				break
		}
		$text.innerText = text
		$text.style.fontSize = `${size}px`
	})


	const atomTextA = document.getElementById('atom-text-a')
	atomTextA.addEventListener('click', function() {
		atomTextA.classList.toggle('active')
	})


	const flyCirclesWrapper = document.getElementById('fly-circles')
	setInterval(() => {
		flyCirclesWrapper.querySelectorAll('.fly-circle').forEach(circle => {
			let left = parseInt(circle.style.left.slice(0, circle.style.left.length-2))
			if (left <= 200) {
				left = left + 1
				circle.style.left = `${left}px`
			} else {
				circle.style.left = '-50px'
				flyCirclesWrapper.prepend(circle)
			}
		})
	}, 1000/30)

	const starIcon = document.getElementById('window-star')
	iconAnimate(starIcon)
})

function stairsAnimate() {
	const stairs = document.querySelectorAll('#stairs > path')
	for (let i = 0; i < stairs.length; i+= 3) {
		setTimeout(() => {
			stairs[i].classList.add('active')
			stairs[i+1].classList.add('active')
			stairs[i+2].classList.add('active')
			if(i+2 === stairs.length-1) {
				for (let i = stairs.length; i >= 3; i-= 3) {
					setTimeout(() => {
						stairs[i-1].classList.remove('active')
						stairs[i-2].classList.remove('active')
						stairs[i-3].classList.remove('active')
						if(i === 3) {
							stairsAnimate()
						}
					}, (stairs.length - i)*20)
				}
			}
		}, i*20)
	}
}

function flowersAnimate(flower) {
	const paths = flower.querySelectorAll('path')
	paths.forEach((path, index) => {
		setTimeout(() => {
			path.classList.add('active')
			if (index === paths.length-1) {
				setTimeout(() => {
					paths.forEach((path, index) => {
						setTimeout(() => {
							path.classList.remove('active')
							if (index === 0) {
								setTimeout(() => flowersAnimate(flower), 40)
							}
						}, (paths.length-index)*40)
					})
				}, 40)
			}
		}, index*40)
	})
}

function iconAnimate(icon) {
	const paths = icon.querySelectorAll('*')
	paths.forEach((path, index) => {
		setTimeout(() => {
			path.classList.add('active')
			if (index === 0) {
				setTimeout(() => {
					paths.forEach((path, index) => {
						setTimeout(() => {
							path.classList.remove('active')
							if (index === paths.length-1) {
								setTimeout(() => iconAnimate(icon), 100)
							}
						}, index*100)
					})
				}, 100)
			}
		}, (paths.length-index)*100)
	})
}

function largeIconAnimate(icon) {
	const paths = icon.querySelectorAll('*')
	paths.forEach((path, index) => {
		setTimeout(() => {
			path.classList.add('active')
			if (index === paths.length-1) {
				paths.forEach((path, index) => {
					setTimeout(() => {
						path.classList.remove('active')
						if (index === 0) {
							iconAnimate(icon)
						}
					}, (paths.length-index)*40)
				})
			}
		}, index*40)
	})
}