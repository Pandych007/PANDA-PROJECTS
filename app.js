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
// ________________________________________________________________

let myMrogekt = document.getElementById("myMrogekt");

myMrogekt.addEventListener("click", function () {
  document.getElementById("contentModalAbout").style.display = "none";
  document.getElementById("contentModalContakt").style.display = "none";

  if (document.getElementById("contentModal").style.display == "block") {
    document.getElementById("contentModal").style.display = "none";
  } else {
    document.getElementById("contentModal").style.display = "block";
  }
});
// ________________________________________________________________
let about = document.getElementById("about");

about.addEventListener("click", function () {
  document.getElementById("contentModal").style.display = "none";
  document.getElementById("contentModalContakt").style.display = "none";

  if (document.getElementById("contentModalAbout").style.display == "block") {
    document.getElementById("contentModalAbout").style.display = "none";
  } else {
    document.getElementById("contentModalAbout").style.display = "block";
  }
});

// ________________________________________________________________

let contact = document.getElementById("contact");

contact.addEventListener("click", function () {
  document.getElementById("contentModal").style.display = "none";
  document.getElementById("contentModalAbout").style.display = "none";
  if (document.getElementById("contentModalContakt").style.display == "block") {
    document.getElementById("contentModalContakt").style.display = "none";
  } else {
    document.getElementById("contentModalContakt").style.display = "block";
  }
});
//  ________________________________________________________________
