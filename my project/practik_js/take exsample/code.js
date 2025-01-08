let point = 0;
let count = 20;
let nRm = 0;

let limitiLev2 = 10;
let limitiLev3 = 20;
let limitiLev4 = 25;
// let limitLev5 = 15;
let gameOver = 70; // за все уровни

let diapazonL1 = 20;
let diapazonL2 = 30;
let diapazonL3 = 40;
let diapazonL4 = 60;

let timerl1 = 6;
let timerl1s = "00";
let timerl2 = 3;
let timerl2s = "00";
let timerl3 = 4;
let timerl3s = "00";
let timerl4 = 5;
let timerl4s = "00";

let timer = 0;
let timerS = "00";
let textLavel = "";
let carenLavcel = 0;

// let proverka = document.getElementById("proverka");
// let numberUser;
// document.querySelector(".count").textContent = `колличество попвток ${count}`;
// document.querySelector(".point").textContent = `ваши очки ${point}`;
// proverka.addEventListener("click", function () {
//   if (nRm === 0) {
//     nRm = randomNamber(1, 20);
//   }
//   numberUser = document.getElementById("numberUser").value;

//   if (numberUser == nRm) {
//     alert("вы угадали чило");
//     count = 20;
//     nRm = 0;
//     point++;
//     document.body.style.backgroundColor = "green";
//   } else if (nRm > numberUser) {
//     alert("число  больше");
//     count--;
//   } else if (nRm < numberUser) {
//     alert("число меньше");
//     count--;
//   }
//   document.querySelector(".count").textContent = `колличество попвток ${count}`;
//   document.querySelector(".point").textContent = `ваши очки ${point}`;
// });
// function randomNamber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// _____________________________________________________________________

let startGame = document.querySelector(".play");
let pageStart = document.querySelector(".pageStart");
let menu = document.querySelector(".menu");
startGame.addEventListener("click", function () {
  pageStart.style.display = "none";
  menu.style.display = "flex";
});
// __________________________________________________________________
let levelChange = document.querySelectorAll(".level");
levelChange.forEach((elem, index) => {
  elem.addEventListener("click", function () {
    let lavelText = elem.textContent;
    if (lavelText == "Легкий уровень") {
      carenLavcel = 1;
    } else if (lavelText == "Средний уровень") {
      if (point >= limitiLev2) carenLavcel = 2;
      else alert("надо пройти предыдущий уровень");
    } else if (lavelText == "Сложный уровень") {
      if (point >= limitiLev3) carenLavcel = 3;
      else alert("надо пройти предыдущий уровень");
    } else if (lavelText == "хард кор") {
      if (point >= limitiLev4) carenLavcel = 4;
      else alert("надо пройти предыдущий уровень");
    }
    if (carenLavcel != 0) {
      document.querySelector(".container2").style.display = "block";
      document.querySelector(".pageStart").style.display = "none";
      document.querySelector(".menu").style.display = "none";
    }
    switch (carenLavcel) {
      case 1:
        timer = timerl1;
        timerS = timerl1s;
        textLavel = "Легкий уровень";
        break;
    }
    document.querySelector(".lavel1").textContent = textLavel;
    document.querySelector(".timer1").textContent =
      timerl1.toString() + ":" + timerl1s.toString();
  });
});
