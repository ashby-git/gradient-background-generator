var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColors(event) {

	var color1a = Math.floor(Math.random() * 256); 
	var color1b = Math.floor(Math.random() * 256); 
	var color1c = Math.floor(Math.random() * 256); 
	var color2a = Math.floor(Math.random() * 256); 
	var color2b = Math.floor(Math.random() * 256); 
	var color2c = Math.floor(Math.random() * 256); 


	newRandomColor1 = rgbToHex(color1a, color1b, color1c)
	newRandomColor2 = rgbToHex(color2a, color2b, color2c)

	color1.value = newRandomColor1
	color2.value = newRandomColor2

	body.style.background = 
	"linear-gradient(to right, " 
	+ newRandomColor1 
	+ ", " 
	+ newRandomColor2
	+ ")";

	css.textContent = body.style.background + ";";

}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColors);











