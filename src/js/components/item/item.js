
//import { dataObj } from "./data.list";

//creates All elements of list.
//

import gsap from "gsap";

export function createItem() {
	
	//wenn ich auf das Item clicke soll es sich vergößern
	//Hier will ich es befüllen
	let container = document.getElementsByClassName('project-container');
	
	for(let item of container) {
		item.addEventListener('click', () => {

			let tl = gsap.timeline({});
			tl.to(tl, {
				height: "100vh"
			})

		})
	}
}


// Add the contents of options[0] to #foo:
//document.querySelector("body").appendChild(createList());
