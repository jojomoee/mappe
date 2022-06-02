import "../scss/style.scss";
import { createList } from "./components/list/list";
import { createItemOfList } from "./components/item/item";

function init() {
  let body = document.querySelector("body");
  body.appendChild(createList());
  createItemOfList();
}

//Ob das sinn macht ? egal
document.addEventListener("DOMContentLoaded", init, false);
