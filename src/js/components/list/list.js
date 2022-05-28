import { dataObj } from "./data.list";

export function createList() {
  console.log(dataObj.project1.header);
  let list = document.createElement("ul");
  list.setAttribute("id", "list-wrapper");
  let counter = 0;

  for (let items in dataObj) {

    let li = document.createElement("li");
    li.setAttribute("id", "list-item-" + counter);
    list.appendChild(li);
    counter++;
  }

  return list;
}

// Add the contents of options[0] to #foo:
//document.querySelector("body").appendChild(createList());
