var styleListElements = function(){
	var list_items = document.querySelectorAll("div#essentials > ul > li");
	for (var i = list_items.length - 1; i >= 0; i--) {
	// for (initializer, condition, counter)
		list_items[i].style.backgroundColor = "yellow";
		list_items[i].addEventListener("click", selectItem);
	}
};

var selectItem = function(event){
	// console.log(this.innerHTML);
	this.classList.add("selected");
	document.querySelector("img").setAttribute("src","./images/" + this.innerHTML + ".jpeg");
};

var changeGreeting = function(){
	var greeting_div = document.getElementById("greeting");
	greeting_div.innerHTML = "Hello Planet earth!";
};

var resetButtonHandler = function() {
	var list_items = document.querySelectorAll("li");
	for (var i = list_items.length - 1; i >= 0; i--) {
		list_items[i].className = "";
	}
	document.querySelector("img").setAttribute("src","./images/panic.jpeg");
};

var initialize = function(){
	changeGreeting();
	styleListElements();
	document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload=initialize;


