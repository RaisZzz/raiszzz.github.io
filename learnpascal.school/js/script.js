a = document.getElementById('te').innerHTML;
function test(){
	if(a == document.getElementById('al').value){
		alert('Правильно!');
	}
	else{
		alert('Неправильно.');
	}
}
document.getElementById('btn').onclick = test;