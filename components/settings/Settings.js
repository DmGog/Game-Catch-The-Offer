import {start} from "../../data/data.js";


export function Settings() {
    const element = document.createElement("div");

    const startButton = StartButton();
    element.append(startButton)

    return element
}

function StartButton() {
    const element = document.createElement("button")

    element.innerHTML = "START GAME";
    element.addEventListener("click", () => {
        start()
    })

    return element
}