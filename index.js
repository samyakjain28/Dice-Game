var randomnumber1 = Math.ceil((Math.random() * 5) + 1);
var randomnumber2 = Math.ceil((Math.random() * 5) + 1);
var imageAdd1 = "images/dice" + randomnumber1 + ".png";
var imageAdd2 = "images/dice" + randomnumber2 + ".png";
document.getElementById("leftDice").src = imageAdd1;
document.getElementById("rightDice").src = imageAdd2;

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won!!";
} else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!!";
}