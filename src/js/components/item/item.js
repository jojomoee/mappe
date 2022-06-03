import { dataObj } from "../data";

export function createItemOfList() {
  let projectContainerColl =
    document.getElementsByClassName("project-container");
  for (let projectContainer of projectContainerColl) {
    let backButton = document.createElement("button");
    backButton.setAttribute("class", "close-btn");

    let contentDescription = document.createElement("div");
    contentDescription.setAttribute("class", "content-description");

    let contentContainer = document.createElement("div");
    let iframe = document.createElement("video");
    iframe.setAttribute("class", "video-container");
    iframe.setAttribute("type", "video/mp4");
	iframe.setAttribute("autoplay", "autoplay");
	iframe.setAttribute("muted", "muted");
	iframe.setAttribute("controls", "true"); 
	iframe.setAttribute("autoloop", "autoloop");
	iframe.setAttribute("height","500px");
    contentContainer.append(iframe);
    contentContainer.setAttribute("class", "content-container");

    projectContainer.append(backButton, contentDescription, contentContainer);
  }

  let a = document.getElementsByClassName('content-container');
  fillWithContent(a);
  return projectContainerColl;
}

function fillWithContent(collection) {
  let Arr = Array.from(collection);
  for (let item of dataObj.projects) {
    let iframe = Arr[item.id].children[0];
    let path = dataObj.projects[item.id].content;
    iframe.setAttribute("src", path);
  }
}

async function fillDescription() {
  let containerArr = Array.from(
    document.getElementsByClassName("content-description")
  );

  for (let item in dataObj.projects) {
    let id = dataObj.projects[item].id;
    let contentPath = dataObj.projects[item].content;
    containerArr[item].setAttribute("id", "content-container" + id);
    containerArr[0].children[0].setAttribute("src", contentPath);
  }
}
