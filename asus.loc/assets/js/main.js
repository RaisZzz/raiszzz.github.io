document.addEventListener("DOMContentLoaded", function() {
	// Before/After sliders
	const sliderGraps = document.querySelectorAll(".compare-slider__grap");
	sliderGraps.forEach(grap => {
		let parent = grap.parentNode;
		let parentWidth = parent.offsetWidth;
		let afterImage = parent.querySelector(".compare-slider__after .compare-slider__item-image");
		afterImage.style.clip = "rect(auto, auto, auto," + parentWidth/2 + "px)";
		let leftText = parentWidth / 100 * 30;
		let rightText = parentWidth - leftText;
		let leftTextDOM = parent.querySelector(".compare-slider__info .compare-slider__info-left");
		let rightTextDOM = parent.querySelector(".compare-slider__info .compare-slider__info-right");
		grap.onmousedown = function(e) {
			grap.style.transform = "none";
			function move(e) {
				let bounds = parent.getBoundingClientRect();
				let x = e.clientX - bounds.left;
				if (x < 0) {
					grap.style.left = 0;
					afterImage.style.clip = "rect(auto, auto, auto, 0)";
				} else if (x >= parentWidth) {
					grap.style.left = parentWidth + "px";
					afterImage.style.clip = "rect(auto, auto, auto, " + parentWidth + "px)";
				} else {
					grap.style.left = x + "px";
					afterImage.style.clip = "rect(auto, auto, auto, " + x + "px)";
				}
				if (x < leftText) {
					leftTextDOM.style.opacity = 0;
				} else {
					leftTextDOM.style.opacity = 1;
				}
				if (x > rightText) {
					rightTextDOM.style.opacity = 0;
				} else {
					rightTextDOM.style.opacity = 1;
				}
			}
			document.onmousemove = function(e) {
				move(e);
			}
			document.onmouseup = function() {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}


		grap.ontouchstart = function(e) {
			grap.style.transform = "none";
			function move(e) {
				let bounds = parent.getBoundingClientRect();
				let x = e.changedTouches[0].clientX - bounds.left;
				if (x < 0) {
					grap.style.left = 0;
					afterImage.style.clip = "rect(auto, auto, auto, 0)";
				} else if (x >= parentWidth) {
					grap.style.left = parentWidth + "px";
					afterImage.style.clip = "rect(auto, auto, auto, " + parentWidth + "px)";
				} else {
					grap.style.left = x + "px";
					afterImage.style.clip = "rect(auto, auto, auto, " + x + "px)";
				}
				if (x < leftText) {
					leftTextDOM.style.opacity = 0;
				} else {
					leftTextDOM.style.opacity = 1;
				}
				if (x > rightText) {
					rightTextDOM.style.opacity = 0;
				} else {
					rightTextDOM.style.opacity = 1;
				}
			}
			document.ontouchmove = function(e) {
				move(e);
			}
			document.ontouchend = function() {
				document.ontouchstart = null;
				document.ontouchend = null;
			}
		}
	});
	// Energy battery background
	const energyBattery = document.getElementById("energyBattery");
	function anim() {
		for (let i = 1; i <= 100; i ++) {
			setTimeout(() => {
				energyBattery.style.left = "calc(50% + " + 95 * i / 100 + "px)";
			}, i * 10)
			if(i == 100) {
				energyBattery.prepend(energyBattery.querySelector(".energy__battery-item:last-child"));
			}
		}
	}
	animate = setInterval(anim, 1000);
	function removeAnim() {
		animate = setInterval(anim, 1000);
		document.removeEventListener("mouseenter", removeAnim);
	}
	document.addEventListener("mouseleave", function() {
		clearInterval(animate);
		document.addEventListener("mouseenter", removeAnim);
	});

	const ninthInfo = document.getElementById("ninthInfo");
	const windows = document.getElementById("windows");
	windows.style.marginTop = ninthInfo.clientHeight + "px";


	function animateItems(elem, delay, y) {
		const height = elem.clientHeight;
		const top = document.documentElement.clientHeight - elem.getBoundingClientRect().y - y;
		setTimeout(() => {
			if(top >= 0) {
				elem.classList.add("animate");
			} else {
				elem.classList.remove("animate");
			}
		}, delay)
	}

	// Animate in first load page
	const animationItems = document.querySelectorAll(".animation");
	animationItems.forEach(item => {
		if(item.dataset.delay && item.dataset.animy) {
			const delay = item.dataset.delay;
			const y = item.dataset.animy;
			animateItems(item, delay, y);
		} else if(item.dataset.delay) {
			const delay = item.dataset.delay;
			animateItems(item, delay, 0);
		} else if(item.dataset.animy) {
			const y = item.dataset.animy;
			animateItems(item, 0, y);
		} else {
			animateItems(item, 0, 0);
		}
	});

	document.addEventListener("scroll", function() {
		const animationItems = document.querySelectorAll(".animation");
		animationItems.forEach(item => {
			if(item.dataset.delay && item.dataset.animy) {
				const delay = item.dataset.delay;
				const y = item.dataset.animy;
				animateItems(item, delay, y);
			} else if(item.dataset.delay) {
				const delay = item.dataset.delay;
				animateItems(item, delay, 0);
			} else if(item.dataset.animy) {
				const y = item.dataset.animy;
				animateItems(item, 0, y);
			} else {
				animateItems(item, 0, 0);
			}
		});
	});


	// For ninth block
	ninthInfo.querySelector(".info__description").classList.add("ninth-fade-in-left");
	ninthInfo.querySelector(".info__title").classList.add("ninth-fade-in-left");
	ninthInfo.querySelector(".info__icon").classList.add("ninth-fade-in-up");
	ninthInfo.querySelector(".second-info__images-left").classList.add("ninth-fade-in");
	ninthInfo.querySelector(".second-info__images-right").classList.add("ninth-fade-in");
	document.addEventListener("scroll", function() {
		const seventh = document.getElementById("seventh");
		if(seventh.getBoundingClientRect().bottom <= document.documentElement.clientHeight/100*30) {
			setTimeout(() => {
				ninthInfo.querySelector(".info__description").classList.add("active");
				ninthInfo.querySelector(".info__title").classList.add("active");
			}, 500)
			ninthInfo.querySelector(".info__icon").classList.add("active");
			ninthInfo.querySelector(".second-info__images-left").classList.add("active");
			ninthInfo.querySelector(".second-info__images-right").classList.add("active");
		} else {
			setTimeout(() => {
				ninthInfo.querySelector(".info__description").classList.remove("active");
				ninthInfo.querySelector(".info__title").classList.remove("active");
			}, 500)
			ninthInfo.querySelector(".info__icon").classList.remove("active");
			ninthInfo.querySelector(".second-info__images-left").classList.remove("active");
			ninthInfo.querySelector(".second-info__images-right").classList.remove("active");
		}
	});

	document.querySelectorAll(".links-grid__item-link:not(#links-to-ninth)").forEach(link => {
		link.addEventListener("click", function(event) {
			event.preventDefault();
			const scroll = document.getElementById(link.dataset.href).offsetTop;
			window.scrollTo({
				top: scroll,
	    		behavior: "smooth"
			})
		});
	});
	document.getElementById("links-to-ninth").addEventListener("click", function() {
		event.preventDefault();
		const scroll = document.getElementById("seventh").offsetTop + document.documentElement.clientHeight;
		window.scrollTo({
			top: scroll,
    		behavior: "smooth"
		})
	});

	const compareSliders = document.querySelectorAll(".compare-slider");
	compareSliders.forEach(slider => {
		slider.style.height = slider.clientWidth/2.11 + "px";
	});
});