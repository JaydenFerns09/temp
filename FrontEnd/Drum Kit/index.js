var buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerbutton = this.innerHTML;
    sound(innerbutton);
    active(innerbutton);
  });


  document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event) {
    sound(event.key);
    active(event.key);
  });



  function sound(key) {
    switch (key) {
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    }
  }
}

function active(key) {
  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)

}
