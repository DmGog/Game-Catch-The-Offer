import {restart} from "../../data/data.js";

export function RestartButton() {
    const element = document.createElement("button")

    element.innerHTML = "PLAY AGAIN";
    element.addEventListener("click", () => {
        restart()

    })

    return element
}
