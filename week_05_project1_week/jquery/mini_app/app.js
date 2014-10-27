"use strict";

var initialize = function() {

	// var greeting_div = document.getElementById("greeting");
	// greeting_div.innerHTML = "Hello Planet earth!";
  $('#greeting').html("Hello Planet earth!");

	var initItems = function () {
    $("li")
      .css({ 'background-color': 'yellow'})
      .on('click', function(e) {
        $(this).addClass("selected");
        $("img").attr("src","./images/"+this.innerHTML+".jpeg")
      });
		// var list_items = document.querySelectorAll("li");
  //   for (var i = 0; i < list_items.length; i++) {
  //     list_items[i].style.backgroundColor = "yellow";
  //     list_items[i].addEventListener("click", function(event) {
  //       console.log("Click on list item:" + this.innerHTML + ". Event:" + event);
  //       this.classList.add("selected");
  //       document.querySelector("img").setAttribute("src","./images/"+this.innerHTML+".jpeg")
  //     });
  //   };
  };

  initItems();

  $("img").bind("click", function() {
    console.log("Clicked! via event listener");
  });
  // document.querySelector("img").addEventListener("click", function() {
  //   console.log("Clicked! via event listener");
  // })

  $("#reset").bind("click", function() {
    $("li").removeClass("selected");
    $("img").attr("src","./images/panic.jpeg");
  });
  // document.querySelector("#reset").addEventListener("click", function() {
  //   var list_items = document.querySelectorAll("li");
  //   for (var i = 0; i < list_items.length; i++) {
  //     list_items[i].className = "";
  //     document.querySelector("img").setAttribute("src","./images/panic.jpeg")
  //   }
  // });

  console.log("init done");
};

// window.onload=initialize;
$(window).load(initialize);
