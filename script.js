var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var css = document.querySelector("h6")
var random = document.querySelector(".random")

function backGen() {
	body.style.background = "linear-gradient(to right," 
	+ color1.value 	
	+ ","
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

random.addEventListener("click" , function() {
	color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()* 16777215).toString(16);;
	backGen();
})

color1.addEventListener("input", backGen);
color2.addEventListener("input", backGen);
body.addEventListener("load", backGen());
