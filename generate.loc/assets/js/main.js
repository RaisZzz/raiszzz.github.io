$(document).ready(function(){

	function makekey1(length) {
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < 4; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		result += '-';
		for ( var i = 0; i < 4; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		result += '-';
		for ( var i = 0; i < 4; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		result += '-';
		for ( var i = 0; i < 4; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	function makekey3(length) {
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < 4; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		result += '-';
		for ( var i = 0; i < 4; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	const type1 = document.getElementById('type1');
	const type2 = document.getElementById('type2');
	const type3 = document.getElementById('type3');
	const keys = document.getElementById('keyss');
$('.radio').on('click', function(){
	if(type1.checked){
		$('#type1p').css('background', '#fff');
		$('#type2p').css('background', '#d0d0d0');
		$('#type3p').css('background', '#d0d0d0');
	}
	if(type2.checked){
		$('#type2p').css('background', '#fff');
		$('#type1p').css('background', '#d0d0d0');
		$('#type3p').css('background', '#d0d0d0');
	}
	if(type3.checked){
		$('#type3p').css('background', '#fff');
		$('#type2p').css('background', '#d0d0d0');
		$('#type1p').css('background', '#d0d0d0');
	}
})

	$('.btn>a').on('click', function(){
		keys.textContent = '';
		const amount = document.getElementById('mount').value;
		if(type1.checked){
			for(var n = 0; n < amount; n++){
				keys.textContent += makekey1(16) + '\n';
			}
			alert('Finished!');
		}
		else if(type2.checked){
			alert('Coming soon..');
		}
		else if(type3.checked){
			for(var n = 0; n < amount; n++){
				keys.textContent += makekey3(8) + '\n';
			}
			alert('Finished!');
		}
		else{
			alert('Oops.. Error');
		}
	});
})