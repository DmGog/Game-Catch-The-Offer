import {start} from "../../data/data.js";



export function StartButton() {
    const element = document.createElement("button")

    element.innerHTML = "START GAME";
    element.addEventListener("click", () => {
        start()
    })
    element.classList.add("start-button");
    return element
}

