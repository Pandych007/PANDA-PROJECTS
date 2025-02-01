// время легкий уровень 7 мин, надо набрать очков 20, кол во попыток 20, диапазон от 1 до 20, кол во подсказок 2, одно угаданное число дает 5 очков,  надо угадать 5 чисел

// время средний  уровень 6 мин,  надо набрать  24, кол во попыток 15, диапазон от 1 до 30, кол во подсказок 3, одно угаданное число дает 4 очка, надо угадать 6 чисел

// время сложный уровень 6 мин,  надо набрать 27 , кол во попыток 15, диапазон от 1 до 40, кол во подсказок 5, одно угаданное число дает 3 очка, надо угадать 9 чисел

// время хард кор уровень 5 мин, надо набрать  10, кол во попыток 10, диапазон от 1 до 60, кол во подсказок 7, одно угаданное число дает 2 очко, надо угадать 5 чисел

// !!!!!!!!!!!!!!!!
// ИСПРАВИТЬ ОШИБКИ
// 1) КОГДА УГАДАЛ ЧИЛСО НА 1 УРОВНЕ И ПРИ МЕРЕХОДЕ НА ВТОРОЙ ОЧКИ ДОБАВЛЯЮТСЯ.
// КОГДА Я ПРОШЕЛ ПЕРВЫЙ УРОВЕКНЬ ДОЛЖНО ВЫСКОЧИТ МОДАЛЬНОЕ ОКНО С ПОЗДРОВЛЕНИЕМ И ТАК С ОСТАЛЬНЫМИ
// 2) ЧИСЛО ПОДСКАЗОК НЕ УВЕЛИЧИВАЕТСЯ НА ДРУГИХ УРОЫНЯХ- ИСПРАВИТЬ

// let point = 0;
//
// let nRm = 0;
// point
let limitPoint = 20;
let point = 0; //поменять на 0
let diapazon = 20;
let countPoputki = 20;
let Podskaska = 2;

let totalPoint = 0;

// за все уровни

let nuwRandomNumber;
// let diapazonL1 = 20;
// let diapazonL2 = 30;
// let diapazonL3 = 40;
// let diapazonL4 = 60;
// timer
let timerl1 = 7;
let timerl1s = "00";
let timerl2 = 6;
let timerl2s = "00";
let timerl3 = 6;
let timerl3s = "00";
let timerl4 = 5;
let timerl4s = "00";
// timer
let timer = 0;
let timerS = "00";
let textLavel = "";
let carenLavcel = 0;
let interval;

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
      if (point >= 20) carenLavcel = 2;
      else alert("Сначала пройди легкий  уровень");
    } else if (lavelText == "Сложный уровень") {
      if (point >= 24) carenLavcel = 3;
      else alert("Сначала пройди средний  уровень");
    } else if (lavelText == "хард кор") {
      if (point >= 27) carenLavcel = 4;
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
        limitPoint = 20;
        diapazon = 20;
        countPoputki = 20;
        Podskaska = 2;
        break;
      case 2:
        timer = timerl2;
        timerS = timerl2s;
        textLavel = "Средний уровень";
        limitPoint = 24;
        diapazon = 40;
        countPoputki = 15;
        Podskaska = 3;
        break;
      case 3:
        timer = timerl3;
        timerS = timerl3s;
        textLavel = "Сложный уровень";
        limitPoint = 27;
        diapazon = 20;
        countPoputki = 15;
        Podskaska = 5;
        break;
      case 4:
        timer = timerl4;
        timerS = timerl4s;
        textLavel = "хард кор уровень";
        limitPoint = 10;
        diapazon = 60;
        countPoputki = 10;
        Podskaska = 7;
        break;
    }
    document.querySelector(".lavel1").textContent = textLavel;
    document.querySelector(".timer1").textContent =
      timerl1.toString() + ":" + timerl1s.toString();
    document.getElementById("point1").textContent = point.toString();
  });
});

