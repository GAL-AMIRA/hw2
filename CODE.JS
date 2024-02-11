const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

var darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem(
    "darkTheme",
    document.body.classList.contains("dark-theme").toString()
  );
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkTheme") === "true") {
    document.body.classList.add("dark-theme");
  }
});

var contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("thankYouMessage").style.display = "block";
  });
}
