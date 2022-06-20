document.addEventListener('DOMContentLoaded', function() {
	const $burger = document.getElementById('burger'),
				$header = document.getElementById('header')
	if ($burger) {
		$burger.addEventListener('click', function () {
			$header.classList.toggle('active')
		})
	}

	const $questions = document.querySelectorAll('.questions__item')
	if ($questions) {
		$questions.forEach(question => {
			question.addEventListener('click', () => question.classList.toggle('active'))
		})
	}

	const $whyToggles = document.querySelectorAll('.how-toggles__btn[data-toggle]')
	if ($whyToggles) {
		$whyToggles.forEach(toggle => {
			toggle.addEventListener('click', function() {
				$whyToggles.forEach(toggle => toggle.classList.remove('active'))
				document.querySelectorAll('.how-pages__item').forEach(item => item.classList.remove('active'))

				toggle.classList.add('active')
				document.querySelector(`.how-pages__item[data-toggle="${toggle.dataset.toggle}"]`).classList.add('active')
			})
		})
	}
})