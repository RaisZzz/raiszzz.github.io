// Textarea autoresize
(function(b){b.fn.autoResize=function(f){var a=b.extend({onResize:function(){},animate:!0,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1E3},f);this.filter("textarea").each(function(){var d=b(this).css({"overflow-y":"hidden",display:"block"}),f=d.height(),g=function(){var c={};b.each(["height","width","lineHeight","textDecoration","letterSpacing"],function(b,a){c[a]=d.css(a)});return d.clone().removeAttr("id").removeAttr("name").css({position:"absolute",top:0,left:-9999}).css(c).attr("tabIndex","-1").insertBefore(d)}(),h=null,e=function(){g.height(0).val(b(this).val()).scrollTop(1E4);var c=Math.max(g.scrollTop(),f)+a.extraSpace,e=b(this).add(g);h!==c&&(h=c,c>=a.limit?b(this).css("overflow-y",""):(a.onResize.call(this),a.animate&&"block"===d.css("display")?e.stop().animate({height:c},a.animateDuration,a.animateCallback):e.height(c)))};d.unbind(".dynSiz").bind("keyup.dynSiz",e).bind("keydown.dynSiz",e).bind("change.dynSiz",e)});return this}})(jQuery);
// Unselectable
function preventSelection(element){
  var preventSelection = false;
  function addHandler(element, event, handler){
    if (element.attachEvent) 
      element.attachEvent('on' + event, handler);
    else 
      if (element.addEventListener) 
        element.addEventListener(event, handler, false);
  }
  function removeSelection(){
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection && document.selection.clear)
      document.selection.clear();
  }
  function killCtrlA(event){
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    if (sender.tagName.match(/INPUT|TEXTAREA/i))
      return;
    var key = event.keyCode || event.which;
    if (event.ctrlKey && key == 'A'.charCodeAt(0))
    {
      removeSelection();

      if (event.preventDefault) 
        event.preventDefault();
      else
        event.returnValue = false;
    }
  }
  addHandler(element, 'mousemove', function(){
    if(preventSelection)
      removeSelection();
  });
  addHandler(element, 'mousedown', function(event){
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
  });
  addHandler(element, 'mouseup', function(){
    if (preventSelection)
      removeSelection();
    preventSelection = false;
  });
  addHandler(element, 'keydown', killCtrlA);
  addHandler(element, 'keyup', killCtrlA);
}
preventSelection(document);

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
	document.querySelectorAll('.canvas_input').forEach(elem => {
		let dnd = document.createElement('div');
		dnd.className = 'dnd_icon';
		elem.parentNode.append(dnd);
		dnd.onmousedown = function dragndrop(e) {

			let upelem = '';
			
			document.onmousemove = function(e) {
				before_dnd_save(elem.parentNode);
			elem.parentNode.style.position = 'absolute';
			elem.parentNode.className = 'input_container draggable';
			moveAt(e);

			let width = '';

			document.body.appendChild(elem.parentNode);
			elem.parentNode.hidden = true;
			elem.parentNode.style.zIndex = 99;
			elem.parentNode.hidden = false;

			function moveAt(e) {
				elem.parentNode.style.left = e.pageX - 5 + 'px';
				elem.parentNode.style.top = e.pageY - elem.parentNode.offsetHeight - 25 + 'px';
			}
				moveAt(e);
				document.body.onmousemove = function(){
					elem.parentNode.hidden = true;
					upelem = document.elementFromPoint(event.clientX, event.clientY);
					if(upelem.className == 'input_container' || upelem.className == 'dnd_icon focused' || upelem.className == 'dnd_icon' || upelem.className == 'canvas_input'){
						if(upelem.className == 'input_container'){
							upelem = upelem.parentNode;
						}else{
							upelem = upelem.parentNode.parentNode;
						}
					}else if(upelem.className == 'canvas_block_number' || upelem.className == 'canvas_block_name' || upelem.className == 'canvas_block_desc'){
						upelem = upelem.parentNode;
					}
					focus_elem = document.elementFromPoint(event.clientX, event.clientY);
					if(focus_elem.className == 'canvas_block_number' || focus_elem.className == 'canvas_block_name' || focus_elem.className == 'canvas_block_desc'){
						focus_elem = focus_elem.parentNode;
					}
					width = upelem.offsetWidth - 4;
					elem.parentNode.style.width = width + 'px';
					document.querySelectorAll('div').forEach(elem => {
						elem.classList.remove('focused');
					});
					document.querySelectorAll('textarea').forEach(elem => {
						elem.classList.remove('focused');
					});
					focus_elem.classList.add('focused');
					elem.parentNode.hidden = false;
				}
			}

			elem.parentNode.onmouseup = function() {
				document.querySelectorAll('div').forEach(elem => {
					elem.classList.remove('focused');
				});
				document.querySelectorAll('textarea').forEach(elem => {
					elem.classList.remove('focused');
				});

				document.onmousemove = null;
				elem.parentNode.onmouseup = null;
				document.body.onmousemove = null;
				elem.parentNode.className = 'input_container';
				if(upelem.className == 'input_container' || upelem.className == 'dnd_icon' || upelem.className == 'canvas_input'){
					if(upelem.className == 'input_container'){
						prevelem = upelem;
						upelem = upelem.parentNode;
					}else{
						prevelem = upelem.parentNode;
						upelem = upelem.parentNode.parentNode;
					}
					prevelemtxt = prevelem.querySelector('.canvas_input:nth-child(2)').value;
					prevelem.querySelector('.canvas_input:nth-child(2)').value = elem.parentNode.querySelector('.canvas_input:nth-child(2)').value;
					upelem.append(elem.parentNode);
					elem.parentNode.querySelector('.canvas_input:nth-child(2)').value = prevelemtxt;
				}else if(upelem.className == 'canvas_block'){
					upelem.append(elem.parentNode);
				}else if(upelem.className == 'canvas_block_number' || upelem.className == 'canvas_block_name' || upelem.className == 'canvas_block_desc'){
					upelem = upelem.parentNode;
				}
				elem.parentNode.style.width = '100%';
				elem.parentNode.style.position = 'relative';
				elem.parentNode.style.top = 0;
				elem.parentNode.style.left = 0;
				dnd_save(elem.parentNode);
			}
		}
		// Add delete button
		let del_btn = document.createElement('div');
		del_btn.className = 'delete_button';
		elem.parentNode.append(del_btn);
		del_btn.addEventListener('click', function(){
			elem.parentNode.remove();
		});

		elem.addEventListener('focusout', function(){input_focusout(elem);});
		elem.addEventListener('focusin', function(){input_focusin(elem);});
		elem.onkeydown = function(){
			add_input(elem);
			return specialText(elem, event);
			function specialText(elem, event){
				if(elem.value.length == 0 && (event.keyCode == 32 || event.keyCode == 13 || event.keyCode == 9)){
					return false;
				}
			}
		}
		elem.innerHTML = elem.dataset.value;
	});
	jQuery('.canvas_input').autoResize({
		extraSpace : 0
	});

	// Clear canvas
	document.getElementById('clear').addEventListener('click', function(){
		document.getElementById('clear_confirm').className = 'active';
	});
	document.getElementById('cancel_clear').addEventListener('click', function(){
		document.getElementById('clear_confirm').className = '';
	});
	document.getElementById('confirm_clear').addEventListener('click', function(){
		document.querySelectorAll('.canvas_input').forEach(elem => {
			elem.parentNode.remove();
		});
		document.getElementById('clear_confirm').className = '';
	});

	// Copy link
	document.getElementById('canvas_link').addEventListener('click', function(){
		let range = document.createRange();
		range.selectNode(document.getElementById('canvas_link'));
		window.getSelection().addRange(range);
		document.execCommand('copy');
		window.getSelection().removeAllRanges();
		alert('Copied');
	});

	// Canvas Main
	document.querySelectorAll('.canvas_block').forEach(elem => {
		elem.addEventListener('click', function(target){
			if(target.target.className != 'input_container' && target.target.className != 'canvas_input' && target.target.className != 'dnd_icon'){
				if(elem.querySelector('textarea:last-child') == null){
					createInput(elem);
				}else if (elem.querySelector('textarea:last-child').value.replace(/[^A-Za-zА-Яа-яЁё0-9,./-=+]/g, "") != '') {
					createInput(elem);
				}
			}
		});
	});
});

