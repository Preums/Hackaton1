 let selected = 0;

 document.getElementById("f01").addEventListener("click", function( event ) {
 	let url = document.getElementById("f01").src;
 	document.getElementById("fighter_01").src= url;
 	selected +=1;
 	apply();
 });


  document.getElementById("f05").addEventListener("click", function( event ) {
 	let url = document.getElementById("f05").src;
 	document.getElementById("fighter_02").src= url;
 	selected +=1;
 	apply();
 });


const apply = ()=>{
	if (selected === 2){
  	document.getElementById("Choose").style.display = 'none';
	document.getElementById("Start_fight").style.display = 'block';
  };
};
