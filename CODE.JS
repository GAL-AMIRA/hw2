const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

var darkmode = document.getElementById("dark-mode");
darkmode.onclick = function () {
  document.body.classList.toggle("dark-theme");
};
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // מונע את השליחה הרגילה של הטופס

    // בצע כאן את הקריאה ל-API או את הטיפול בנתוני הטופס

    // הצגת הודעת התודה
    document.getElementById("thankYouMessage").style.display = "block";

    // אפשרות להחביא את הטופס או לנקות אותו כאן, לדוגמה:
    // document.getElementById("contactForm").reset();
  });