// Input's create
function createInput(elem){
	let div = document.createElement('div');
	div.className = 'input_container';
	let dnd = document.createElement('div');
	dnd.className = 'dnd_icon';

	// Create Input
	let input = document.createElement('textarea');
	input.className = 'canvas_input';
	input.addEventListener('focusout', function(){input_focusout(input);});
	input.addEventListener('focusin', function(){input_focusin(input);});
	input.onkeydown = function(){
		add_input(input);
		return specialText(input, event);
		function specialText(input, event){
			if(input.value.length == 0 && (event.keyCode == 32 || event.keyCode == 13 || event.keyCode == 9)){
				return false;
			}
		}
	}
	input.placeholder = 'Type in something..';
	div.append(input);
	div.append(dnd);
	dnd.onmousedown = function dragndrop(e) {

		let upelem = '';

		document.onmousemove = function(e) {
			before_dnd_save(div);
			div.style.position = 'absolute';
			div.className = 'input_container draggable';
			moveAt(e);

			let width = '';

			document.body.appendChild(div);
			div.hidden = true;
			div.style.zIndex = 99;
			div.hidden = false;

			function moveAt(e) {
				div.style.left = e.pageX - 5 + 'px';
				div.style.top = e.pageY - div.offsetHeight - 25 + 'px';
			}
			moveAt(e);
			document.body.onmousemove = function(){
				div.hidden = true;
				upelem = document.elementFromPoint(event.clientX, event.clientY);
				console.log(upelem.className);
				if(upelem.className == 'input_container' || upelem.className == 'dnd_icon focused' || upelem.className == 'dnd_icon' || upelem.className == 'canvas_input'){
					if(upelem.className == 'input_container'){
						upelem = upelem.parentNode;
					}else{
						upelem = upelem.parentNode.parentNode;
					}
				}else if(upelem.className == 'canvas_block_number' || upelem.className == 'canvas_block_name' || upelem.className == 'canvas_block_desc'){
					upelem = upelem.parentNode;
				}
				focus_elem = document.elementFromPoint(event.clientX, event.clientY);
				if(focus_elem.className == 'canvas_block_number' || focus_elem.className == 'canvas_block_name' || focus_elem.className == 'canvas_block_desc'){
					focus_elem = focus_elem.parentNode;
				}
				width = upelem.offsetWidth - 4;
				div.style.width = width + 'px';
				document.querySelectorAll('div').forEach(elem => {
					elem.classList.remove('focused');
				});
				document.querySelectorAll('textarea').forEach(elem => {
					elem.classList.remove('focused');
				});
				focus_elem.classList.add('focused');
				div.hidden = false;
			}
		}

		div.onmouseup = function() {
			document.querySelectorAll('div').forEach(elem => {
				elem.classList.remove('focused');
			});
			document.querySelectorAll('textarea').forEach(elem => {
				elem.classList.remove('focused');
			});

			document.onmousemove = null;
			div.onmouseup = null;
			document.body.onmousemove = null;
			div.className = 'input_container';
			if(upelem.className == 'input_container' || upelem.className == 'dnd_icon' || upelem.className == 'canvas_input'){
				if(upelem.className == 'input_container'){
					prevelem = upelem;
					upelem = upelem.parentNode;
				}else{
					prevelem = upelem.parentNode;
					upelem = upelem.parentNode.parentNode;
				}
				prevelemtxt = prevelem.querySelector('.canvas_input:nth-child(2)').value;
				prevelem.querySelector('.canvas_input:nth-child(2)').value = div.querySelector('.canvas_input:nth-child(2)').value;
				upelem.append(div);
				div.querySelector('.canvas_input:nth-child(2)').value = prevelemtxt;
			}else if(upelem.className == 'canvas_block'){
				upelem.append(div);
			}else if(upelem.className == 'canvas_block_number' || upelem.className == 'canvas_block_name' || upelem.className == 'canvas_block_desc'){
				upelem = upelem.parentNode;
			}
			div.style.width = '100%';
			div.style.position = 'relative';
			div.style.top = 0;
			div.style.left = 0;
			dnd_save(div);
		}
	}
	// Add delete button
	let del_btn = document.createElement('div');
	del_btn.className = 'delete_button';
	div.append(del_btn);
	del_btn.addEventListener('click', function(){
		div.remove();
	});

	// Append Input in canvas
	elem.append(div);
	input.focus();
	jQuery(input).autoResize({
		extraSpace : 0
	});
}
function add_input(elem){
	if(event.code == 'Enter'){
		if(elem.value.replace(/[^A-Za-zА-Яа-яЁё0-9,./-=+]/g, "") != ''){
			let div = document.createElement('div');
			div.className = 'input_container';
			let dnd = document.createElement('div');
			dnd.className = 'dnd_icon';

			// Create Input
			let new_input = document.createElement('textarea');
			new_input.className = 'canvas_input';
			new_input.addEventListener('focusout', function(){input_focusout(new_input);});
			new_input.addEventListener('focusin', function(){input_focusin(new_input);});
			new_input.placeholder = 'Type in something..';
			new_input.onkeydown = function(){
				add_input(new_input);
				return specialText(new_input, event);
				function specialText(new_input, event){
					if(new_input.value.length == 0 && (event.keyCode == 32 || event.keyCode == 13 || event.keyCode == 9)){
						return false;
					}
				}
			}
			div.append(new_input);
			div.append(dnd);
			dnd.onmousedown = function dragndrop(e) {

				let upelem = '';
				
				document.onmousemove = function(e) {
					before_dnd_save(div);
				div.style.position = 'absolute';
				div.className = 'input_container draggable';
				moveAt(e);

				let width = '';

				document.body.appendChild(div);
				div.hidden = true;
				div.style.zIndex = 99;
				div.hidden = false;

				function moveAt(e) {
					div.style.left = e.pageX - 5 + 'px';
					div.style.top = e.pageY - div.offsetHeight - 25 + 'px';
				}
					moveAt(e);
					document.body.onmousemove = function(){
						div.hidden = true;
						upelem = document.elementFromPoint(event.clientX, event.clientY);
						if(upelem.className == 'input_container' || upelem.className == 'dnd_icon focused' || upelem.className == 'dnd_icon' || upelem.className == 'canvas_input'){
							if(upelem.className == 'input_container'){
								upelem = upelem.parentNode;
							}else{
								upelem = upelem.parentNode.parentNode;
							}
						}else if(upelem.className == 'canvas_block_number' || upelem.className == 'canvas_block_name' || upelem.className == 'canvas_block_desc'){
							upelem = upelem.parentNode;
						}
						focus_elem = document.elementFromPoint(event.clientX, event.clientY);
						if(focus_elem.className == 'canvas_block_number' || focus_elem.className == 'canvas_block_name' || focus_elem.className == 'canvas_block_desc'){
							focus_elem = focus_elem.parentNode;
						}
						width = upelem.offsetWidth - 4;
						div.style.width = width + 'px';
						document.querySelectorAll('div').forEach(elem => {
							elem.classList.remove('focused');
						});
						document.querySelectorAll('textarea').forEach(elem => {
							elem.classList.remove('focused');
						});
						focus_elem.classList.add('focused');
						div.hidden = false;
					}
				}

				div.onmouseup = function() {
					document.querySelectorAll('div').forEach(elem => {
						elem.classList.remove('focused');
					});
					document.querySelectorAll('textarea').forEach(elem => {
						elem.classList.remove('focused');
					});

					document.onmousemove = null;
					div.onmouseup = null;
					document.body.onmousemove = null;
					div.className = 'input_container';
					if(upelem.className == 'input_container' || upelem.className == 'dnd_icon' || upelem.className == 'canvas_input'){
						if(upelem.className == 'input_container'){
							prevelem = upelem;
							upelem = upelem.parentNode;
						}else{
							prevelem = upelem.parentNode;
							upelem = upelem.parentNode.parentNode;
						}
						prevelemtxt = prevelem.querySelector('.canvas_input:nth-child(2)').value;
						prevelem.querySelector('.canvas_input:nth-child(2)').value = div.querySelector('.canvas_input:nth-child(2)').value;
						upelem.append(div);
						div.querySelector('.canvas_input:nth-child(2)').value = prevelemtxt;
					}else if(upelem.className == 'canvas_block'){
						upelem.append(div);
					}else if(upelem.className == 'canvas_block_number' || upelem.className == 'canvas_block_name' || upelem.className == 'canvas_block_desc'){
						upelem = upelem.parentNode;
					}
					div.style.width = '100%';
					div.style.position = 'relative';
					div.style.top = 0;
					div.style.left = 0;
					dnd_save(div);
				}
			}
			// Add delete button
			let del_btn = document.createElement('div');
			del_btn.className = 'delete_button';
			div.append(del_btn);
			del_btn.addEventListener('click', function(){
				div.remove();
			});

			// Append Input in canvas
			elem.parentNode.parentNode.append(div);
			new_input.focus();
			new_input.value = '';
			jQuery(new_input).autoResize({
				extraSpace : 0
			});
			setTimeout(new_input_clear, 0, new_input);
		}
	}
};

