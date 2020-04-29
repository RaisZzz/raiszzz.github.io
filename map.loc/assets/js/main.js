document.addEventListener('DOMContentLoaded', function(){

	document.querySelectorAll('.delivery-type-input input').forEach(elem => {
		elem.addEventListener('input', function(){
			document.querySelectorAll('.delivery-type-input input').forEach(elem => {
				elem.parentNode.parentNode.classList.remove('active');
			});
			elem.parentNode.parentNode.classList.add('active');
		});
	});

	document.querySelectorAll('.delivery-prem h3').forEach(elem => {
		elem.addEventListener('click', function(){
			elem.parentNode.classList.toggle('active');
		});
	});

});