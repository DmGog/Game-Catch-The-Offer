import {StartButton} from "./StartButton.js";


export function Settings() {
    const element = document.createElement("div");
    const startButton = StartButton();
    element.append(startButton)

    return element
}

