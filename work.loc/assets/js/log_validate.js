let log_mail = document.getElementById('login').querySelector('input[type="mail"]');
let log_pass = document.getElementById('login').querySelector('input[type="password"]');
let log_mail_err = document.getElementById('login').querySelector('#mail_error');
let log_pass_err = document.getElementById('login').querySelector('#pass_error');
let log_btn = document.getElementById('login').querySelector('button');
let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

log_mail.oninput = function() {
	if(pattern.test(log_mail.value) && log_pass.value.length > 0){
		log_btn.disabled = false;
	}else{
		log_btn.disabled = true;
	}

	if(log_mail.value.length <= 0){
		log_mail_err.innerHTML = 'Введите e-mail';
	}else{
		if(pattern.test(log_mail.value)){
			log_mail_err.innerHTML = '';
		}else{
			log_mail_err.innerHTML = 'Введите корректный e-mail';
		}
	}
};
log_pass.oninput = function() {
	if(pattern.test(log_mail.value) && log_pass.value.length > 5){
		log_btn.disabled = false;
	}else{
		log_btn.disabled = true;
	}

	if(log_pass.value.length <= 0){
		log_pass_err.innerHTML = 'Введите пароль';
	}else if(log_pass.value.length <= 5){
		log_pass_err.innerHTML = 'Пароль должен состоять как минимум из 6 символов';
	}else{
		log_pass_err.innerHTML = '';
	}
};