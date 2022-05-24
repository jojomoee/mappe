import "../scss/style.scss";

function init() {
  const btn = document.getElementsByClassName("list-btn");
  const overlay = document.getElementById("overlay");
  const listWrapper = document.getElementById("list-wrapper");
  const nav = document.querySelector("nav");

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      nav.style.backgroundColor = "red";
      overlay.classList.toggle("overlay_on");
      overlay.style.display = "flex";

      document.querySelector("body").style.padding = "75px";

      listWrapper.style.display = "none";
    });
  }

  nav.addEventListener("click", () => {
    overlay.classList.toggle("overlay_on");
    document.querySelector("header").style.display = "";
    listWrapper.style.display = "";
  });
}

document.addEventListener("DOMContentLoaded", init, false);
