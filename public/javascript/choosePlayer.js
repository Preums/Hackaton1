 let selected = 0;
 let fightersP1 = document.getElementsByClassName("forP1");
 let fightersP2 = document.getElementsByClassName("forP2");


 for (let i = 0; i < fightersP1.length; i++) {
 	fightersP1[i].addEventListener("click", function( event ) {
 		let url = fightersP1[i].src;
 		document.getElementById("fighter_01").src= url;
 		selected +=1;
 		apply();
 	});
 };

 for (let i = 0; i < fightersP2.length; i++) {
 	fightersP2[i].addEventListener("click", function( event ) {
 		let url = fightersP2[i].src;
 		document.getElementById("fighter_02").src= url;
 		selected +=1;
 		apply();
 	});
 };


const apply = ()=>{
	if (selected === 2){
	document.getElementsByClassName("toggle")[0].style.display = 'none';
	document.getElementsByClassName("toggle")[1].style.display = 'none';
  	document.getElementById("Choose").style.display = 'none';
	document.getElementById("Start_fight").style.display = 'block';
  };
};
