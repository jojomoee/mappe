import gsap from "gsap";

export function expandLiOnClick(collection) {
  let itemArr = [];
  for (let item of collection) {
    itemArr.push(item);
    item.addEventListener("click", () => {

      item.children[0].children[2].style.visibility = "visible";
      let tl = gsap.timeline();
      tl.to(item, {
        height: "90vh",
        marginTop: 0,
      });
      let selectedItem = itemArr.indexOf(item);
      itemArr.splice(selectedItem, 1);
      for (let unselectedItems of itemArr) {
        let tl = gsap.timeline();
        tl.to(unselectedItems, {
          height: "2vh",
          marginTop: 0,
          pointerEvents: "none",
        });
      }
    });
  }
}

export function hoverEffect(collection) {
  for (let item of collection) {
    item.addEventListener("mouseover", () => {
      item.children[0].children[0].style.display = "none";
      item.children[0].children[1].style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      item.children[0].children[0].style.display = "block";
      item.children[0].children[1].style.visibility = "hidden";
	});
  }
}
