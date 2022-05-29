import { gsap } from "gsap/src";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function headerAnimation() {

  await sleep(500);
  let h1Coll = document.getElementsByClassName("project-header");
  for (let h1 of h1Coll) {
    let tl = gsap.timeline({ repeat: -1 });
    tl.to(h1, {
      duration: 3,
      x: -h1.innerHTML.length * 50,
      ease: "power2.inOut",
    });

    tl.to(h1, {
      duration: 3,
      x: 0,
      ease: "power2.inOut",
    });

    await sleep(500);
  }
}

async function typeAnimation() {
  let h2Coll = document.getElementsByClassName("project-type");
  for (let h2 of h2Coll) {
    let tl = gsap.timeline({ repeat: -1 });
    tl.to(h2, {
      duration: 3,
      x: -h2.innerHTML.length * 100,
      ease: "power2.inOut",
    });

    tl.to(h2, {
      duration: 3,
      x: 0,
      ease: "power2.inOut",
    });
    await sleep(250);
  }
}

function init() {
  headerAnimation();
  typeAnimation();
}

document.addEventListener("DOMContentLoaded", init, false);
