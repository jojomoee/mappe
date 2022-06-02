import {
  h1MovingAnimation,
  openingAnimation,
} from "./components/list/animation.list";
import { expandLiOnClick, hoverEffect } from "./components/item/animation.item";


function init() {
  let liColl = document.getElementsByClassName("project-li");
  openingAnimation(liColl);

  let containerColl = document.getElementsByClassName("project-header");
  expandLiOnClick(liColl);
  hoverEffect(liColl);
  h1MovingAnimation(containerColl);
}

document.addEventListener("DOMContentLoaded", init, false);
