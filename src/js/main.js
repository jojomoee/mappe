import "../scss/style.scss";

function init() {
  const btn = document.getElementsByClassName("list-btn");
  const overlayList = document.getElementById("list-overlay"); //Opened Window by Listitem
  const listWrapper = document.getElementById("list-wrapper");
  const nav = document.getElementById("icon");
  const overlayNav = document.getElementById("icon-overlay"); //Opened Window by Nav

  //list item click

  let navState = false;
  listItemOnclick();
  console.log(navState);
  function listItemOnclick() {
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", () => {
        overlayList.classList.toggle("overlay_on");
        overlayList.style.display = "flex";

        listWrapper.style.display = "none";
        nav.style.right = "0";
        nav.style.left = "auto";
        nav.style.backgroundColor = "red";
        navState = true;
        console.log(navState);
      });
    }
  }

  //open overlay nav click

  nav.addEventListener("click", () => {
    if (navState === true) {
      overlayList.classList.toggle("overlay_on");
      listWrapper.style.display = "";
      nav.style.right = "auto";
      nav.style.left = "0";
      nav.style.backgroundColor = "green";
      navState = false;
    } else {
      nav.style.display = "none";
      overlayNav.classList.toggle("icon_overlay_on");
      listWrapper.style.pointerEvents = "none";
    }
  });

  overlayNav.addEventListener("click", () => {
    overlayNav.classList.toggle("icon_overlay_on");
    nav.style.display = "";
    listWrapper.style.pointerEvents = "";
  });
}

document.addEventListener("DOMContentLoaded", init, false);
