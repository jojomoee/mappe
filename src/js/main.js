import "../scss/style.scss";
import gsap from "gsap";

<<<<<<< Updated upstream
=======
import {
  animHeaderNav,
  stylingNav,
	listItemAnimation,
  stylingCloseButton,
  stylingButton,
  toggleButton,
} from "./animations.js";

>>>>>>> Stashed changes
function init() {
  const btn = document.getElementsByClassName("list-btn");
  const listWrapper = document.getElementById("list-wrapper");
  const nav = document.getElementById("icon");

  //list item click

  let navState = false;

<<<<<<< Updated upstream
  console.log(navState);

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      nav.style.right = "0";
      nav.style.left = "auto";
      nav.style.backgroundColor = "#ED6565";
      navState = true;
      console.log(navState);
      gsap.from(nav, {
        x: window.innerWidth,
      });

      gsap.fromTo(
        btn[i],
        {
          height: "10vw",
        },
        { height: "70vh", marginBottom: "20vw", duration: 0.5 }
      );

      for (let j = 0; j < i; j++) {
        gsap.fromTo(
          btn[j],
          {
            height: "10vw",
            marginBottom: "5vw",
          },
          { height: "0vw", marginBottom: "0vw", duration: 0.5 }
        );
      }
      window.scrollTo(0, 0);
      gsap.from(document.getElementById("header-big"), { visibility: "visible", duration: 10 });
    });
  }

  //open overlay nav click

  nav.addEventListener("click", () => {
    //CLOSE BUTTON
    if (navState === true) {
      listWrapper.style.display = "";
      nav.style.right = "auto";
      nav.style.left = "0";
      nav.style.backgroundColor = "#6DBC60";

      gsap.from(nav, {
        x: -window.innerWidth,
      });

      for (let i = 0; i < btn.length; i++) {
        gsap.to(btn[i], {
          height: "10vw",
          marginBottom: "5vw",
          duration: 0.5,
        });

        //        for (let j = 0; j < i; j++) {
        //          gsap.fromTo(
        //            btn[j],
        //            {
        //              height: "0vw",
        //              marginBottom: "0vw",
        //            },
        //            { height: "10vw", marginBottom: "10vw", duration: 0.5 }
        //          );
        //        }
      }
    } else {
      nav.style.display = "none";
      listWrapper.style.pointerEvents = "none";
    }
  });
=======
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
>>>>>>> Stashed changes
}

document.addEventListener("DOMContentLoaded", init, false);
