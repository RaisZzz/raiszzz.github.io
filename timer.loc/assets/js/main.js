let startDate = new Date(2021, 11, 1);
const nowDate = new Date();
const elapsedDate = (nowDate - startDate) / 86400000;
const totalDate = 18;
const endDate = new Date(startDate.setMonth(startDate.getMonth()+ totalDate));
startDate = new Date(2021, 11, 1);
const exDate = new Date(startDate.setMonth(startDate.getMonth() + totalDate/2));
startDate = new Date(2021, 11, 1);
const exDateLast = (exDate - startDate) / 86400000;
const endDateLast = (endDate - startDate) / 86400000;

document.addEventListener("DOMContentLoaded", function() {
	const startDateDOM = document.getElementById("start-date");
	const totalDateDOM = document.getElementById("total-date");
	const elapsedDateDOM = document.getElementById("elapsed-date");
	const endDateDOM = document.getElementById("end-date");
	const exDateDOM = document.getElementById("ex-date");
	const exDateLastDOM = document.getElementById("ex-date-last");
	const endDateLastDOM = document.getElementById("end-date-last");

	startDateDOM.innerHTML = startDate.getDate() + "." + (startDate.getMonth()+1) + "." + startDate.getFullYear();
	totalDateDOM.innerHTML = totalDate + " месяцев";
	elapsedDateDOM.innerHTML = Math.floor(elapsedDate) + " дня(ей) " + Math.floor((elapsedDate - Math.floor(elapsedDate)) * 24) + " час(а/ов)";
	endDateDOM.innerHTML = endDate.getDate() + "." + (endDate.getMonth()+1) + "." + endDate.getFullYear();
	exDateDOM.innerHTML = exDate.getDate() + "." + (exDate.getMonth()+1) + "." + exDate.getFullYear();
	exDateLastDOM.innerHTML = Math.floor(exDateLast) + " дня(ей) " + Math.floor((exDateLast - Math.floor(exDateLast)) * 24) + " час(а/ов)";
	endDateLastDOM.innerHTML = Math.floor(endDateLast) + " дня(ей) " + Math.floor((endDateLast - Math.floor(endDateLast)) * 24) + " час(а/ов)";
});