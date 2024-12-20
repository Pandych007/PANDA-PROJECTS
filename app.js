const htmlSections = document.querySelectorAll(".html1");

htmlSections.forEach((section) => {
  section.addEventListener("click", () => {
    const content = section.nextElementSibling;

    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});
