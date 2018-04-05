const request = new XMLHttpRequest();
const button = document.querySelector("button");
let reponse = {};
console.log("index2 : main.js connected");

window.addEventListener("load", function(e) {
    e.preventDefault();
    request.onreadystatechange = function(event) {
        e.preventDefault();
        // XMLHttpRequest.DONE === 4
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) { // 200 signifie que tout va bien (cf quete curl)
                reponse = JSON.parse(this.responseText);
                console.log("Réponse reçue: %s", this.responseText);
                console.log("reponse inInFunction : ", reponse);
            }
            else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };
    request.open('GET', `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/powerstats/1.json`);
    request.send(null);
});

setTimeout(function() {
    console.log("reponse outFunction : ", reponse);
    document.querySelector(".test").innerHTML = reponse.intelligence;
}, 500)
