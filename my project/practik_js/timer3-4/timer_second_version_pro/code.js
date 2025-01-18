const dtTime = document.getElementById("dtTime");
const btnTimer = document.getElementById("btnTimer");
btnTimer.addEventListener("click", function () {
  const endDate = new Date(dtTime.value);
  const now = new Date();
  const diff = endDate - now;

  const result = document.getElementById("result");
  if (diff <= 0) {
    result.textContent = "такое действие невозможно";
  } else {
    const month = Math.floor(diff / (1000 * 60 * 60 * 24) / 30);
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    result.textContent = ` ${month} мес. ${days} д. ${hours} ч. ${minutes} м. ${seconds} с.`;
  }
});
