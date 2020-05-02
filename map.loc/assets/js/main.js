document.addEventListener('DOMContentLoaded', function(){

	// Yandex Map
	ymaps.ready(function () {

		let myMap = new ymaps.Map('map', {
			center: [55.76, 37.64],
			zoom: 7
		});

		let courier_geo = new ymaps.GeoObject({
			geometry: {
				type: "Polygon",
				coordinates: [
					[[55.513138247145854,36.393980240313844],[55.5256044426536,37.624448990313844],
					[55.7679033929818,38.701109146563844],[56.303008147843066,38.16277906843886],
					[56.20515671228701,36.48187086531385],[55.513138247145854,36.393980240313844]]
				],
				fillRule: "nonZero"
			},
			properties:{
				balloonContent: '<table id="table"><thead><th colspan="4">Стоимость</th></thead><tbody><tr><th><b>359 р.</b><p>курьерская доставка</p></th></tr></tbody></table><style>table{border-collapse: collapse;}thead{background: #F0F0F0;border: 1px solid #ccc;border-width:1px 1px 0 1px;}th{text-align: center;padding: 15px 0;font-size:18px;}tbody th{border:1px solid #ccc;}tbody th:last-child{border-right:1px solid #ccc;}tbody p{font-weight:400;font-size:15px;}</style>'
			}
		}, {
			fillColor: '#82cdff',
			strokeColor: '#1e98ff',
			opacity: 0.5,
			strokeWidth: 5
		});
		let car_geo_one = new ymaps.GeoObject({
			geometry: {
				type: "Polygon",
				coordinates: [
					[[55.70103889201308,34.96575758406386],[54.3505607429181,37.60247633406386],
					[55.545625414364046,40.28314039656386],[56.801851407623715,37.41570875593886],
					[55.70103889201308,34.96575758406386]]
				],
				fillRule: "nonZero"
			},
			properties:{
				balloonContent: '<table id="table"><thead><th colspan="4">Стоимость</th></thead><tbody><tr><th><b>2799 р.</b><p>в течении дня</p></th><th><b>2659 р.</b><p>стандартная (за 4 часа)</p></th><th><b>3719 р.</b><p>точно ко времени</p></th><th><b>от 900 р.</b><p>подъём</p></th></tr></tbody></table><style>table{border-collapse: collapse;}thead{background: #F0F0F0;border: 1px solid #ccc;border-width:1px 1px 0 1px;}th{text-align: center;padding: 15px 0;font-size:18px;}tbody th{border:1px solid #ccc;}tbody th:last-child{border-right:1px solid #ccc;}tbody p{font-weight:400;font-size:15px;}</style>'
			}
		}, {
			fillColor: '#56db40',
			strokeColor: '#1bad03',
			opacity: 0.5,
			strokeWidth: 5
		});
		let car_geo_two = new ymaps.GeoObject({
			geometry: {
				type: "Polygon",
				coordinates: [
					[[55.07431751370048,33.27386305281392],[53.5325082643742,35.97649977156389],
					[53.832524840716324,41.39275953718888],[55.625191287302236,41.54656813093889],
					[57.273730707922994,38.67913649031388],[57.1485425363878,34.713072037188894],[55.07431751370048,33.27386305281392]]
				],
				fillRule: "nonZero"
			},
			properties:{
				balloonContent: '<table id="table"><thead><th colspan="4">Стоимость</th></thead><tbody><tr><th><b>2799 р.</b><p>в течении дня</p></th><th><b>2659 р.</b><p>стандартная (за 4 часа)</p></th><th><b>3719 р.</b><p>точно ко времени</p></th><th><b>от 900 р.</b><p>подъём</p></th></tr></tbody></table><style>table{border-collapse: collapse;}thead{background: #F0F0F0;border: 1px solid #ccc;border-width:1px 1px 0 1px;}th{text-align: center;padding: 15px 0;font-size:18px;}tbody th{border:1px solid #ccc;}tbody th:last-child{border-right:1px solid #ccc;}tbody p{font-weight:400;font-size:15px;}</style>'
			}
		}, {
			fillColor: '#FF0000',
			strokeColor: '#0000FF',
			opacity: 0.5,
			strokeWidth: 5
		});
		
		myMap.geoObjects.add(car_geo_two);

		// Price Area Toggle
		let price_toggle = document.getElementById('price_area');
		price_toggle.addEventListener('input', function(elem){
			if(price_toggle.checked){
				let delivery_type = document.querySelector('.delivery-type-input>input[type="radio"]:checked');
				if(delivery_type.id == 'courier'){
					myMap.geoObjects.add(courier_geo);
				}else if(delivery_type.id == 'car'){
					myMap.geoObjects.add(car_geo_two);
				}
			}else{
				myMap.geoObjects.remove(courier_geo);
				myMap.geoObjects.remove(car_geo_two);
			}
		});

		// YMap Change
		let geos = {
			'courier': courier_geo,
			'car_one': car_geo_one,
			'car_two': car_geo_two
		}
		document.querySelectorAll('input[data-geo]').forEach(elem => {
			elem.addEventListener('input', function(){
				for(let i = 0; i < Object.keys(geos).length; i++){
					myMap.geoObjects.remove(Object.values(geos)[i]);
				}
				myMap.geoObjects.add(geos[elem.dataset.geo]);
				myMap.balloon.open(myMap.getCenter(), {
					contentBody: geos[elem.dataset.geo].properties['_data'].balloonContent
				});
			});
		});

	});

	document.querySelectorAll('.delivery-type-input input').forEach(elem => {
		elem.addEventListener('input', function(){
			document.querySelectorAll('.delivery-type-input input').forEach(elem => {
				elem.parentNode.parentNode.classList.remove('active');
			});
			elem.parentNode.parentNode.classList.add('active');
		});
	});

	document.querySelectorAll('.delivery-prem h3').forEach(elem => {
		elem.addEventListener('click', function(){
			elem.parentNode.classList.toggle('active');
		});
	});

});