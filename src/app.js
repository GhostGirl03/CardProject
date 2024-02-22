/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";

window.onload = function() {
  generatedRandomCard();
};

function generatedRandomCard() {
  const suites = ["♦", "♥", "♠", "♣"];
  const cards = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const suiteIndex = Math.floor(Math.random() * suites.length);
  const cardIndex = Math.floor(Math.random() * cards.length);

  const randomSuite = suites[suiteIndex];
  const randomCard = cards[cardIndex];

  const topSuite = document.querySelector(".superior");
  topSuite.innerText = randomSuite;

  const bottomSuite = document.querySelector(".inferior");
  bottomSuite.innerText = randomSuite;

  const cardValue = document.querySelector(".medio");
  cardValue.innerText = randomCard;

  const suiteColor = suiteIndex >= 2 ? "black" : "red";

  topSuite.style.color = suiteColor;
  bottomSuite.style.color = suiteColor;
  cardValue.style.color = suiteColor;
}
