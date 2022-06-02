import gsap from "gsap";


export function expandLiOnClick(collection) {
  let itemArr = [];
  for (let item of collection) {
    itemArr.push(item);
    item.addEventListener("click", () => {
      let tl = gsap.timeline();
      tl.to(item, {
        height: "90vh",
        marginTop: 0,
      });
      let selectedItem = itemArr.indexOf(item);

      for (let i = 0; i < item.children.length; i++) {
      }
      itemArr.splice(selectedItem, 1);
      for (let unselectedItems of itemArr) {
        let tl = gsap.timeline();
        tl.to(unselectedItems, {
          height: "2vh",
          marginTop: 0,
        });
      }
    });
  }
}
