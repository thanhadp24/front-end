$(document).ready(function(){

	let btnPlay = $('.btnPlay');

	btnPlay.on('click', function(){
		let fullname = $('.fullname');
		alert(fullname.val());
		fullname.val('');
	})

	// window event
	$(window).on('resize', function(){
		let width = $(window).width();
		let height = $(window).height();

		console.log(`w${width} - h${height}`);
	})

	// style - effective
	let btnToggle = $('.btnToggle');
	let btnShow = $('.btnShow');
	let btnHide = $('.btnHide');
	let block = $('.style1');
	let block2 = $('.style2');

	// aggregate >> toggle 
	btnToggle.on('click', function(){
		block2.toggleClass('visible');
	})

	btnShow.on('click', function(){
		block.css('visibility', 'visible');
	})

	btnHide.on('click', function(){
		block.css('visibility', 'hidden');
	})
})