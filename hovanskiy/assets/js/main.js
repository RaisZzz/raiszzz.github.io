document.addEventListener('DOMContentLoaded', function() {
	const $questions = document.querySelectorAll('.questions__item')
	$questions.forEach(question => {
		question.addEventListener('click', () => question.classList.toggle('active'))
	})

	const $burger = document.getElementById('burger'),
				$header = document.getElementById('header')
	$burger.addEventListener('click', function () {
		$header.classList.toggle('active')
	})
})