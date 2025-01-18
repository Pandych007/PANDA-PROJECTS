const timerDiv = document.getElementById("timer");

const endDate = new Date("2025-07-20T00:00:00");
const openModalbtn = document.getElementById("openModal");
const closeModalbtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
openModalbtn.addEventListener("click", function () {
  modal.style.display = "flex";
});
closeModalbtn.addEventListener("click", function () {
  modal.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
// обработка нажатия мышкой показать событие клик

function updateTimer() {
  const now = new Date();
  const diff = endDate - now;
  if (diff <= 0) {
    timerDiv.textContent = "день рождение";
    clearInterval(t);
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerDiv.textContent = `до дня рождения осталось: ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}
const t = setInterval(updateTimer, 1000);
