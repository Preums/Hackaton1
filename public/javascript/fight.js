class combat {
	constructor(player1,player2) {
		this.fistP1 = player1.speed + player1.power;
		this.kickP1 = player1.strength + player1.power;
		this.dodgeP1 = player1.intelligence + player1.speed;

		this.fistP2 = player2.speed + player1.power;
		this.kickP2 = player2.strength + player1.power;
		this.dodgeP2 = player2.intelligence + player1.speed;
	}

	getRound (player1,player2,coup1,coup2) {
		if ((coup1 ===1) && (coup2 ===1)) {
			let degatP1 = Math.random()*this.fistP2;
			player1.durability -= degatP1;
			let degatP2 = Math.random()*this.fistP1;
			player2.durability -= degatP2;
			if (degatP1>degatP2) {
				return `le poing de ${player1.nameP1} est plus incrusté dans la joue de ${player2.name} que l'inverse;`
			}
			return `le poing de ${player2.nameP2} est plus incrusté dans la joue de ${player1.name} que l'inverse`;

		} else if ((coup1 ===2) && (coup2 ===2)) {
			let degatP1 = Math.random()*this.kickP2;
			console.log(this.kickP2);
			player1.durability -= degatP1;
			let degatP2 = Math.random()*this.kickP1;
			player2.durability -= degatP2;
			if (degatP1>degatP2) {
				return `${player2.name} sent bien le pied de ${player1.name} dans son...nez, mais il lui a effleuré le tibia`;
			}
			return `${player1.name} sent bien le pied de ${player2.name} dans son...nez, mais il lui a effleuré le tibia`;
		
		} else if ((coup1 ===1) && (coup2 ===3)) {
			if (Math.random()*this.dodgeP1 < Math.random()*this.fistP2) {
				let degatP1 = Math.random()*this.fistP2;
				player1.durability -= degatP1;
				return `le poing de ${player2.name} s'applatie lourdement sur ${player1.name} qui tentais désespérement de fuir`;
			} else {
				let degatP2 = Math.random()*this.dodgeP1;
				player2.durability -= degatP2;
				return `le poing de ${player2.name} frappe le mur qui était derrière ${player1.name}, quel lourdeau !`;
			}

		} else if ((coup1 ===3) && (coup2 ===1)) {
			if (Math.random()*this.dodgeP2 < Math.random()*this.fistP1) {
				let degatP2 = Math.random()*this.fistP1;
				player2.durability -= degatP2;
				return `le poing de ${player1.name} s'applatie lourdement sur ${player2.name} qui tentais désespérement de fuir`;
			} else {
				let degatP1 = Math.random()*this.dodgeP2;
				player1.durability -= degatP1;
				return `le poing de ${player1.name} frappe le mur qui était derrière ${player2.name}, quel lourdeau !`;
			}

		} else if ((coup1 ===2) && (coup2 ===3)) {
			if (Math.random()*this.dodgeP1 < Math.random()*this.kickP2) {
				let degatP1 = Math.random()*this.kickP2;
				player1.durability -= degatP1;
				return `le pied ${player2.name} s'applatie sur le visage de ${player1.name} qui lamentablement d'esquiver`;
			} else {
				let degatP2 = Math.random()*this.dodgeP1;
				player2.durability -= degatP2;
				return `le tibia de ${player2.name} frappe le poteau qui était derrière ${player1.name}, ça fais mal !`;
			}

		} else if ((coup1 ===3) && (coup2 ===2)) {
			if (Math.random()*this.dodgeP2 < Math.random()*this.kickP1) {
				let degatP2 = Math.random()*this.kickP1;
				player2.durability -= degatP2;
				return `le pied ${player1.name} s'applatie sur le visage de ${player2.name} qui lamentablement d'esquiver`;;
			} else {
				let degatP1 = Math.random()*this.dodgeP2;
				player1.durability -= degatP1;
				return `le tibia de ${player1.name} frappe le poteau qui était derrière ${player2.name}, ça fais mal !`;
			}

		}	else if ((coup1 ===1) && (coup2 ===2)) {
				let degatP1 = Math.random()*this.kickP2;
				player1.durability -= degatP1;
				let degatP2 = Math.random()*this.fistP1;
				player2.durability -= degatP2;
				if (degatP1>degatP2) {
					return `le genoux de ${player1.name} est endolorie mais une molaire de ${player2.name} a volé;`
				}
				return `le poing de ${player1.name} finis sur le bras de ${player2.name} qui a mis son genoux dans...`;

		} 	else if ((coup1 ===2) && (coup2 ===1)) {
				let degatP1 = Math.random()*this.fistP2;
				player1.durability -= degatP1;
				let degatP2 = Math.random()*this.kickP1;
				player2.durability -= degatP2;
				if (degatP1>degatP2) {
					return `le poing de ${player2.name} finis sur le bras de ${player1.name} qui a mis son genoux dans...`;
				}
				return `le genoux de ${player2.name} est endolorie mais une molaire de ${player1.name} a volé;`
			
		} else if ((coup1 ===3) && (coup2===3)) {
			return `Quand vous aurez finis de dancer, vous pouvez vous battre`;
		}
	}

	getWinner(player1,player2) {
		if ((player1.durability <= 0) && (player2.durability > 0)) {
			return `${player2.name} Win !!!`;
		} else if ((player2.durability <= 0) && (player1.durability > 0)) {
			return `${player1.name} Win !!!`;
		} else {
			//console.log(`player1 vaut: ${JSON.stringify(player1,0,2)} et player2 vaut: ${JSON.stringify(player2,0,2)}`)
			return `Que le combat continue`;
		}
	}

}

// joueur de test


class player {
constructor (name, speed, power, strength, intelligence,durability) {
	this.name = name;
	this.speed = speed;
	this.power = power;
	this.strength = strength;
	this.power = power;
	this.intelligence = intelligence;
	this.durability = durability;
	}
}

let player1;
let player2;
// let player3;
// let player4;

function createPlayer1() {
	window.fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/5.json`)
	.then(res => res.json())
		.then(resJson => {
		player1 = new player(resJson.name, resJson.powerstats.power, resJson.powerstats.speed, resJson.powerstats.strength, resJson.powerstats.intelligence, resJson.powerstats.durability);
		});
	}

	function createPlayer2() {
	window.fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/45.json`)
	.then(res => res.json())
	.then(resJson => {

		player2 = new player(resJson.name, resJson.powerstats.power, resJson.powerstats.speed, resJson.powerstats.strength, resJson.powerstats.intelligence, resJson.powerstats.durability);
	});
}



// function createPlayer3() {
// window.fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/177.json`)
// .then(res => res.json())
// .then(resJson => {

// player3 = new player(resJson.name, resJson.powerstats.power, resJson.powerstats.speed, resJson.powerstats.strength, resJson.powerstats.intelligence, resJson.powerstats.durability);
// });
// }
// function createPlayer4() {
// window.fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/517.json`)
// .then(res => res.json())
// .then(resJson => {

// player4 = new player(resJson.name, resJson.powerstats.power, resJson.powerstats.speed, resJson.powerstats.strength, resJson.powerstats.intelligence, resJson.powerstats.durability);
// });
//}

createPlayer1()
createPlayer2()
// createPlayer3()
// createPlayer4()
setTimeout(function() {
console.log("war1 : ", player1);
console.log("war2 : ", player2);
// console.log("war3 : ", player3);
// console.log("war4 : ", player4);
console.log("intelligence war1 : ", player4.intelligence);
console.log("speed war2 : ", player2.speed);
// console.log("durability war3 : ", player3.durability);
// console.log("power war4 : ", player4.power);
}, 2000)