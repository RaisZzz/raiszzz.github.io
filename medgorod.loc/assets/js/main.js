document.addEventListener("DOMContentLoaded", function() {
	const swiper = new Swiper('.discount-slider', {
		loop: true
	});

	const menuBtn = document.getElementById("menu-mobile-btn");
	const menu = document.getElementById("menu-mobile");
	menuBtn.addEventListener("click", function() {
		menuBtn.classList.toggle("active");
		menu.classList.toggle("active");
	});
});