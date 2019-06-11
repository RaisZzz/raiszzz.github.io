$(document).ready(function(){
	$('#power').on('click',function(){
		$('.numbers').toggleClass('opacity');
	});
	function time(){
		var date = new Date();
			hours = date.getHours();
			min = date.getMinutes();
			day = date.getDate();
			month = date.getMonth();
			if(month > 0 && month < 10){
				month = '0' + month;
			}
			if(day > 0 && day < 10){
				day = '0' + day;
			}
			if(min >= 0 && min < 10){
				min = '0' + min;
			}
			if(hours > 0 && hours < 10){
				hours = '0' + hours;
			}
			start = new Date(date.getFullYear(), 0, 0);
			diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
			oneDay = 1000 * 60 * 60 * 24;
			dayofyear = Math.floor(diff / oneDay);
		document.getElementById('time').innerHTML = hours + ':' + min;
		document.getElementById('day').innerHTML = day;
		document.getElementById('month').innerHTML = month;
		document.getElementById('dayofyear').innerHTML = dayofyear;
		setInterval(time, 10000);
	}
	function drawCircle() {
        var i = 0;
        var circle = document.getElementById("arc");
        var angle = 0;
        var radius = 530;     
        window.timer = window.setInterval(
	        function() {
	            angle -=5;  
	            angle %= dayofyear;
	            var radians= (angle/180) * Math.PI;
	            var x = 600 + Math.cos(radians) * radius;
	            var y = 400 + Math.sin(radians) * radius;
	            var e = circle.getAttribute("d");
	            if(i==0) {
	                var d = e+ " M "+x + " " + y;
	            }
	            else {
	                var d = e+ " L "+x + " " + y;
	            }  
	            if (angle === 5 && i !== 0) {
	                window.clearInterval(window.timer);
	            }
	            circle.setAttribute("d", d);
	            i++;
	        },10)
	    }
    function drawCircle2() {
        var i = 0;
        var circle = document.getElementById("arc2");
        var angle = 0;
        var radius = 530;     
        window.timer = window.setInterval(
	        function() {
	            angle -=5;  
	            angle %= day*12;
	            var radians= (angle/180) * Math.PI;
	            var x = 600 + Math.cos(radians) * radius;
	            var y = 400 + Math.sin(radians) * radius;
	            var e = circle.getAttribute("d");
	            if(i==0) {
	                var d = e+ " M "+x + " " + y;
	            }
	            else {
	                var d = e+ " L "+x + " " + y;
	            }  
	            if (angle === 5 && i !== 0) {
	                window.clearInterval(window.timer);
	            }
	            circle.setAttribute("d", d);
	            i++;
	        },10)
	    }
	function drawCircle3() {
        var i = 0;
        var circle = document.getElementById("arc3");
        var angle = 0;
        var radius = 530;     
        window.timer = window.setInterval(
	        function() {
	            angle -=5;  
	            angle %= day*15;
	            var radians= (angle/180) * Math.PI;
	            var x = 600 + Math.cos(radians) * radius;
	            var y = 400 + Math.sin(radians) * radius;
	            var e = circle.getAttribute("d");
	            if(i==0) {
	                var d = e+ " M "+x + " " + y;
	            }
	            else {
	                var d = e+ " L "+x + " " + y;
	            }  
	            if (angle === 5 && i !== 0) {
	                window.clearInterval(window.timer);
	            }
	            circle.setAttribute("d", d);
	            i++;
	        },10)
	    }
	drawCircle();
	drawCircle2();
	drawCircle3();
	time();
});