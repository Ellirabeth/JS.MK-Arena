const player1 = {
	name: ``,
	hp: 0,
	img: ``,
	weapon: [`swors`, `qunay`],
	attack: function() {
		console.log(this.name + `fight`);
	}
}

function createPlayer(player, name, hp) {
	const $arenas = document.querySelector(`.arenas`);
	var $initPlayer = initPlayer(player, name, hp);
	$arenas.appendChild($initPlayer);
}

function initPlayer(player, name, hp) { //hp missing

	const $player1 = document.createElement(`div`);
	$player1.classList.add(player);
		const $progressbar = document.createElement(`div`);
		$progressbar.classList.add(`progressbar`);
			const $life = document.createElement(`div`);
			$life.classList.add(`life`);
			const $name = document.createElement(`div`);
			$name.classList.add(`name`);
				$name.innerHTML = name;
		const $character = document.createElement(`div`);
		$character.classList.add(`character`);
			const $img = document.createElement(`img`);
			$img.src = getSrcByName(name);


	$player1.appendChild($progressbar);
		$progressbar.appendChild($life);
		$progressbar.appendChild($name);
	$player1.appendChild($character);
		$character.appendChild($img);
	return $player1;
}

function getSrcByName(name) {
	var returnSrc = ``;
	switch (name) {
		case `SCORPION`: returnSrc = `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`;
			break;
		case `SUB-ZERO`: returnSrc = `http://reactmarathon-api.herokuapp.com/assets/subzero.gif`;
			break;
		default:
			console.log(`mane not valid`);
			returnSrc = `404.gif`;
	}
	return returnSrc;
}


createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);