function new_input_clear(new_input){
	new_input.value = '';
}

// Canvas Animation
function input_focusin(elem){
	elem.parentNode.parentNode.className = 'canvas_block active';
};
function input_focusout(elem){
	elem.parentNode.parentNode.className = 'canvas_block';
	if(elem.value.replace(/[^A-Za-zА-Яа-яЁё0-9,./-=+]/g, "") == ''){
		elem.parentNode.remove();
	}else{
		save(elem);
	}
};

// Save name
document.getElementById('name').addEventListener('focusout', function(){
	save_name();
});
function save_name(elem){
	key = 'name';
	value = document.getElementById('name').value;
}

// Save Canvas
function save(elem){
	let key = elem.parentNode.parentNode.querySelector('h3').innerHTML;
	let value = '';
	elem.parentNode.parentNode.querySelectorAll('.input_container').forEach(el => {
		if(el.querySelector('.canvas_input').value == ''){
			if(el.querySelector('.canvas_input').dataset.value != undefined){
				value = value + el.querySelector('.canvas_input').dataset.value + '~~~';
			}
		}else if(el.querySelector('.canvas_input').value != ''){
			value = value + el.querySelector('.canvas_input').value + '~~~';
		}
	});
	value.replace(/undefined~~~/g, '');
	value = value.slice(0, -3);
}
function before_dnd_save(elem){
	let key = elem.parentNode.querySelector('h3').innerHTML;
	let value = '';
	elem.parentNode.querySelectorAll('.input_container').forEach(el => {
		if(el.querySelector('.canvas_input').value == elem.querySelector('.canvas_input').value){
			value = value;
		}
		else if(el.querySelector('.canvas_input').value == ''){
			if(el.querySelector('.canvas_input').dataset.value != undefined){
				value = value + el.querySelector('.canvas_input').dataset.value + '~~~';
			}
		}else if(el.querySelector('.canvas_input').value != ''){
			value = value + el.querySelector('.canvas_input').value + '~~~';
		}
	});
	value.replace(/undefined~~~/g, '');
	value = value.slice(0, -3);
	console.log(key + ' - ' + value);
}
function dnd_save(elem){
	let key = elem.parentNode.querySelector('h3').innerHTML;
	let value = '';
	elem.parentNode.querySelectorAll('.input_container').forEach(el => {
		if(el.querySelector('.canvas_input').value == ''){
			if(el.querySelector('.canvas_input').dataset.value != undefined){
				value = value + el.querySelector('.canvas_input').dataset.value + '~~~';
			}
		}else if(el.querySelector('.canvas_input').value != ''){
			value = value + el.querySelector('.canvas_input').value + '~~~';
		}
	});
	value.replace(/undefined~~~/g, '');
	value = value.slice(0, -3);
	console.log(key + ' - ' + value);
}

