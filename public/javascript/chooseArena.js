let backgrounds = document.getElementsByClassName("arena");

for (let i = 0; i < backgrounds.length; i++) {
	backgrounds[i].addEventListener("click", function( event ) {
 	let url = backgrounds[i].src;
 	document.getElementById("Fight").style.display = 'flex';
 	document.getElementById("Fight").style.backgroundImage = 'url(' + url + ')';
 	document.getElementById("Choose_arena").style.display = 'none';
 	document.getElementById("Choose_fighter").style.display = 'block';
 });
}
