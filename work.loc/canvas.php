<? require_once './components/header.php' ?>

<div id="canvas">
	<div id="clear_confirm">
		<h2 data-en="Are you sure you want to clear this canvas?"
			data-ru="Вы серьезно хотите очистить это полотно?">Вы серьезно хотите очистить это полотно?</h2>
		<div class="clear_buttons">
			<button data-en="Yes" data-ru="Да" id="confirm_clear">Да</button>
			<button data-en="No" data-ru="Нет" id="cancel_clear">Нет</button>
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
				<input id="name" type="text" value="Demo Lean Canvas" placeholder="Your Canvas Name">
				<div class="row">
					<p>Lean Canvas</p>
					<a id="canvas_link" href="#">
						https://thework.ru/en/business/-MlgCwklKmslcPX-6FiAC
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve"><g><g><g><path d="M330.667,0h-256C51.093,0,32,19.093,32,42.667v298.667h42.667V42.667h256V0z"/><path d="M394.667,85.333H160c-23.573,0-42.667,19.093-42.667,42.667v298.667c0,23.573,19.093,42.667,42.667,42.667h234.667								c23.573,0,42.667-19.093,42.667-42.667V128C437.333,104.427,418.24,85.333,394.667,85.333z M394.667,426.667H160V128h234.667
						V426.667z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
					</a>
				</div>
			</div>
			<div class="controls">
				<a id="print">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M472.178,133.907h-54.303V35.132c0-9.425-7.641-17.067-17.067-17.067H111.192c-9.425,0-17.067,7.641-17.067,17.067v98.775
					H39.822C17.864,133.907,0,151.772,0,173.73v171.702c0,21.958,17.864,39.822,39.822,39.822h54.306v91.614
					c0,9.425,7.641,17.067,17.067,17.067h289.61c9.425,0,17.067-7.641,17.067-17.067v-91.614h54.306
					c21.958,0,39.822-17.864,39.822-39.822V173.73C512,151.773,494.136,133.907,472.178,133.907z M128.258,52.199h255.483v81.708
					H128.258V52.199z M383.738,459.801H128.262c0-3.335,0-135.503,0-139.628h255.477C383.738,324.402,383.738,456.594,383.738,459.801
					z M477.867,345.433c0,3.137-2.552,5.689-5.689,5.689h-54.306v-48.014c0-9.425-7.641-17.067-17.067-17.067h-289.61
					c-9.425,0-17.067,7.641-17.067,17.067v48.014H39.822c-3.137,0-5.689-2.552-5.689-5.689V173.731c0-3.137,2.552-5.689,5.689-5.689
					c13.094,0,419.57,0,432.356,0c3.137,0,5.689,2.552,5.689,5.689V345.433z"/></g></g><g><g><path d="M400.808,199.988h-43.443c-9.425,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067h43.443
					c9.425,0,17.067-7.641,17.067-17.067S410.234,199.988,400.808,199.988z"/></g></g><g><g><path d="M329.956,399.834H182.044c-9.425,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067h147.911
					c9.425,0,17.067-7.641,17.067-17.067S339.381,399.834,329.956,399.834z"/></g></g><g><g><path d="M329.956,346.006H182.044c-9.425,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067h147.911
					c9.425,0,17.067-7.641,17.067-17.067S339.381,346.006,329.956,346.006z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
					<p data-en="Print" data-ru="Печать">Печать</p>
				</a>
			</div>
		</div>
		<button data-en="Clear" data-ru="Очистить" id="clear">Очистить</button>
		<div class="main_canvas" id="main_canvas">
			<div class="canvas_block">
				<span class="canvas_block_number">2</span>
				<h3 data-en="Problems" data-ru="Проблемы" class="canvas_block_name">Проблемы</h3>
				<p class="canvas_block_desc">
					Перечислите 3 основных проблемы вашего клиента
				</p>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">4</span>
				<h3 class="canvas_block_name">Решения</h3>
				<p class="canvas_block_desc">
					Опишите возможные решения для каждой проблемы
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="value~~~"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">7</span>
				<h3 class="canvas_block_name">Ключевые метрики проекта</h3>
				<p class="canvas_block_desc">
					Перечислите ключевые цифры, которыми вы будете измерять успешность вашего проекта
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="PDF save"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">5</span>
				<h3 class="canvas_block_name">Уникальное предложение</h3>
				<p class="canvas_block_desc">
					Исходя из вашего решения проблемы, сформулируйте уникальность вашего продукта. Чем он отличается от конкурентов. Его ключевое отличие. (Не более 140 символов)
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Drag'n'drop"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">9</span>
				<h3 class="canvas_block_name">Скрытое преимущество</h3>
				<p class="canvas_block_desc">
					Что-то, что не позволит конкурентам быстро скопировать ваш продукт.
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Kill Ilya"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">6</span>
				<h3 class="canvas_block_name">Каналы продаж</h3>
				<p class="canvas_block_desc">
					Как клиенты узнают о новом продукте?<br>
					Какими каналами коммуникации они пользуются?<br>
					Как принимают решение?
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Запрет на пробел первым символом"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">1</span>
				<h3 class="canvas_block_name">Целевая аудитория. Кто клиент.</h3>
				<p class="canvas_block_desc">
					Для кого мы работаем?<br>
					Кто самый важный клиент?
				</p>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">8</span>
				<h3 class="canvas_block_name">Структура затрат</h3>
				<p class="canvas_block_desc">
					Первоначальные затраты на создание. И регулярные затраты на развитие
				</p>
				<div class="input_container">
					<textarea class="canvas_input" placeholder="Type in something" data-value="Localisation"></textarea>
				</div>
			</div>
			<div class="canvas_block">
				<span class="canvas_block_number">3</span>
				<h3 class="canvas_block_name">Источники доходов</h3>
				<p class="canvas_block_desc">
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
<script src="assets/js/jspdf.min.js"></script>
<script src="./assets/js/html2canvas.js"></script>
<script src="./assets/js/canvas.js"></script>

<? require_once './components/footer.php' ?>