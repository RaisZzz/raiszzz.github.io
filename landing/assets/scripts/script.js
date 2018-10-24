document.querySelector('.resultokno form').onsubmit = function() {
var dostup = ""; var linksmy = document.querySelectorAll("[best=\"true\"]");
for(var i=0; i<linksmy.length; i++) {
if (linksmy[i].value.length == 0) {
linksmy[i].setAttribute('style', 'border: 1px solid red');
var dostup = "off"; }
else linksmy[i].setAttribute('style', 'border: 1px solid green');}
if (dostup == "off") return false;}
var newantirobot = document.createElement('input'); newantirobot.type = "hidden";  newantirobot.name = "antirobotpro"; newantirobot.value = "gdfg56FG423er";
document.querySelector('.resultokno form').appendChild(newantirobot);