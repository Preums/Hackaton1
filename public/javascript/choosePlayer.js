 let selected = 0;
 let fightersP1 = document.getElementsByClassName("forP1");
 let fightersP2 = document.getElementsByClassName("forP2");

let fighter1Id = Math.ceil(Math.random()*731);
let fighter2Id = Math.ceil(Math.random()*731);

let rand;
let var1;
let var2;

window.addEventListener('load', function() {
	fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`)
	.then(function(response) {
		let result = response.json();
		return result
	})
	.then(function(myJson) {
		for (var i = 0; i < 4; i++) {
			rand = Math.round(Math.random()*myJson.length);
			var1 = myJson[rand];
			fightersP1[i].src=var1.images.xs;
			let src = fightersP1[i].src
			fightersP1[i].addEventListener("click", function(event) {
				event.preventDefault();
				document.getElementById('fighter_01').src= src;
				selected +=1;
 				apply();
			})
		}


		for (var i = 0; i < 4; i++) {
			rand = Math.round(Math.random()*myJson.length);
			var2 = myJson[rand];
			fightersP2[i].src=var2.images.xs;
			let src = fightersP2[i].src
			fightersP2[i].addEventListener("click", function(event) {
				event.preventDefault();
				document.getElementById('fighter_02').src=src;
				selected +=1;
 				apply();
			})
		}
	});	
})

 // for (let i = 0; i < fightersP1.length; i++) {
 // 	fightersP1[i].addEventListener("click", function( event ) {
	// event.preventDefault();

	// let url = fightersP1[i].src;
 // 	fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${fighter1Id}.json`)
	// .then(function(response) {
	// 	let result = response.json();
	// 	console.log(result);
	// 	return result
	// })
	// .then(function(myJson) {
	// 	document.getElementById('fighter_01').src= myJson.images.sm;
	// 	console.log(myJson);
	// });	
 // 		selected +=1;
 // 		apply();
 // 	});
 // };

 // for (let i = 0; i < fightersP2.length; i++) {
 // 	fightersP2[i].addEventListener("click", function( event ) {
	// event.preventDefault();

	// let url = fightersP2[i].src;
 // 	fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${fighter2Id}.json`)
	// .then(function(response) {
	// 	return response.json();
	// })
	// .then(function(myJson) {
	// 	document.getElementById('fighter_02').src= myJson.images.sm;
	// 	console.log(myJson);
	// });	
 // 		selected +=1;
 // 		apply();
 // 	});
 // };


const apply = ()=>{
	if (selected === 2){
	document.getElementsByClassName("toggle")[0].style.display = 'none';
	document.getElementsByClassName("toggle")[1].style.display = 'none';
  	document.getElementById("Choose").style.display = 'none';
	document.getElementById("Start_fight").style.display = 'block';
	document.getElementById("gamePad").style.display = 'flex';
  };
};


/*

let city = document.getElementById('cityChoice');
city.addEventListener('submit',(e) => {
	e.preventDefault();
	let townSelected = document.getElementById('town').value;
	fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/1.json`)
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		let fighterPicture = document.createElement('img');
		fighterPicture.innerHTML=`<img src="${myJson.images.xs}" alt"fighterPicture">`;
		document.getElementById('weatherAnswer').appendChild(fighterPicture);
		console.log(myJson);
	});
});



selectTry = () => {
	return Math.ceil(Math.random()*731);
}

const randomPlayer =() => {
	let P1Choice =[];
	let P2Choice =[];

	for (var i = 0; i <4; i++) {
		let charachterId = selectTry();

		fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${charachterId}.json`)
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson);
	});
	}
	
return P1Choice;
}

console.log(randomPlayer());


*/