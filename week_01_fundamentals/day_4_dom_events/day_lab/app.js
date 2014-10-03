

var styleListElements = function(){
	var list_items = document.querySelectorAll("div#essentials > ul > li");
	for (var i = list_items.length - 1; i >= 0; i--) {
		list_items[i].style.backgroundColor = "yellow";
		list_items[i].addEventListener("click", selectItem);
	};
}

var selectItem = function( event ){
	console.log("Clicked item:" + this.innerHTML + ". Event:" + event);
	this.classList.add("selected");
	document.querySelector("img").setAttribute("src","./images/" + this.innerHTML + ".jpeg");
}


var changeGreeting = function(){
	var greeting_div = document.getElementById("greeting");
	greeting_div.innerHTML = "Hello Planet earth!";
}

var resetButtonHandler = function() { 
	var list_items = document.querySelectorAll("li");
	for (var i = list_items.length - 1; i >= 0; i--) {
		list_items[i].className = "";
		document.querySelector("img").setAttribute("src","./images/panic.jpeg");
	};
}

var initialize = function(){
	console.log("Window done loading page");
	changeGreeting();
	styleListElements();

	document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload=initialize;

console.log("JavaScript is alive!");


