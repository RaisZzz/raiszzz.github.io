// Settings
const animPercent = 10;
const docHeight = document.documentElement.clientHeight;
const docWidth = document.documentElement.clientWidth;
const perHeight = docHeight/100*animPercent;
let textPlayed = false;

document.addEventListener("DOMContentLoaded", function() {
	// Menu logic
	const menuItems = document.querySelectorAll(".menu__item-link[data-to]");
	menuItems.forEach(item => {
		item.addEventListener("click", function() {
			const to = document.querySelector(item.dataset.to);
			window.scrollTo({
				top: to.offsetTop - 100,
				behavior: "smooth"
			})
		});
	});


	// ANIMATIONS
	function writeText(elem) {
		const text = elem.innerHTML;
		elem.style.height = elem.clientHeight + "px";
		elem.innerHTML = '';
		for(let i = 0; i < text.length; i++) {
			setTimeout(() => {
				elem.innerHTML += text[i];
			}, i*25)
		}

		textPlayed = true;
	}


	// BANNER
	const bannerTitle = document.getElementById("bannerTitle");
	bannerTitle.classList.add("animated");

	const bannerText = document.getElementById("bannerText");


	// SCROLL ANIMATION
	window.addEventListener("scroll", function() {
		// ABOUT

		// About title animate
		const aboutTitle = document.getElementById("aboutTitle");
		const aboutIcon = document.getElementById("aboutIcon");
		let titleTop = docHeight - aboutTitle.getBoundingClientRect().top;
		if (titleTop >= aboutTitle.clientHeight) {
			aboutTitle.classList.add("animated");
			setTimeout(() => {
				aboutIcon.classList.add("animated");
			}, 1000)
		}

		// About bg animate
		const aboutLines = document.querySelectorAll(".about-bg__item");
		aboutLines.forEach(line => {
			const lineHeight = line.clientHeight;
			const lineTop = docHeight - line.getBoundingClientRect().top - lineHeight;
			if (lineTop > perHeight) {
				line.classList.add("animated");
			}
		});

		// About pic animate
		const aboutPhoto = document.getElementById("aboutPhoto");
		const photoTop = docHeight - aboutPhoto.getBoundingClientRect().top;
		if (photoTop > perHeight) {
			aboutPhoto.classList.add("animated");
		}

		// About text animate
		const aboutText = document.getElementById("aboutText");
		const textTop = docHeight - aboutText.getBoundingClientRect().top;
		if (textTop > perHeight && !textPlayed) {
			writeText(aboutText);
			aboutText.classList.add("animated");
		}

		// PORTFOLIO

		// Portfolio title animate
		const portfolioTitle = document.getElementById("portfolioTitle");
		const portfolioIcon = document.getElementById("portfolioIcon");
		const portfolioTitleUnderline = document.getElementById("portfolioTitleUnderline");
		titleTop = docHeight - portfolioTitle.getBoundingClientRect().top;
		if (titleTop >= portfolioTitle.clientHeight) {
			portfolioTitle.classList.add("animated");
			portfolioIcon.classList.add("animated");
			portfolioTitleUnderline.classList.add("animated");
		}

		// Portfolio grid animate
		const portfolioGridItems = document.querySelectorAll('.portfolio-grid__item');
		portfolioGridItems.forEach(item => {
			const itemTop = docHeight - item.getBoundingClientRect().top;
			if (itemTop >= item.clientHeight) {
				item.classList.add("animated");
			}
		});

		// Portfolio waves animate
		const portfolioWavesContainer = document.getElementById("portfolioWaves");
		const wavesTop = docHeight - portfolioWavesContainer.getBoundingClientRect().top;
		if (wavesTop >= portfolioWavesContainer.clientHeight) {
			const portfolioWaves = document.querySelectorAll(".portfolio-waves__item");
			portfolioWaves.forEach((item, i) => {
				setTimeout(() => {
					item.classList.add("animated");
				}, i*500);
			});
		}

		// Portfolio btn animate
		const portfolioBtn = document.getElementById("portfolioBtn");
		const btnTop = docHeight - portfolioBtn.getBoundingClientRect().top;
		if (btnTop >= portfolioBtn.clientHeight) {
			portfolioBtn.classList.add("animated");
		}


		// CONTACTS

		// Contacts title animate
		const contactsTitle = document.getElementById("contactsTitle");
		const contactsDescription = document.getElementById("contactsDescription");
		const contactsIcon = document.getElementById("contactsIcon");
		titleTop = docHeight - contactsTitle.getBoundingClientRect().top;
		if (titleTop >= contactsTitle.clientHeight) {
			contactsTitle.classList.add("animated");
			contactsDescription.classList.add("animated");

			// Contacts icon animate
			contactsIcon.querySelectorAll("path").forEach((item, index) => {
				setTimeout(() => {
					item.classList.add("animated");
				}, index*50)
			})
		}

		// Contacts grid animate
		const contactsGrid = document.getElementById("contactsGrid");
		const contactsGridTop = docHeight - contactsGrid.getBoundingClientRect().top;
		if (contactsGridTop >= contactsGrid.clientHeight) {
			contactsGrid.querySelectorAll(".contacts-grid__item").forEach((item, index) => {
				setTimeout(() => {
					item.classList.add("animated");
				}, index*500)
			})
		}
	});


	// MOUSEMOVE ANIMATION
	document.addEventListener("mousemove", function(e) {
		const mouseX = -(e.screenX - docWidth/2)/50;
		const mouseY = -(e.screenY - docHeight/2)/50;
		aboutPhoto.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
	})
});