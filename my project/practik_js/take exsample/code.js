let point = 0;
let count = 20;
let nRm = 0;
let proverka = document.getElementById("proverka");
let numberUser;
document.querySelector(".count").textContent = `колличество попвток ${count}`;
document.querySelector(".point").textContent = `ваши очки ${point}`;
proverka.addEventListener("click", function () {
  if (nRm === 0) {
    nRm = randomNamber(1, 20);
  }
  numberUser = document.getElementById("numberUser").value;

  if (numberUser == nRm) {
    alert("вы угадали чило");
    count = 20;
    nRm = 0;
    point++;
    document.body.style.backgroundColor = "green";
  } else if (nRm > numberUser) {
    alert("число  больше");
    count--;
  } else if (nRm < numberUser) {
    alert("число меньше");
    count--;
  }
  document.querySelector(".count").textContent = `колличество попвток ${count}`;
  document.querySelector(".point").textContent = `ваши очки ${point}`;
});
function randomNamber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
