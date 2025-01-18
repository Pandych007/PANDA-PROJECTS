const okardion = document.querySelectorAll(".header");
console.log(okardion);

okardion.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    // console.log(content);
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});
