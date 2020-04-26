<? require_once 'components/header.php'; ?>

	<div class="main">
		<div class="container">
			<form action="#" id="registration">
				<svg xmlns="http://www.w3.org/2000/svg" width="28.778" height="52.16" viewBox="0 0 28.778 52.16"><g transform="translate(7246.698 2625)"><path d="M143.537,17.986H131.216L142.638,0H128.249l-13.49,26.979h10.612L114.759,52.16Z" transform="translate(-7361.457 -2625)" fill="#fd1016"/></g></svg>
				<legend>Начните с бесплатной учетной записи</legend>
				<div class="input">
					<input type="name" name="name" placeholder="Ваше имя">
					<span id="name_error"></span>
				</div>
				<div class="input">
					<input type="mail" name="mail" placeholder="E-mail">
					<span id="mail_error"></span>
				</div>
				<div class="input">
					<input type="password" name="password" placeholder="Password">
					<span id="pass_error"></span>
				</div>
				<button disabled>Зарегистрироваться</button>
				<p class="terms">Нажимая кнопку «Зарегистрироваться», Вы принимаете<br>условия <a href="#" target="_blank">Пользовательского соглашения.</a></p>
				<p class="login_btn">Уже зарегистрированы?<a href="login.php">Вход</a></p>
			</form>
		</div>
	</div>
	<script src="./assets/js/reg_validate.js"></script>
	<script src="./assets/js/errors.js"></script>

<? require_once 'components/footer.php'; ?>