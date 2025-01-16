// let point = 0;
// let count = 20;
// let nRm = 0;
// point
let limitiLev2 = 10;
let limitiLev3 = 20;
let limitiLev4 = 25;
let limitLev5 = 15;
let gameOver = 70; // за все уровни

let nuwRandomNumber;
// let diapazonL1 = 20;
// let diapazonL2 = 30;
// let diapazonL3 = 40;
// let diapazonL4 = 60;
// timer
let timerl1 = 6;
let timerl1s = "00";
let timerl2 = 3;
let timerl2s = "00";
let timerl3 = 4;
let timerl3s = "00";
let timerl4 = 5;
let timerl4s = "00";
// timer
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
      else alert("Сначала пройди легкий  уровень");
    } else if (lavelText == "Сложный уровень") {
      if (point >= limitiLev3) carenLavcel = 3;
      else alert("Сначала пройди средний  уровень");
    } else if (lavelText == "хард кор") {
      if (point >= limitiLev4) carenLavcel = 4;
      else alert("Сначала пройди сложный  уровень");
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

let startTimer = false;
let timer1 = document.querySelector(".timer1");
timer1.addEventListener("click", function () {
  let timer1V1 = timer1.textContent;
  let totalTime;
  if (carenLavcel == 1) {
    totalTime = timerl1 * 60;
  } else if (carenLavcel == 2) {
    totalTime = timerl2 * 60;
  } else if (carenLavcel == 3) {
    totalTime = timerl3 * 60;
  } else if (carenLavcel == 4) {
    totalTime = timerl4 * 60;
  }
  // генерация случайного числа
  function randomNamber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let minDiapazon;
  let maxDiapazon;
  if (carenLavcel == 1) {
    minDiapazon = 1;
    maxDiapazon = 20;
  } else if (carenLavcel == 2) {
    minDiapazon = 1;
    maxDiapazon = 30;
  } else if (carenLavcel == 3) {
    minDiapazon = 1;
    maxDiapazon = 40;
  } else if (carenLavcel == 4) {
    minDiapazon = 1;
    maxDiapazon = 60;
  }
  nuwRandomNumber = randomNamber(minDiapazon, maxDiapazon);

  startTimer = true;
  const interval = setInterval(() => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    totalTime--;
    timer1.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;

    if (totalTime < 0) {
      clearInterval(interval);
      alert("Время вышло");
    }
  }, 1000);
});
// _____________________________________________
let startGameBTN = document.getElementById("startGameBTN");
startGameBTN.addEventListener("click", function () {
  if (startTimer == false) {
    alert("Нажмите на таймер что бы начать игру");
  } else {
    let numberInput = document.getElementById("numberInput").value;
    if (numberInput == "") {
      alert("Введите число");
    } else {
      if (numberInput == nuwRandomNumber) {
        alert("вы угадали чило");
        count = 20;
        nRm = 0;
        point++;
        document.body.style.backgroundColor = "green";
      } else if (nuwRandomNumber > numberInput) {
        alert("число  больше");
        count--;
      } else if (nuwRandomNumber < numberInput) {
        alert("число меньше");
        count--;
      }
    }
  }
});
// _____________________________________________
let exsitGame = document.getElementById("exsitGame");
exsitGame.addEventListener("click", function () {
  window.location.replace("index.html");
});
