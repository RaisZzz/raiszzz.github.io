<? require_once './components/header.php' ?>

<div id="canvas">
	<div id="clear_confirm">
		<h2>Are you sure you want to clear this canvas?</h2>
		<div class="clear_buttons">
			<button id="confirm_clear">Yes</button>
			<button id="cancel_clear">No</button>
		</div>
	</div>
	<div class="canvas_container">
		<div class="control_row">
			<button id="back">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M142.716,293.147l-94-107.602l94-107.602c7.596-8.705,6.71-21.924-1.995-29.527c-8.705-7.596-21.917-6.703-29.527,1.995
				L5.169,171.782c-6.892,7.882-6.892,19.65,0,27.532l106.026,121.372c4.143,4.729,9.94,7.157,15.771,7.157
				c4.883,0,9.786-1.702,13.755-5.169C149.427,315.071,150.319,301.852,142.716,293.147z"/></g></g><g><g><path d="M359.93,164.619H20.926C9.368,164.619,0,173.986,0,185.545c0,11.558,9.368,20.926,20.926,20.926H359.93
				c60.776,0,110.218,49.441,110.218,110.211S420.706,426.893,359.93,426.893H48.828c-11.558,0-20.926,9.368-20.926,20.926
				c0,11.558,9.368,20.926,20.926,20.926H359.93c83.844,0,152.07-68.219,152.07-152.063S443.781,164.619,359.93,164.619z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
			</button>
			<div class="info">
				<input id="name" readonly type="text" value="Demo Business Canvas" placeholder="Your Canvas Name">
				<div class="row">
					<p>Business Canvas</p>
				</div>
			</div>
		</div>
		<div class="main_canvas" id="main_canvas">
			<div class="canvas_block">
				<span>2</span>
				<h3>Проблемы</h3>
				<p>
					Перечислите 3 основных проблемы вашего клиента
				</p>
			</div>
			<div class="canvas_block">
				<span>4</span>
				<h3>Решения</h3>
				<p>
					Опишите возможные решения для каждой проблемы
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="value~~~"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span>7</span>
				<h3>Ключевые метрики проекта</h3>
				<p>
					Перечислите ключевые цифры, которыми вы будете измерять успешность вашего проекта
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="PDF save"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span>5</span>
				<h3>Уникальное предложение</h3>
				<p>
					Исходя из вашего решения проблемы, сформулируйте уникальность вашего продукта. Чем он отличается от конкурентов. Его ключевое отличие. (Не более 140 символов)
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Drag'n'drop"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span>9</span>
				<h3>Скрытое преимущество</h3>
				<p>
					Что-то, что не позволит конкурентам быстро скопировать ваш продукт.
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Kill Ilya"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span>6</span>
				<h3>Каналы продаж</h3>
				<p>
					Как клиенты узнают о новом продукте?<br>
					Какими каналами коммуникации они пользуются?<br>
					Как принимают решение?
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Запрет на пробел первым символом"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span>1</span>
				<h3>Целевая аудитория. Кто клиент.</h3>
				<p>
					Для кого мы работаем?<br>
					Кто самый важный клиент?
				</p>
			</div>
			<div class="canvas_block">
				<span>8</span>
				<h3>Структура затрат</h3>
				<p>
					Первоначальные затраты на создание. И регулярные затраты на развитие
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Localisation"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span>3</span>
				<h3>Источники доходов</h3>
				<p>
					Как мы собираемся зарабатывать?
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Фикс 'выпадашек'"></textarea>
				</div>
			</div>
		</div>
	</div>
</div>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script src="./assets/js/view.js"></script>
<script src="./assets/js/jspdf.min.js"></script>
<script src="./assets/js/html2canvas.js"></script>

<? require_once './components/footer.php' ?>