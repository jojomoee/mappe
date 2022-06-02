import {
  h1MovingAnimation,
  openingAnimation,
} from "./components/list/animation.list";

import gsap from "gsap";

function init() {
  let liColl = document.getElementsByClassName("project-li");
  openingAnimation(liColl);

  let containerColl = document.getElementsByClassName("project-header");
  h1MovingAnimation(containerColl);

  let itemArr = [];

  for (let item of liColl) {
    itemArr.push(item);
    item.addEventListener("click", () => {
      let tl = gsap.timeline();
      tl.to(item, {
        height: "90vh",
	    marginTop:0
      });
      let selectedItem = itemArr.indexOf(item);
      console.log(selectedItem);
      itemArr.splice(selectedItem, 1);
      console.log(itemArr);

      for (let unselectedItems of itemArr) {
        let tl = gsap.timeline();
        tl.to(unselectedItems, {
          height: "2vh",
          marginTop: 0,
        });
      }
    });
  }

  console.log(itemArr);
}

document.addEventListener("DOMContentLoaded", init, false);
