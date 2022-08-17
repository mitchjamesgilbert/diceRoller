function randomDiceChange1() {
  randomNumber1 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
  return randomNumber1;
}

function randomDiceChange2() {
  randomNumber2 = Math.floor(Math.random() * 6 + 1);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);
  return randomNumber1;
}

for (var i = 300; i < 2400; i += 200) {
  setTimeout(() => {
    randomDiceChange1()
  }, i);
}

for (var i = 300; i < 2400; i += 200) {
  setTimeout(() => {
    randomDiceChange2()
  }, i);
}

setTimeout(() => {
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It is a draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
}, 2400)
