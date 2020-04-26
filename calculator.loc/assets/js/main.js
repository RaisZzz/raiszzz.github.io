document.addEventListener('DOMContentLoaded', function(){

	let input_range = document.querySelectorAll('.calculator input[type="range"]');
	let rate_val = document.getElementById('rate');
	let comission = document.getElementById('commission');

	input_range.forEach(elem => {
		elem.parentNode.querySelector('span').style.width = elem.offsetWidth/elem.max*elem.value + 'px';

		elem.addEventListener('input', function(){
			let range_line = elem.parentNode.querySelector('span');
			let range_val = elem.parentNode.parentNode.querySelector('.value');
			let summ = document.getElementById('summ').value;
			let time = document.getElementById('time').value;
			let rate;

			range_line.style.width = elem.offsetWidth/elem.max*elem.value + 'px';
			range_val.innerHTML = elem.value;

			if(time == 1){

				if(summ >= 1 && summ < 100000){
					rate = 12.17;
				}else if(summ >= 100000 && summ < 200000){
					rate = 10.95;
				}else if(summ >= 200000 && summ < 300000){
					rate = 10.54;
				}else if(summ >= 300000 && summ < 400000){
					rate = 10.04;
				}else if(summ >= 400000 && summ < 500000){
					rate = 8.76;
				}else if(summ >= 500000 && summ < 700000){
					rate = 8.69;
				}else if(summ >= 700000 && summ < 999000){
					rate = 8.53;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.14;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.14;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.14;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.89;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.89;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.88;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.88;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.88;
				}else if(summ == 20000000){
					rate = 3.88;
				}

			}else if(time == 2){

				if(summ >= 1 && summ < 100000){
					rate = 10.34;
				}else if(summ >= 100000 && summ < 200000){
					rate = 10.04;
				}else if(summ >= 200000 && summ < 300000){
					rate = 10.14;
				}else if(summ >= 300000 && summ < 400000){
					rate = 9.58;
				}else if(summ >= 400000 && summ < 500000){
					rate = 8.03;
				}else if(summ >= 500000 && summ < 700000){
					rate = 8.08;
				}else if(summ >= 700000 && summ < 999000){
					rate = 8.04;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.14;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.11;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.12;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.87;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.87;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.87;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.87;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.87;
				}else if(summ == 20000000){
					rate = 3.87;
				}

			}else if(time == 3){

				if(summ >= 1 && summ < 100000){
					rate = 9.73;
				}else if(summ >= 100000 && summ < 200000){
					rate = 9.73;
				}else if(summ >= 200000 && summ < 300000){
					rate = 9.60;
				}else if(summ >= 300000 && summ < 400000){
					rate = 9.13;
				}else if(summ >= 400000 && summ < 500000){
					rate = 7.62;
				}else if(summ >= 500000 && summ < 700000){
					rate = 7.59;
				}else if(summ >= 700000 && summ < 999000){
					rate = 7.55;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.14;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.12;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.11;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.87;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.87;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.86;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.86;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.86;
				}else if(summ == 20000000){
					rate = 3.86;
				}

			}else if(time == 4){

				if(summ >= 1 && summ < 100000){
					rate = 9.13;
				}else if(summ >= 100000 && summ < 200000){
					rate = 9.13;
				}else if(summ >= 200000 && summ < 300000){
					rate = 9.02;
				}else if(summ >= 300000 && summ < 400000){
					rate = 8.59;
				}else if(summ >= 400000 && summ < 500000){
					rate = 7.06;
				}else if(summ >= 500000 && summ < 700000){
					rate = 7.04;
				}else if(summ >= 700000 && summ < 999000){
					rate = 7.03;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.11;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.11;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.11;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.86;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.86;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.86;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.86;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.86;
				}else if(summ == 20000000){
					rate = 3.86;
				}

			}else if(time == 5){

				if(summ >= 1 && summ < 100000){
					rate = 8.76;
				}else if(summ >= 100000 && summ < 200000){
					rate = 8.64;
				}else if(summ >= 200000 && summ < 300000){
					rate = 8.60;
				}else if(summ >= 300000 && summ < 400000){
					rate = 8.03;
				}else if(summ >= 400000 && summ < 500000){
					rate = 6.52;
				}else if(summ >= 500000 && summ < 700000){
					rate = 6.54;
				}else if(summ >= 700000 && summ < 999000){
					rate = 6.53;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.11;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.10;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.10;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.86;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.86;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.86;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.86;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.86;
				}else if(summ == 20000000){
					rate = 3.86;
				}

			}else if(time == 6){

				if(summ >= 1 && summ < 100000){
					rate = 8.11;
				}else if(summ >= 100000 && summ < 200000){
					rate = 8.11;
				}else if(summ >= 200000 && summ < 300000){
					rate = 8.04;
				}else if(summ >= 300000 && summ < 400000){
					rate = 7.55;
				}else if(summ >= 400000 && summ < 500000){
					rate = 6.04;
				}else if(summ >= 500000 && summ < 700000){
					rate = 6.03;
				}else if(summ >= 700000 && summ < 999000){
					rate = 6.03;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.10;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.10;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.10;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.86;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.86;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.86;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.85;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.85;
				}else if(summ == 20000000){
					rate = 3.85;
				}

			}else if(time == 7){

				if(summ >= 1 && summ < 100000){
					rate = 7.65;
				}else if(summ >= 100000 && summ < 200000){
					rate = 7.56;
				}else if(summ >= 200000 && summ < 300000){
					rate = 7.53;
				}else if(summ >= 300000 && summ < 400000){
					rate = 7.04;
				}else if(summ >= 400000 && summ < 500000){
					rate = 5.53;
				}else if(summ >= 500000 && summ < 700000){
					rate = 5.54;
				}else if(summ >= 700000 && summ < 999000){
					rate = 5.53;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.10;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.09;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.10;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.85;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.85;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.85;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.85;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.85;
				}else if(summ == 20000000){
					rate = 3.85;
				}

			}else if(time == 8){

				if(summ >= 1 && summ < 100000){
					rate = 7.15;
				}else if(summ >= 100000 && summ < 200000){
					rate = 7.07;
				}else if(summ >= 200000 && summ < 300000){
					rate = 6.44;
				}else if(summ >= 300000 && summ < 400000){
					rate = 6.31;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.84;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.82;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.83;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.09;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.09;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.09;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.85;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.85;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.85;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.85;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.85;
				}else if(summ == 20000000){
					rate = 3.85;
				}

			}else if(time == 9){

				if(summ >= 1 && summ < 100000){
					rate = 6.35;
				}else if(summ >= 100000 && summ < 200000){
					rate = 6.29;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.54;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.54;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.57;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.56;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.55;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.10;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.09;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.09;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.85;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.85;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.85;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.85;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.85;
				}else if(summ == 20000000){
					rate = 3.85;
				}

			}else if(time == 10){

				if(summ >= 1 && summ < 100000){
					rate = 5.60;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.60;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.56;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.20;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.55;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.55;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.55;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.09;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.09;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.09;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.84;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.84;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.84;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.84;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.84;
				}else if(summ == 20000000){
					rate = 3.84;
				}

			}else if(time == 11){

				if(summ >= 1 && summ < 100000){
					rate = 5.64;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.64;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.57;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.09;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.56;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.55;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.55;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.09;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.09;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.09;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.83;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.83;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.83;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.83;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.83;
				}else if(summ == 20000000){
					rate = 3.83;
				}

			}else if(time == 12){

				if(summ >= 1 && summ < 100000){
					rate = 5.68;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.63;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.54;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.07;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.54;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.55;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.54;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.09;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.08;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.08;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.82;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.82;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.82;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.82;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.82;
				}else if(summ == 20000000){
					rate = 3.82;
				}

			}else if(time == 13){

				if(summ >= 1 && summ < 100000){
					rate = 5.62;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.62;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.55;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.08;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.55;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.55;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.54;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.09;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.09;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.09;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.82;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.82;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.82;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.82;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.82;
				}else if(summ == 20000000){
					rate = 3.82;
				}

			}else if(time == 14){

				if(summ >= 1 && summ < 100000){
					rate = 5.65;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.65;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.56;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.08;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.55;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.56;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.56;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.10;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.10;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.09;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.83;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.83;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.83;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.83;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.83;
				}else if(summ == 20000000){
					rate = 3.83;
				}

			}else if(time == 15){

				if(summ >= 1 && summ < 100000){
					rate = 5.68;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.64;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.57;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.09;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.57;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.57;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.56;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.10;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.10;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.10;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.84;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.84;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.84;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.84;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.84;
				}else if(summ == 20000000){
					rate = 3.84;
				}

			}else if(time == 16){

				if(summ >= 1 && summ < 100000){
					rate = 5.70;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.67;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.58;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.09;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.58;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.57;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.57;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.11;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.11;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.11;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.84;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.84;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.84;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.84;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.84;
				}else if(summ == 20000000){
					rate = 3.84;
				}

			}else if(time == 17){

				if(summ >= 1 && summ < 100000){
					rate = 5.73;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.69;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.61;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.12;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.58;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.58;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.58;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.12;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.12;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.12;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.85;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.85;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.85;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.85;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.85;
				}else if(summ == 20000000){
					rate = 3.85;
				}

			}else if(time == 18){

				if(summ >= 1 && summ < 100000){
					rate = 5.68;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.68;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.61;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.12;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.60;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.59;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.59;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.12;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.12;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.12;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.86;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.85;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.85;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.85;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.85;
				}else if(summ == 20000000){
					rate = 3.85;
				}

			}else if(time == 19){

				if(summ >= 1 && summ < 100000){
					rate = 5.70;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.70;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.61;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.14;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.60;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.60;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.60;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.13;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.13;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.13;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.86;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.86;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.86;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.86;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.86;
				}else if(summ == 20000000){
					rate = 3.86;
				}

			}else if(time == 20){

				if(summ >= 1 && summ < 100000){
					rate = 5.72;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.72;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.64;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.14;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.61;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.61;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.60;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.14;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.14;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.14;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.86;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.87;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.87;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.87;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.87;
				}else if(summ == 20000000){
					rate = 3.87;
				}

			}else if(time == 21){

				if(summ >= 1 && summ < 100000){
					rate = 5.74;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.74;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.64;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.16;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.61;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.62;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.62;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.14;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.14;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.14;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.87;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.87;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.87;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.87;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.87;
				}else if(summ == 20000000){
					rate = 3.87;
				}

			}else if(time == 22){

				if(summ >= 1 && summ < 100000){
					rate = 5.75;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.75;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.66;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.17;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.62;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.62;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.62;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.15;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.15;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.15;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.88;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.88;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.88;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.88;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.88;
				}else if(summ == 20000000){
					rate = 3.88;
				}

			}else if(time == 23){

				if(summ >= 1 && summ < 100000){
					rate = 5.77;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.74;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.68;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.17;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.63;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.63;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.63;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.16;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.16;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.16;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.88;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.88;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.88;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.88;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.88;
				}else if(summ == 20000000){
					rate = 3.88;
				}

			}else if(time == 24){

				if(summ >= 1 && summ < 100000){
					rate = 5.78;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.75;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.68;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.18;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.64;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.64;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.64;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.17;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.16;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.16;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.89;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.89;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.89;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.89;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.89;
				}else if(summ == 20000000){
					rate = 3.89;
				}

			}else if(time == 25){

				if(summ >= 1 && summ < 100000){
					rate = 5.79;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.77;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.69;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.20;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.65;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.65;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.65;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.17;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.17;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.17;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.90;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.90;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.90;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.90;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.90;
				}else if(summ == 20000000){
					rate = 3.90;
				}

			}else if(time == 26){

				if(summ >= 1 && summ < 100000){
					rate = 5.81;
				}else if(summ >= 100000 && summ < 200000){
					rate = 5.79;
				}else if(summ >= 200000 && summ < 300000){
					rate = 5.70;
				}else if(summ >= 300000 && summ < 400000){
					rate = 5.20;
				}else if(summ >= 400000 && summ < 500000){
					rate = 4.65;
				}else if(summ >= 500000 && summ < 700000){
					rate = 4.65;
				}else if(summ >= 700000 && summ < 999000){
					rate = 4.65;
				}else if(summ >= 999000 && summ < 1000000){
					rate = 4.17;
				}else if(summ >= 1000000 && summ < 2000000){
					rate = 4.17;
				}else if(summ >= 2000000 && summ < 2999000){
					rate = 4.17;
				}else if(summ >= 2999000 && summ < 3000000){
					rate = 3.90;
				}else if(summ >= 3000000 && summ < 5000000){
					rate = 3.90;
				}else if(summ >= 5000000 && summ < 7000000){
					rate = 3.90;
				}else if(summ >= 7000000 && summ < 10000000){
					rate = 3.90;
				}else if(summ >= 10000000 && summ < 20000000){
					rate = 3.90;
				}else if(summ == 20000000){
					rate = 3.90;
				}

			}
			
			comission.innerHTML = Math.ceil(summ*rate/100/365*time *100)/100;
			rate_val.innerHTML = rate;

		});
	});
});