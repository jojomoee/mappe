import "../scss/style.scss";
import gsap from "gsap";

function init() {
  const btn = document.getElementsByClassName("list-btn");
  const listWrapper = document.getElementById("list-wrapper");
  const nav = document.getElementById("icon");

  //list item click

  let navState = false;

  console.log(navState);

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      nav.style.right = "0";
      nav.style.left = "auto";
      nav.style.backgroundColor = "red";
      navState = true;
      console.log(navState);

      gsap.fromTo(
        btn[i],
        {
          height: "10vw",
        },
        { height: "90vw", duration: 0.5 }
      );

      for (let j = 0; j < i; j++) {
        gsap.fromTo(
          btn[j],
          {
            height: "10vw",
            marginBottom: "10vw",
          },
          { height: "0vw", marginBottom: "0vw", duration: 0.5 }
        );
      }
    });
  }

  //open overlay nav click

  nav.addEventListener("click", () => {
    //CLOSE BUTTON
    if (navState === true) {
      listWrapper.style.display = "";
      nav.style.right = "auto";
      nav.style.left = "0";
      nav.style.backgroundColor = "green";


      for (let i = 0; i < btn.length; i++) {
        gsap.to(
          btn[i],
          { height: "10vw",marginBottom:'10vw', duration: 1 }
        );


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
}

document.addEventListener("DOMContentLoaded", init, false);
