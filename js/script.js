const navbar = document.querySelector(".navbar");
const menu = document.querySelector("#menu");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// document.querySelectorAll(".navbar .navbar-right a").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     if (this.getAttribute("href") === "#") {
//       e.preventDefault();
//     }
//     navbar.classList.remove("active");
//   });
// });
