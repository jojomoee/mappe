import gsap from "gsap";

export function stylingNav(nav_btn) {
  nav_btn.style.right = "6vw";
  nav_btn.style.left = "auto";
  nav_btn.style.backgroundColor = "#ED6565";
}

export function animHeaderNav(id_header_txt, id_nav_overlay, id_nav) {
  let tl = gsap.timeline();

  tl.from(id_header_txt, {
    autoAlpha: 0,
    duration: 0.01,
  });

  tl.from(
    id_header_txt,
    {
      height: 0,
    },
    "sync"
  );

  tl.to(
    id_nav_overlay,
    {
      height: 0,
    },
    "sync"
  );

  tl.from(
    id_nav,
    {
      height: 0,
    },
    "sync"
  );
}

export function animListButton(list_btn, i, list_wrapper) {
  gsap.fromTo(
    list_btn[i],
    {
      height: "10vw",
    },
    { height: "70vh", width: "90vw", marginBottom: "20vw", duration: 0.5 }
  );

  gsap.to(list_wrapper, { width: "90vw" });

  for (let j = 0; j < i; j++) {
    gsap.fromTo(
      list_btn[j],
      {
        height: "10vw",
        marginBottom: "5vw",
      },
      { height: "0vw", marginBottom: "0vw", duration: 0.5 }
    );
  }
}


