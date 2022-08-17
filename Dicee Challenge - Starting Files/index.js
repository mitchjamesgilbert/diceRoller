
// Rolls the first die
function randomDiceChange1() {
  randomNumber1 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
  return randomNumber1;
}

// Rolls the second die
function randomDiceChange2() {
  randomNumber2 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
  return randomNumber1;
}

// For loop which causes the first die to change image every 200 ms
for (var i = 300; i < 2400; i += 200) {
  setTimeout(() => {
    randomDiceChange1()
  }, i);
}

// For loop which causes the second die to change image every 200 ms
for (var i = 300; i < 2400; i += 200) {
  setTimeout(() => {
    randomDiceChange2()
  }, i);
}

// Changes the heading to announce the winner after dice finish rolling (2400ms)
setTimeout(() => {
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It is a draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
}, 2400)
