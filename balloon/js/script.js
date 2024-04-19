const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const balloonWidth = 100;
const balloonHeight = 205;

let body = document.body;
let colors = ['blue', 'green', 'red', 'violet', 'yellow'];

let score = 0;
let total = 15;
let gameOver = false;
let balloonId = 0;

let shadow = document.querySelector('.total-shadow');

function create(){
	let balloon = document.createElement('div');
	let rand = random(colors.length);

	balloon.className = `balloon balloon-${colors[rand]}`;

	rand =  random(windowWidth - balloonWidth);
	balloon.style.left = rand + 'px';

	balloon.dataset.id = balloonId++; 

	body.appendChild(balloon);
	animate(balloon);
};

function animate(balloon) {
	let moved = 0;
	let interval = setInterval(function() {
		moved += 2;
		let isPoped = document.querySelector(`[data-id="${balloon.dataset.id}"]`) === null;
		
		if(!isPoped && moved >= (windowHeight+balloonHeight)){
			clearInterval(interval);
			gameOver = true;
		}else {
			balloon.style.top = (windowHeight - moved) + 'px';		
		}
	}, 15 - score/10);
}

function pop(balloon) {
	balloon.remove();
	score++;
	updateScore();
	//playSound();
}

document.addEventListener('click', function(event) {
	if(event.target.classList.contains('balloon')){
		pop(event.target);
	}
});

function reset() {
	let balloons = document.querySelectorAll('.balloon');
	for(let balloon of balloons){
		balloon.remove();
	}

	score = 0;
	total = 15;
	updateScore();
	gameOver = false;

}

document.querySelector('.restart').addEventListener('click', function(){
	shadow.style.display = 'none';
	shadow.querySelector(`.lose`).style.display = 'none';
	startGame();
})

document.querySelector('.cancel').addEventListener('click', function(){
	shadow.style.display = 'none';
})


function startGame(){
	// restart game
	reset();

	document.querySelector('.total').textContent = total;

	let timeout = 0;
	let interval = setInterval(function(){
		timeout = random(400);
		if(gameOver){
			// show lose popup
			clearInterval(interval);
			showPopup('lose');
		}else{
			create();
			// if score == total
			// >> clear
			// show win popup
			if(score === total){
				clearInterval(interval);
				showPopup('win');
			}
		}
	}, 300 + timeout)
};

startGame();


// util functions
function showPopup(className){
	shadow.style.display = 'flex';
	shadow.querySelector(`.${className}`).style.display = 'block';
}

function random(bound) {
	return Math.floor(Math.random()*bound);
}

function playSound() {
	let audio = document.createElement('audio');
	audio.src = 'sounds/pop.mp3';
	audio.play();
}

function updateScore() {
	let scores = document.querySelectorAll('.score');
	for(let i of scores){
		i.textContent = score;
	}
}
