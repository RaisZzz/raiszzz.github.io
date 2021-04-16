document.addEventListener("DOMContentLoaded", function() {
	const bannerBtn = document.getElementById("banner-btn");
	const videoPopup = document.getElementById("video-popup");
	const video = document.getElementById("video");
	const videoClose = document.getElementById("video-close");
	const videoBg = document.getElementById("video-bg");

	bannerBtn.addEventListener("click", function() {
		videoPopup.classList.add("active");
		video.play();
	});
	videoClose.addEventListener("click", function() {
		videoPopup.classList.remove("active");
		video.pause();
	});
	videoBg.addEventListener("click", function() {
		videoPopup.classList.remove("active");
		video.pause();
	});
});