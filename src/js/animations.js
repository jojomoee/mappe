import gsap from "gsap";

//stylingNav() NAV attached to LIST-ITEM
export function stylingNav(nav_btn) {
  nav_btn.style.right = "7vw";
  nav_btn.style.left = "auto";
  nav_btn.style.backgroundColor = "#ED6565";
}
// animHeaderNav() HEADER-NAV-OPEN attached to LIST-ITEM
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
// animListItem LIST-ITEM-COLLAPSE attached to LIST-ITEM
export function animListItem(list_item, i, id_list_wrapper) {
  gsap.fromTo(
    list_item[i],
    {
      height: "10vw",
    },
    { height: "70vh", width: "90vw", marginBottom: "20vw", duration: 0.5 }
  );

  gsap.to(id_list_wrapper, { width: "90vw" });

  for (let j = 0; j < i; j++) {
    gsap.fromTo(
      list_item[j],
      {
        height: "10vw",
        marginBottom: "5vw",
      },
      { height: "0vw", marginBottom: "0vw", duration: 0.5 }
    );
  }
}
//TEXT
export function toggleListItemHeader(h1) {
  document.getElementsByClassName(h1).style.visibility = "hidden";
}

export function toggleButton(button_on_list) {
  let tl = gsap.timeline();

  tl.from(button_on_list, {
    autoAlpha: 0,
    duration: 0.01,
  });

  tl.from(
    button_on_list,
    {
      width: 0,
    },
    "sync"
  );
	tl.reversed();
}

export function stylingButton(id_button_on_list, styleProp, styleProp2) {
  const button_on_list = document.getElementById(id_button_on_list);
  button_on_list.style[styleProp] = "7vw";
  button_on_list.style[styleProp2] = "auto";
  button_on_list.style.backgroundColor = "#ED6565";
}

export function stylingCloseButton(id_list_wrapper, id_nav) {
  id_list_wrapper.style.display = "";
  id_nav.style.right = "auto";
  id_nav.style.left = "5vw";
  id_nav.style.backgroundColor = "#6DBC60";
}
