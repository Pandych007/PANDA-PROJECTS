const butn = document.getElementById("tema_button");
const body = document.body;

const saveTheme = localStorage.getItem("theme");
if (saveTheme) {
  body.classList.add(saveTheme);
  if (saveTheme == "dark_theme") {
    butn.textContent = "светлая тема ";
  } else {
    butn.textContent = "темная тема ";
  }
}

butn.addEventListener("click", function () {
  if (body.classList.contains("dark_theme")) {
    body.classList.replace("dark_theme", "light_theme");
    butn.textContent = "темная тема";
    localStorage.setItem("theme", "light_theme");
  } else {
    body.classList.replace("light_theme", "dark_theme");
    butn.textContent = "светлая  тема";
    localStorage.setItem("theme", "dark_theme");
  }
});
