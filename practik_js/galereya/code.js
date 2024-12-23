const gelaryImg = document.querySelectorAll(".gelaryImg");
const boxImg = document.getElementById("boxImg");
const boxs = document.getElementById("boxs");
const close = document.querySelector(".close");

gelaryImg.forEach((img) => {
  img.addEventListener("click", () => {
    boxs.classList.remove("Hidden");
    boxImg.src = img.src;
  });
});

close.addEventListener("click", function () {
  boxs.classList.add("Hidden");
});
