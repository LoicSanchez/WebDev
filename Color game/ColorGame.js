
var colors;
var pickedColor;
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
var extremButton = document.querySelector("#extremBtn");

function initializeGame(num){
	colors = generateRandomColors(num);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor.toUpperCase();
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New colors";
	for (var i = 0; i<squares.length; i++){
		squares[i].style.display = "none";
		//add initials color to squares
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	}	
}

initializeGame(6);

resetButton.addEventListener("click", function() {
	if (easyButton.classList.contains("selected")){
		initializeGame(3);
	} else if (hardButton.classList.contains("selected")){
		initializeGame(6);
	} else {
		initializeGame(9);
	}
		
});

easyButton.addEventListener("click", function() {
	if (!easyButton.classList.contains("selected")){
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		extremButton.classList.remove("selected");
		initializeGame(3);
	}
});
hardButton.addEventListener("click", function() {
	if (!hardButton.classList.contains("selected")){
		easyButton.classList.remove("selected");
		hardButton.classList.add("selected");
		extremButton.classList.remove("selected");
		initializeGame(6);
	}
});
extremButton.addEventListener("click", function() {
	if (!extremButton.classList.contains("selected")){
		easyButton.classList.remove("selected");
		hardButton.classList.remove("selected");
		extremButton.classList.add("selected");
		initializeGame(9);
	}
});


for (var i = 0; i<squares.length; i++){
	//add eventListener
	squares[i].addEventListener("click", function(){
		//grab color of cicked square
		var clickedColor = this.style.backgroundColor;
		//compare to reference
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeAllSquaresColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeAllSquaresColor(color){
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0 ; i <num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var strColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	return strColor;
}