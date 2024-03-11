import {StartButton} from "./StartButton.js";
import {SelectGridSize} from "../grid/GridSize/SelectGridSize.js";
import {SelectWin} from "../finish/Win/selectWin.js";
import {SelectLose} from "../finish/Lose/SelectLose.js";
import {SelectIntervalTime} from "./SelectIntervalTime.js";


export function Settings() {
    const containerElement = document.createElement("div");
    containerElement.className = "select-style"
    const gridSizeElement = SelectGridSize()
    const winElement = SelectWin()
    const loseElement = SelectLose()
    const intervalTimeElement = SelectIntervalTime()
    const startButtonElement = StartButton();
    containerElement.append(gridSizeElement, winElement, intervalTimeElement, loseElement, startButtonElement)


    return containerElement
}





