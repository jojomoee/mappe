import "../scss/style.scss";
import gsap from "gsap";
import { animHeaderNav } from "./text";
import { stylingNav } from "./text";
import { animListButton } from "./text";

function init() {
  const btn = document.getElementsByClassName("list-item");
  const listWrapper = document.getElementById("list-wrapper");
  const nav = document.getElementById("icon");

  //list item click

  let navState = false;
  let selectedButton = 2;

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      stylingNav(nav);
      animHeaderNav("#header-txt", "#nav-anim", "#icon");
      animListButton(btn, i, "#list-wrapper");
      navState = true;
	  selectedButton = i;
	  window.scrollTo(0, 0);
	 
    });
  }

  //open overlay nav click

  nav.addEventListener("click", () => {
    //CLOSE BUTTON
    if (navState === true) {
      listWrapper.style.display = "";
      nav.style.right = "auto";
      nav.style.left = "5vw";
      nav.style.backgroundColor = "#6DBC60";

      document.getElementById("header-txt").style.visibility = "hidden";
      gsap.from(nav, {
        width: 0,
      });

      for (let i = 0; i < btn.length; i++) {
        gsap.to(btn[i], {
          height: "10vw",
          marginBottom: "5vw",
          duration: 0.5,
        });
      }
    } else {
      nav.style.display = "none";
      listWrapper.style.pointerEvents = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", init, false);
