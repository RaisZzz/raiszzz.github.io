import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import one from '../img/1.png';
import two from '../img/2.png';
import free from '../img/3.png';
import four from '../img/4.png';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<form>
			<legend>Я ищу...</legend>
			<div class="radio">
				<div class="row">
					<div class="radio-btn">
						<div class="img">
							<img src={one} />
						</div>
						<h3>Компьютер</h3>
					</div>
					<div class="radio-btn">
						<div class="img">
							<img src={two} />
						</div>
						<h3>Ноутбук</h3>
					</div>
				</div>
				<div class="row">
					<div class="radio-btn">
						<div class="img">
							<img src={free} />
						</div>
						<h3>Смартфон</h3>
					</div>
					<div class="radio-btn">
						<div class="img">
							<img src={four} />
						</div>
						<h3>Гаджет</h3>
					</div>
				</div>
				<p>Выберите категорию техники</p>
			</div>
			<div class="for">
				<h2>Для чего?</h2>
				<div class="row">
					<div class="radio-btn">
						<p>Для работы</p>
					</div>
					<div class="radio-btn">
						<p>Для игр</p>
					</div>
					<div class="radio-btn">
						<p>Для семьи</p>
					</div>
					<div class="radio-btn">
						<p>Другое</p>
					</div>
				</div>
			</div>
			<div class="price">
				<h2>Диапазон цены<span>*</span></h2>
				<div class="row">
					<p>0 ₽</p>
					<input type="range" min="0" max="10000" step="1" value="0" />
					<p>10000 ₽</p>
				</div>
			</div>
			<div class="where">
				<h2>Где удобно покупать</h2>
				<div class="row">
					<div class="radio-btn">
						<p>В магазине</p>
					</div>
					<div class="radio-btn">
						<p>В интернете</p>
					</div>
					<div class="radio-btn">
						<p>Все равно</p>
					</div>
				</div>
			</div>
			<div class="comment">
				<p>Комментарий</p>
				<textarea cols="30" rows="10" placeholder="Укажите иные пожелания, например, цвет"></textarea>
			</div>
			<div class="city">
				<h2>Ваш город<span>*</span></h2>
				<input type="text" placeholder="Город" />
			</div>
			<div class="submit">
				<button type="submit">Подать заявку</button>
			</div>
		</form>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
