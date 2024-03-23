import {restart} from "../../data/data.js";

export function RestartButton() {
    const element = document.createElement("button")
    element.innerHTML = "Play again";
    element.addEventListener("click", () => {
        restart()
        element.classList.add("restart-button");
    })
    return element
}
