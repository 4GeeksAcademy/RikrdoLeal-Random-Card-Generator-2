import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document
    .querySelector("#newButton")
    .addEventListener("click", randomCardGenerator);
};

function randomCardGenerator() {
  const simbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let colors = [];

  function randomGenerate(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }

  const randomSimbol = simbols[randomGenerate(simbols)];
  const randomNumber = numbers[randomGenerate(numbers)];

  const getNumber = document.getElementById("card-number");
  getNumber.innerHTML = randomNumber;

  const getRightSimbol = document.getElementById("right-simbol");
  const getLeftSimbol = document.getElementById("left-simbol");
  getRightSimbol.innerHTML = randomSimbol;
  getLeftSimbol.innerHTML = randomSimbol;

  colors =
    randomSimbol === "&hearts;" || randomSimbol === "&diams;" ? "red" : "";
  getRightSimbol.style.color =
    randomSimbol === "&hearts;" || randomSimbol === "&diams;" ? "red" : "";
  getLeftSimbol.style.color =
    randomSimbol === "&hearts;" || randomSimbol === "&diams;" ? "red" : "";
}