// PDF Save
document.getElementById('print').addEventListener('click', function(){
	document.querySelectorAll('.canvas_block').forEach(elem => {
		elem.className = 'canvas_block saved';
	});
	let cnvs = document.getElementById('main_canvas');
	html2canvas(cnvs).then(function(canvas) {
		let img = canvas.toDataURL('image/png');
		let doc = new jsPDF({
			orientation: 'l',
			unit: 'px',
			format: [cnvs.offsetWidth, cnvs.offsetHeight],
			precision: 100
		});
		doc.internal.scaleFactor = 200;
		doc.addImage(img, 'JPEG', 0, 0, cnvs.offsetWidth, cnvs.offsetHeight);
		doc.save('test.pdf');
	});
	document.querySelectorAll('.canvas_block').forEach(elem => {
		elem.className = 'canvas_block';
	});
});
function pdf_save(){
	let cnvs = document.getElementById('main_canvas');
	html2canvas(cnvs).then(function(canvas) {
		let img = canvas.toDataURL('image/png');
		let doc = new jsPDF({
			orientation: 'l',
			unit: 'px',
			format: [cnvs.offsetWidth, cnvs.offsetHeight],
			precision: 100
		});
		doc.internal.scaleFactor = 200;
		doc.addImage(img, 'JPEG', 0, 0, cnvs.offsetWidth, cnvs.offsetHeight);
		doc.save('test.pdf');
	});
}