export function createItemOfList() {
  let projectContainerColl =
    document.getElementsByClassName("project-container");
  for (let projectContainer of projectContainerColl) {
    let backButton = document.createElement("button");
    backButton.setAttribute("class", "close-btn");

    let contentContainer = document.createElement("div");
    contentContainer.setAttribute("class", "content-container");

    let contentDescription = document.createElement("div");
    contentDescription.setAttribute("class", "content-description");

    projectContainer.append(backButton, contentContainer, contentDescription);
  }

  return projectContainerColl;
}
