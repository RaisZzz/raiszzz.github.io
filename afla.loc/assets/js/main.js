document.addEventListener("DOMContentLoaded", function() {
	const licenseRadios = document.querySelectorAll(".license-radio");
	const licenseCount = document.getElementById("license-count");
	const licenseTotal = document.getElementById("license-total");
	const selectedPlan = document.getElementById("selected-plan");

	licenseRadios.forEach(radio => {
		radio.onchange = license;
	});
	licenseCount.onchange = license;

	function license() {
		const currLicense = document.querySelector(".license-radio:checked");
		const currPlan = currLicense.dataset.plan;
		const currPrice = parseInt(currLicense.dataset.price);
		const currCount = parseInt(document.getElementById("license-count").value);
		
		const total = currPrice * currCount;

		licenseTotal.innerHTML = total;
		selectedPlan.innerHTML = currPlan;
	}
	license(); // first init
});