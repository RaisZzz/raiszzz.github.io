let reg_name = document.getElementById('registration').querySelector('input[type="name"]');
let reg_mail = document.getElementById('registration').querySelector('input[type="mail"]');
let reg_pass = document.getElementById('registration').querySelector('input[type="password"]');
let reg_name_err = document.getElementById('registration').querySelector('#name_error');
let reg_mail_err = document.getElementById('registration').querySelector('#mail_error');
let reg_pass_err = document.getElementById('registration').querySelector('#pass_error');
let reg_btn = document.getElementById('registration').querySelector('button');
let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

reg_name.oninput = function() {
	if(reg_name.value.length > 0 && pattern.test(reg_mail.value) && reg_pass.value.length > 0){
		reg_btn.disabled = false;
	}else{
		reg_btn.disabled = true;
	}

	if(reg_name.value.length <= 0){
		reg_name_err.innerHTML = 'Введите имя';
	}else{
		reg_name_err.innerHTML = '';
	}
};
reg_mail.oninput = function() {
	if(reg_name.value.length > 0 && pattern.test(reg_mail.value) && reg_pass.value.length > 0){
		reg_btn.disabled = false;
	}else{
		reg_btn.disabled = true;
	}

	if(reg_mail.value.length <= 0){
		reg_mail_err.innerHTML = 'Введите e-mail';
	}else{
		if(pattern.test(reg_mail.value)){
			reg_mail_err.innerHTML = '';
		}else{
			reg_mail_err.innerHTML = 'Введите корректный e-mail';
		}
	}
};
reg_pass.oninput = function() {
	if(reg_name.value.length > 0 && pattern.test(reg_mail.value) && reg_pass.value.length > 5){
		reg_btn.disabled = false;
	}else{
		reg_btn.disabled = true;
	}

	if(reg_pass.value.length <= 0){
		reg_pass_err.innerHTML = 'Введите пароль';
	}else if(reg_pass.value.length <= 5){
		reg_pass_err.innerHTML = 'Пароль должен состоять как минимум из 6 символов';
	}else{
		reg_pass_err.innerHTML = '';
	}
};