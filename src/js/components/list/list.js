import { dataObj } from "./data.list";

//creates All elements of list.
export function createList() {
  let list = document.createElement("ul");
  list.setAttribute("id", "list-wrapper");

  for (let item in dataObj.projects) {
    let li = document.createElement("li");
    li.setAttribute("class", "project-li");

    let div = li.appendChild(document.createElement("div"));
    div.setAttribute("class", "project-container");

    let id = dataObj.projects[item].id;
    li.setAttribute("id", id);

    let header = dataObj.projects[item].header;
    let h1 = div.appendChild(document.createElement("h1"));
    h1.setAttribute("class", "project-header");
    h1.appendChild(document.createTextNode(header));
	
    let info = dataObj.projects[item].info;
    let h2 = div.appendChild(document.createElement("h2"));
    h2.setAttribute("class", "project-info");
    h2.appendChild(document.createTextNode(info));
	  
	list.appendChild(li);
  }

  return list;
}


// Add the contents of options[0] to #foo:
//document.querySelector("body").appendChild(createList());
