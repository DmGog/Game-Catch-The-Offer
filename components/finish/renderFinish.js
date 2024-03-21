import {RestartButton} from "./restar.js";

export function RenderFinish() {
    const element = document.createElement("div");
    element.className = "card-finish"
    const elementSubtract = document.createElement("div");
    elementSubtract.className = "subtract";
    const elementEllipse = document.createElement("div");
    elementEllipse.className = "ellipse ellipse"
    const restartButton = RestartButton();
    elementSubtract.append(restartButton)

    const elementGroup = document.createElement("div");
    elementGroup.className = "group"
    elementEllipse.append(elementGroup)
    element.append(elementSubtract, elementEllipse);


    return element;
}