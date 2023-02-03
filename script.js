"use strict";
const contentConteiner = document.getElementById("content");
let quest;
let notification;
let numGuess;

const numRandom = function () {
  numGuess = Math.ceil(Math.random() * 100)
  console.log(numGuess);
  return numGuess;
};

const isNumber = function (num) {
  if (num !== null) {
    let numb = num
      .toString()
      .trim()
      .replaceAll(/[""+=-]/g, "");
    let num1 = Number(numb);
    if (num1 > 0) {
      return num1;
    }
  }
};

const showingQuestion = function (x) {
     function question() {
    
    quest = prompt("Угадай число от 1 до 100");

    switch (true) {
      case quest === null:
        notification = `<p>Игра окончена</p>`;
        break;

      case x === quest:
        notification = `<p>Поздравляю, Вы угадали! Это число: <span>${numGuess}</span></p>`;
        break;

      case x < quest && x !== quest:
        alert("Загаданное число меньше");
        question();

      case x > quest && x !== quest:
        alert("Загаданное число больше");
        question();

      case !isNumber(quest):
        alert("Введи число");
        question();
        break;
    }
  }
  question();
};

showingQuestion(numRandom());

contentConteiner.insertAdjacentHTML(
  "beforeend",
  `
  <div class="container">
  ${notification}
  <!--p>Загаданное число: <span>${numGuess}</span></!--p-->

</div>
`
);
