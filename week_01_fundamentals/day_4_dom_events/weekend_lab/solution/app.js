
var moves = 0;
var el = document.getElementsByClassName('box');

var marker = function() {
  return moves % 2 === 0 ? "X" : "O"
}

var clearBoard = function () {
  for(var i=0; i<el.length; i++) {
    el[i].innerHTML="";
  }
}

window.onload = function() {
  for (var i=0;i<el.length; i++) {
      el[i].onclick = function(event){

        if (!this.innerHTML) {
          this.innerHTML= marker() ;
          this.classList.add(marker())
          moves++;
        }

      };
  }
}