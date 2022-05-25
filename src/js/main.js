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

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.defaultPrevented) {
        console.log("not allowed");
      }

      switch (event.key) {
        case "ArrowDown":
          window.scrollBy(0, window.innerWidth / 5);
          break;
        case "ArrowUp":
          window.scrollBy(0, -window.innerWidth / 5);
          // Do something for "up arrow" key press.
          break;
        case "ArrowLeft":
          listItemOnclick();
          console.log(document.documentElement.scrollTop);
		  console.log(window.innerWidth);
		  console.log(window.innerHeight);

          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          break;
        case "Enter":
          // Do something for "enter" or "return" key press.
          break;
        case "Esc": // IE/Edge specific value
        case "Escape":
          // Do something for "esc" key press.
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );
}

document.addEventListener("DOMContentLoaded", init, false);
