$(document).ready(function(){

	let block = document.getElementById('block');

	let posY = document.getElementById('pos-y');
	posY.onchange = function(){
		block.style.top = posY.value + 'px';
	}

	let posX = document.getElementById('pos-x');
	posX.onchange = function(){
		block.style.left = posX.value + 'px';
	}

	let size = document.getElementById('size');
	size.onchange = function(){
		block.style.transform = 'scale(' + size.value + ')';
	}

	let opacity = document.getElementById('opacity');
	opacity.onchange = function(){
		block.style.opacity = opacity.value;
	}

	let shape = document.getElementById('shape-selector');
	let btn = document.getElementById('shape-ok');

	btn.onclick = function(){
		let value = shape.value;
		if(value === 'S1'){
			block.style.borderRadius = '0';
			block.style.transform = 'rotate(0) scale(' + size.value + ')';
		}else if(value === 'S2'){
			block.style.borderRadius = '50%';
		}else if(value === 'S3'){
			block.style.borderRadius = '0';
			block.style.transform = 'rotate(45deg) scale(' + size.value + ')';
		}
	}

	let hex = document.getElementById('hex');
	hex.onkeyup = function(event) {
		if(event.which === 13){
			block.style.backgroundColor = '#' + hex.value;

		}
	}

	// rgba manipulation

	let rgbr = document.getElementById('rgba-r');
	let rgbg = document.getElementById('rgba-g');
	let rgbb = document.getElementById('rgba-b');
	let rgba = document.getElementById('rgba-a');

	let rgbaContainer = document.querySelector('.rgba-container');
	let rgbaInputs = rgbaContainer.querySelectorAll('input');

	for(let i of rgbaInputs){
		i.onchange = function(){
			block.style.backgroundColor = `rgba(${rgbr.value}, ${rgbg.value}, ${rgbb.value}, ${rgba.value})`;
		}
	}

})