var random1 = Math.floor(Math.random()*6) + 1;

var name1 = "images/dice";

var name2 = ".png";

document.querySelector("div img.img1").setAttribute("src",name1 + random1 + name2);

var random2 = Math.floor(Math.random()*6)+1;

document.querySelector("div img.img2").setAttribute("src",name1 + random2 + name2);

if (random1 > random2){

  document.querySelector("div.container h1").textContent = "🚩Player 1 Wins!";

}

else if (random1 < random2){

  document.querySelector("div.container h1").textContent = "Player 2 Wins!🚩";

}

else{

  document.querySelector("div.container h1").textContent = "🚩It's a Tie!🚩";

}
