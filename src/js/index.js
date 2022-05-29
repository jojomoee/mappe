import "../scss/style.scss";
import { createList } from "./components/list/list";


//Is located in head, creates the index.html

function init() {
  let body = document.querySelector("body");
  body.appendChild(createList());
}

//Ob das sinn macht ? egal
document.addEventListener("DOMContentLoaded", init, false);
