let image1 = document.getElementsByTagName("img")[0];

let image2 = document.getElementsByTagName("img")[1];

let getRandomDice = () => {
  let n = Math.random();
  n = Math.floor(n * 6);
  n += 1;
  return "./images/dice" + n + ".png";
};

let str1 = getRandomDice();
let str2 = getRandomDice();

image1.setAttribute("src", str1);
image2.setAttribute("src", str2);
image1.setAttribute("style", "visibility: visible");
image2.setAttribute("style", "visibility: visible");