let startTimer = false;
let timer1 = document.querySelector(".timer1");
timer1.addEventListener("click", function () {
  if (startTimer == true) {
    alert("Таймер уже запущен!");
    return;
  }
  document.querySelector(".numberWin").value = "";
  document.body.style.backgroundColor = "#fff";
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
  interval = setInterval(() => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    console.log(totalTime);
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
  console.log(nuwRandomNumber); //подсказка в консоле
  if (startTimer == false) {
    alert("Нажмите на таймер что бы начать игру");
  } else {
    let numberInput = document.getElementById("numberInput").value;

    if (numberInput == "") {
      alert("Введите число");
    } else {
      if (numberInput == nuwRandomNumber) {
        alert("вы угадали чило");
        document.getElementById("numberInput").value = "";
        document.querySelector(".numberWin").value = numberInput;

        if (carenLavcel == 1) {
          totalPoint += 5;
          point += 5;
          // countPoputki--;
          countPoputki = 20;
          document.querySelector(".timer1").textContent = "07:00";
          if (point == 20) {
            // alert("Поздравляю! Ты прошел первый уровень")
            carenLavcel = 2;
            point = 0;
            document.querySelector(".lavel1").textContent = "Средний уровень";
            document.querySelector(".timer1").textContent = "06:00";
            document.querySelector(".numberLavel").textContent =
              "надо набрать 24 очков что бы перейти на на следующий уровень";
            document.querySelector(".diapazone").textContent =
              "диапазон от 1 до 30";
            document.getElementById("countPoputki").textContent = countPoputki;
            document.querySelector(".numberWin").textContent = "";
            Podskaska = 3;
            document.querySelector(
              ".podskazka"
            ).textContent = `количество подсказок ${Podskaska}`;
          }
          clearInterval(interval);
          startTimer = false;
        } else if (carenLavcel == 2) {
          totalPoint += 4;
          point += 4;
          countPoputki = 15;
          clearInterval(interval);
          startTimer = false;
          if (point == 24) {
            carenLavcel = 3;
            point = 0;
            document.querySelector(".lavel1").textContent = "Сложный  уровень";
            document.querySelector(".timer1").textContent = "06:00";
            document.querySelector(".numberLavel").textContent =
              "надо набрать 27 очков что бы перейти на на следующий уровень";
            document.querySelector(".diapazone").textContent =
              "диапазон от 1 до 40";
            Podskaska = 5;
            document.querySelector(
              ".podskazka"
            ).textContent = `количество подсказок ${Podskaska}`;
          }
          document.querySelector(".timer1").textContent = "06:00";
        } else if (carenLavcel == 3) {
          totalPoint += 3;
          point += 3;
          countPoputki = 15;
          clearInterval(interval);
          startTimer = false;
          if (point == 27) {
            carenLavcel = 4;
            point = 0;
            document.querySelector(".lavel1").textContent = "хард-кор  уровень";
            document.querySelector(".timer1").textContent = "05:00";
            document.querySelector(".numberLavel").textContent =
              "надо набрать 10 очков что бы перейти на на следующий уровень";
            document.querySelector(".diapazone").textContent =
              "диапазон от 1 до 60";
            Podskaska = 7;
            document.querySelector(
              ".podskazka"
            ).textContent = `количество подсказок ${Podskaska}`;
          }
          document.querySelector(".timer1").textContent = "06:00";
        } else if (carenLavcel == 4) {
          totalPoint += 1;
          point += 1;
          countPoputki = 10;
          clearInterval(interval);
          startTimer = false;
          document.querySelector(".timer1").textContent = "05:00";
          if (point == 10) {
            document.querySelector(".WinInfo").style.display = "flex";
            document.getElementById("OllWinPoint").textContent = totalPoint;
            document.querySelector(".container2").style.display = "none";
          }
        }
        document.querySelector(
          ".totalPoint"
        ).textContent = `общее количество очков  ${totalPoint}`;
        // count = 20;
        // nRm = 0;
        // point++;
        document.body.style.backgroundColor = "green";
      } else if (nuwRandomNumber > numberInput) {
        alert("число  больше");
        countPoputki--;
      } else if (nuwRandomNumber < numberInput) {
        alert("число меньше");
        countPoputki--;
      }
      document.getElementById("point1").textContent = point;
      document.getElementById("countPoputki").textContent = countPoputki;
    }
  }
});
// _____________________________________________
let exsitGame = document.getElementById("exsitGame");
exsitGame.addEventListener("click", function () {
  window.location.replace("index.html");
});
// ________________________________________________________________

let podskazkaButton = document.querySelector(".podskazkaButton");
podskazkaButton.addEventListener("click", function () {
  if (startTimer != false) {
    if (Podskaska == 0) {
      alert("лимит подсказок закончился ");
    } else {
      let podskazkaDiapazonMin = nuwRandomNumber - 5;
      let podskazkaDiapazonMax = nuwRandomNumber + 5;
      alert(
        `ваша подсказка от  ${podskazkaDiapazonMin} до ${podskazkaDiapazonMax} `
      );
      Podskaska--;
      document.querySelector(
        ".podskazka"
      ).textContent = `количество подсказок ${Podskaska}`;
    }
  } else {
    alert("запустите таймер");
  }
});
// ______________________________________________________________________
