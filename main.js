const $arenas = document.querySelector(`.arenas`);
const $randomButton = document.querySelector(`.button`);

const player1 = {
	player: 1,
	name: `Scorpion`,
	hp: 100,
	img: `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
	weapon: [`swors`, `qunay`],
	attack: function() {
		console.log(this.name + `fight`);
	}
}

const player2 = {
	player: 2,
	name: `SUB-ZERO`,
	hp: 100,
	img: `http://reactmarathon-api.herokuapp.com/assets/subzero.gif`,
	weapon: [`swors`, `qunay`],
	attack: function() {
		console.log(this.name + `fight`);
	}
}

function changeHp(player) {
	const $playerLife = document.querySelector(`.player` + player.player +` .life`);
	var lostHp = Math.ceil(Math.random() * 20);
	const newHp = player.hp - lostHp;
	console.log(player.name + `HP ` + player.hp + `-` + lostHp + `=` + newHp + (newHp > 0 ? `` : `(fix=0)`));
	newHp > 0 ? player.hp = newHp : player.hp = 0;
	$playerLife.style.width = player.hp + '%';

	console.log(player.hp);
	if (player.hp <= 0) {
		$arenas.appendChild(playerLose(player.name));
	}
}

function playerLose(name) {
	const $loseTitle = createElement(`div`, `loseTitle`);
	$loseTitle.innerText = name + ` lose`;
	$randomButton.disabled = true;
	return $loseTitle;
}


$randomButton.addEventListener(`click`, function() {
	console.log(`click`);
	if (Math.floor(Math.random() * 2) > 0) {
		changeHp(player2);
	} else {
		changeHp(player1);
	}
})

function createPlayer(area, player, name) {
	area.appendChild(initPlayer(player, name));
}

function createElement(tag, className) {
	const $tag = document.createElement(tag);
	if (className) {
		$tag.classList.add(className);
	}
	return $tag;
}

function initPlayer(classPlayer, playerObj) {

	const $player = createElement(`div`, classPlayer);
	const $progressbar = createElement(`div`, `progressbar`);
	const $life = createElement(`div`, `life`);
	const $name = createElement(`div`, `name`);
	const $character = createElement(`div`, `character`);
	const $img = createElement(`img`);

	$img.src = playerObj.img;
	$life.style.width = playerObj.hp + '%';
	$name.innerText = playerObj.name;

	$player.appendChild($progressbar);
		$progressbar.appendChild($life);
		$progressbar.appendChild($name);
	$player.appendChild($character);
		$character.appendChild($img);
	return $player;
}


createPlayer($arenas, 'player1', player1);
createPlayer($arenas, 'player2', player2);