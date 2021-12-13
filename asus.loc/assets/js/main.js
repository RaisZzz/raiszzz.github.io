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
			move(e);
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
	// Windows 11 block scroll
	// const windows = document.getElementById("windows");
	// const windowsWrapper = document.getElementById("windowsWrapper");
	// const ninthInfo = document.getElementById("ninthInfo");
	// const ninthInfoHeight = ninthInfo.clientHeight;
	// windowsWrapper.style.paddingTop = ninthInfoHeight + "px";
	// windowsWrapper.style.marginTop = "-" + ninthInfoHeight + "px";
	// document.addEventListener("scroll", function(e) {
	// 	const ninthInfoBottom = ninthInfo.getBoundingClientRect().y;
	// 	const windowsBottom = document.documentElement.clientHeight - windows.getBoundingClientRect().bottom;
	// 	if (ninthInfoBottom <= 0 && (windowsWrapper.scrollTop - windowsWrapper.clientHeight) <= 0) {
	// 		console.log(ninthInfoBottom)
	// 		windowsWrapper.style.overflowY = "scroll";
	// 		document.body.style.overflowY = "hidden";
	// 		function winScroll() {
	// 			if((windowsWrapper.scrollTop - windowsWrapper.clientHeight) >= 0) {
	// 				windowsWrapper.style.overflowY = "hidden";
	// 				document.body.style.overflowY = "scroll";
	// 				windowsWrapper.removeEventListener("scroll", winScroll);
	// 			}
	// 		}
	// 		windowsWrapper.addEventListener("scroll", winScroll);
	// 	}
	// })
	const ninthInfo = document.getElementById("ninthInfo");
	const windows = document.getElementById("windows");
	windows.style.marginTop = ninthInfo.clientHeight + "px";
	// document.addEventListener("scroll", function() {
	// 	const ninthInfoTop = ninthInfo.getBoundingClientRect().top;
	// 	const ninthInfoBottom = document.documentElement.clientHeight - ninthInfo.getBoundingClientRect().bottom;
	// 	const windowsTop = windows.getBoundingClientRect().top;
	// 	const windowsBottom = document.documentElement.clientHeight - windows.getBoundingClientRect().top;
	// 	if(ninthInfoTop <= 0) {
	// 		ninthInfo.classList.add("fixed");
	// 		windows.style.marginTop = ninthInfo.clientHeight + "px";
	// 	}
	// 	console.log(ninthInfoBottom)
	// 	if(windowsBottom <= 0 && ninthInfoBottom >= 0) {
	// 		ninthInfo.classList.remove("fixed");
	// 		windows.style.marginTop = "0";
	// 	}
	// 	if(windowsTop <= 0) {
	// 		ninthInfo.classList.add("hidden");
	// 	}

	// });
});