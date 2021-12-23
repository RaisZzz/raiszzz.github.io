document.addEventListener("DOMContentLoaded", function() {
	// Elephant
	const elephant = document.getElementById("elephant");
	const elephantItems = elephant.querySelectorAll("path");
	let k = 0;
	function hide(i) {
		elephantItems[i].classList.add("hidden");
		if (i == (elephantItems.length - 1)) {
			for (let j = (elephantItems.length - 1); j >= 0; j--) {
				setTimeout(() => {
					show(j);
				}, k*100);
				k++;
			}
		}
	}
	function show(j) {
		elephantItems[j].classList.remove("hidden");
		if(j == 0) {
			k = 0;
			for (let i = 0; i < elephantItems.length; i++) {
				setTimeout(() => {
					hide(i);
				}, i*100);
			}
		}
	}
	for (let i = 0; i < elephantItems.length; i++) {
		setTimeout(() => {
			hide(i);
		}, i*100);
	}

	// Square
	const square = document.getElementById("square");
	const squareControls = document.querySelectorAll(".squares-control__item");
	squareControls.forEach((control, i) => {
		control.addEventListener("mouseenter", function() {
			if (i == 0) {
				square.style.borderColor = "#DB00FF";
				square.style.height = "439px";
				square.style.width = "439px";
				square.style.borderRadius = "60px";
			} else if (i == 1) {
				square.style.borderColor = "#DB00FF";
				square.style.height = "292px";
				square.style.width = "292px";
				square.style.borderRadius = "60px";
			} else if (i == 2) {
				square.style.borderColor = "#006CFF";
				square.style.height = "292px";
				square.style.width = "292px";
				square.style.borderRadius = "60px";
			} else if (i == 3) {
				square.style.borderColor = "#006CFF";
				square.style.height = "142px";
				square.style.width = "142px";
				square.style.borderRadius = "40px";
			} else if (i == 4) {
				square.style.borderColor = "#FFFFFF";
				square.style.height = "142px";
				square.style.width = "142px";
				square.style.borderRadius = "40px";
			} else if (i == 5) {
				square.style.borderColor = "#FFFFFF";
				square.style.height = "75px";
				square.style.width = "75px";
				square.style.borderRadius = "20px";
			}
		});
		control.addEventListener("mouseleave", function() {
			square.style.borderColor = "#B9E931";
			square.style.height = "439px";
			square.style.width = "439px";
			square.style.borderRadius = "60px";
		});
	});

	// Picture
	const pictures = document.querySelectorAll(".second-picture__item");
	function pict() {
		for(let i = 0; i < pictures.length; i++) {
			setTimeout(() => {
				pictures[i-1].classList.remove("active");
				pictures[i].classList.add("active");
				if (i == (pictures.length - 1)) {
					pictures[i].classList.remove("active");
					pict();
				}
			}, i*1000);
		}
	}
	pict();

	// Formules
	const formules = document.getElementById("formules");
	const width = formules.querySelector(".formule:first-child").clientWidth;
	form()
	function form() {
		for (let i = 1; i <= width; i++) {
			setTimeout(() => {
				formules.style.left = -i + "px";
			}, i * 10)
			if(i == 100) {
				console.log(1)
				formules.append(formules.querySelector(".formule:first-child"));
			}
		}
	}
	setInterval(form, (width*10 + 10));
});