document.addEventListener("DOMContentLoaded", function() {

	const menu_btn = document.getElementById("menu-btn");
	const menu = document.getElementById("menu");
	const head_next_btn = document.getElementById("head-next-btn");
	const works_section = document.getElementById("works");
	const menu_items = document.querySelectorAll(".menu-item");

	menu_btn.addEventListener("click", function() {
		menu.classList.toggle("active");
	});

	head_next_btn.addEventListener("click", function() {
		works_section.scrollIntoView({block: "start", behavior: "smooth"});
	});

	menu_items.forEach(item => {
		item.addEventListener("click", function() {
			const scroll_to = document.getElementById(item.dataset.to);

			scroll_to.scrollIntoView({block: "start", behavior: "smooth"});
		});
	});

});