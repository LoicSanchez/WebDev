


//Cross-off the todo when clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("todo-done");
});

//Delete todo when click on X
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//Create new todo when text entered and Enter key pressed
$("input[type='text']").keypress(function(e){
	if (e.which === 13){
		//grabbing the text value from input text
		var newTodoText = $(this).val();
		//append
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodoText + "</li>");
		//clearing the input field
		$(this).val("");
	}
});

$("#plus").click(function(){
	$("input[type='text']").fadeToggle(250);
	$("#plus").css("display", "none");
	$("#minus").css("display", "inline-block");
});

$("#minus").click(function(){
	$("input[type='text']").fadeToggle(250);
	$("#minus").css("display", "none");
	$("#plus").css("display", "inline-block");
});


// BONUS
// drag and drop to re-order todos