import "../scss/style.scss";
import { createList } from "./components/list/list";

function init() {
  let body = document.querySelector("body");
  body.appendChild(createList());
}

document.addEventListener("DOMContentLoaded", init, false);
