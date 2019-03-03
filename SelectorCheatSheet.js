
// VANILLA JS
//SELECT
var tag = document.getElementById("first");
var tags = document.getElementsByClassName("special");
console.log(tags[0]);
var tags = document.getElementsByTagName("p");
console.log(tags[0]);
//select by ID
var tag = document.querySelector("#first");
//select by Class / Returns the first element
var tag = document.querySelector(".special");
//select by class / returns a list
var tags = document.querySelectorAll(".special");
//select by tag
var tag = document.querySelector("h1");
//select by tag
var tags = document.querySelectorAll("h1");

//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

var tag = document.querySelector("h1");
//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");
//REMOVE A CLASS
tag.classList.remove("another-class");
//TOGGLE A CLASS
tag.classList.toggle("another-class");

//<p>   This is an <strong>awesome</strong> paragraph  </p>
//Select the <p> tag:
var tag = document.querySelector("p");
tag.textContent //"This is an awesome paragraph"
tag.textContent = "blah blah blah"; // the <strong> is lost
tag.innerHTML //"This is an <strong>awesome</strong> paragraph"

//<a href="www.google.com">I am a link</a>
//<img src="logo.png">
var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href","www.dogs.com"); 
///<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png"); //<img src="corgi.png">
//srcset

//EVENTS
//click, hovering, drag and drop, press keys
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});

// jQUERY

// SELECTION
// Act like a querySelectorAll
$("div")
$("li")[0]

//MANIPULATION
$("div").css("background-color", "purple");
$("#adorable").css({color: "red", background: "pink", border: "2px solid purple"})
$("div").first().css("color", "pink"); Or $("div:first-of-type").css("color", "pink");

$("ul").text();
$("h1").text("New text!!!!");
$("ul").html();
$("ul").html("<li>Ahaah</li> <li>Ohohoh</li>"); 
$("img").attr("src", "https://c1.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("input").attr("type");
$("input").attr("type", "color");

$("input").val();
$("input").val("new value");

$("h1").addClass("Correct");
$("h1").removeClass("Correct");
$("h1").toggleClass("Correct");

//EVENTS
$("li").click(function(){
	$(this).css("background","pink");
});

$("input[type='text']").keypress(function(){

});

$("input").keypress(function(event){
	if (event.which === 13) {
		alert("you hit enter: " + $(this).val());
	}
});

$("li").on("click", function(){
	$(this).css("background","pink");
});

$("li").fadeOut();

$("button").on("click", function(){
	$("li").fadeOut();
})
$("button").on("click", function(){
	$("li").fadeOut(400, function(){
		$(this).remove();
		console.log("fadeOut complete");
	});
})

$("ul").on("click", "li", function(){
	$(this).toggleClass("todo-done");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("li").fadeIn();
$("li").fadeToggle();
$("li").slideDown();
$("li").slideUp();
$("li").slideToggle();
