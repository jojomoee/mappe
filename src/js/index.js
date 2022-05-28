import "../scss/style.scss";
import { createList } from "./components/list/list";

function init() {

 document.querySelector('body').appendChild(createList());

}

document.addEventListener("DOMContentLoaded", init, false);
