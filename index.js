let image1 = document.getElementsByTagName("img")[0];

let image2 = document.getElementsByTagName("img")[1];

let winner = document.getElementsByClassName("refresh")[0];

let getRandomNumber = () => {
  let n = Math.random();
  n = Math.floor(n * 6);
  n += 1;
  return n;
  return "./images/dice" + n + ".png";
};

let dice1 = getRandomNumber();
let dice2 = getRandomNumber();
let str1 = "./images/dice" + dice1 + ".png";
let str2 = "./images/dice" + dice2 + ".png";
let winnerStr = "";
if (dice1 == dice2) {
  winnerStr = "Draw!";
} else if (dice1 > dice2) {
  winnerStr = "🚩 Player 1 wins";
} else {
  winnerStr = "Player 2 wins 🚩";
}

winner.innerText = winnerStr;

image1.setAttribute("src", str1);
image2.setAttribute("src", str2);
image1.setAttribute("style", "visibility: visible");
image2.setAttribute("style", "visibility: visible");
