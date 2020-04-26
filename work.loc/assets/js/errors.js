function log_mail_error(){
	document.getElementById('mail_error').innerHTML = "Неверная почта.";
}
function log_unmail_error(){
	document.getElementById('mail_error').innerHTML = "Пользователя с такой почтой не существует.";
}
function pass_error(){
	document.getElementById('pass_error').innerHTML = "Неверный пароль."
}
function reg_mail_error(){
	document.getElementById('mail_error').innerHTML = "К сожалению, аккаунт с данной почтой уже создан.";
}