"use strict";
const contentConteiner = document.getElementById("content");
const playBtn = contentConteiner.querySelector(".ok");

let quest;
let notification;
let numGuess;
let attempt = 10;

const numRandom = function () {
  numGuess = Math.ceil(Math.random() * 100);
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

    attempt--;

    quest = prompt(`Угадай число от 1 до 100\nУ вас всего 10 попыток\n
    Это попытка: ${10-attempt} `);

    switch (true) {
      case quest === null:
        alert("Мы рады будем вас видеть снова!");
        notification = `<p>Игра окончена</p>`;
        break;
      case attempt === 0 && x !== isNumber(quest):
        notification = `<p>Попытки закончились.</p>
        <p>Загаданное число = <span>${numGuess}</span></p>
         Хотите сыграть еще?</p>
                  `;
        break;
      case x === isNumber(quest):
        notification = `<p>Поздравляю, Вы угадали! Это число: <span>${numGuess}</span></p>
        <p>Использовано попыток: <span>${10 - attempt}</span> </p>
        <p>Хотели бы <span>сыграть</span> еще?</p>`;
        break;

      case x < isNumber(quest) && x !== isNumber(quest):
        alert(`Загаданное число меньше.\n Осталось попыток:\n ${attempt} `);
        question();
        break;

      case x > isNumber(quest) && x !== isNumber(quest):
        alert(`Загаданное число больше.\n Осталось   попыток:\n ${attempt}`);
        question();
        break;

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
  "afterbegin",
  `
      ${notification}
 `
);

if(playBtn){
 
playBtn.addEventListener("click",  () =>{
  console.log("click")
  window.location.reload();
  return false;
});
}


