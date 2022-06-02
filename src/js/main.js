import {
  h1MovingAnimation,
  openingAnimation,
} from "./components/list/animation.list";
import { expandLiOnClick } from "./components/item/animation.item";

function init() {
  let liColl = document.getElementsByClassName("project-li");
  openingAnimation(liColl);

  let containerColl = document.getElementsByClassName("project-header");
  expandLiOnClick(liColl);
  h1MovingAnimation(containerColl);
}

document.addEventListener("DOMContentLoaded", init, false);
