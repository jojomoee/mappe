import "../scss/style.scss";
import gsap from "gsap";


import {
  animHeaderNav,
  stylingNav,
	listItemAnimation,
} from "./animations.js";

function init() {
  const listItem = document.getElementsByClassName("list-item");


  let navState = false;

      navState = true;
      window.scrollTo(0, 0);
    });
  }
  //CLOSE LIST-ITEM and TOGGLE CARD
  nav.addEventListener("click", () => {
    if (navState === true) {
      stylingCloseButton(listWrapper, nav);
      gsap.from(nav, {
        height: 0,
      });

      for (let i = 0; i < listItem.length; i++) {
        gsap.to(listItem[i], {
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
  listItemAnimation(listItem);

//  for (let i = 0; i < listItem.length; i++) {
//    listItem[i].addEventListener("click", () => {
//      animListItem(listItem, i, "#list-wrapper");
//      toggleButton("#btn-right");
//      toggleButton("#btn-left");
//
//      //let styleProp = ["left", "right"];
//      // stylingButton("btn-right", styleProp[0], styleProp[1]);
//      navState = true;
//      window.scrollTo(0, 0);
//    });
//  }
//  //CLOSE LIST-ITEM and TOGGLE CARD
//  nav.addEventListener("click", () => {
//    if (navState === true) {
//      stylingCloseButton(listWrapper, nav);
//      gsap.from(nav, {
//        height: 0,
//      });
//
//      for (let i = 0; i < listItem.length; i++) {
//        gsap.to(listItem[i], {
//          height: "10vw",
//          marginBottom: "5vw",
//          duration: 0.5,
//        });
//      }
//    } else {
//      nav.style.display = "none";
//      listWrapper.style.pointerEvents = "none";
//    }
//  });
}

document.addEventListener("DOMContentLoaded", init, false);
