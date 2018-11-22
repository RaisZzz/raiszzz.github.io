function questions() {
	var a = document.getElementById('q1');
	var b = document.getElementById('q2');
	var c = document.getElementById('q3');
	var q = 'begin';
	answ = document.getElementsByName('q');
	for(var i = 0; i < answ.length; i++){
		if(answ[i].checked){
			if(answ[i].value == q){
				document.getElementsByClassName('true')[0].style.display = 'block';
				document.getElementsByClassName('true')[0].innerHTML = 'Правильно!';
				document.getElementsByClassName('true')[0].style.color = '#67ff50 !important';
			}
			else{
				document.getElementsByClassName('true')[0].style.display = 'block';
				document.getElementsByClassName('true')[0].innerHTML = 'Не правильно';
				document.getElementsByClassName('true')[0].attr('style', 'color: #ff0c32 !important');
			}
		}
	}
}