import gsap from "gsap";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


//Animates elements from middle to 90vw, when opening the site
export async function openingAnimation(collection) {
  for (let li of collection) {
    let tl = gsap.timeline({});
    tl.from(li, {
      duration: 2,
      width: 0,
      autoAlpha: 0,
    });
    tl.to(li, {
      duration: 2,
      width: "100vw",
      autoAlpha: 1,
    });
    await sleep(500);
  }
}

//Animates the Text Moving
export async function h1MovingAnimation(collection) {
  //Container Width is needed to move the Text according to its length.
  function getContainerWidth(collection) {
    let containerWidthList = [];
    for (let container of collection) {
      let containerWidth = container.clientWidth;
      containerWidthList.push(containerWidth);
    }
    return containerWidthList;
  }

  for (let container of collection) {

    //Get Index of the container-collection
    let index = [...collection].indexOf(container);
    //Use function getContainerWidth, and apply index to it, to get each
    //Elements width at position
    let containerWidth = getContainerWidth(collection)[index];
    let xOffset = containerWidth - screen.width;
    //container is only 90vw, so 10vw needs to be subtracted
    let xSpacing =
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ) * 0.05;
    xOffset += xSpacing;
    let tl = gsap.timeline({ repeat: -1 });
    //GSAP animation
    tl.to(container, {
      duration: 10,
      x: -xOffset,
      ease: "Sine.easeOut",
    });

    tl.to(container, {
      x: 0,
      duration: 10,

      ease: "Sine.easeOut",
    });

  }
}
