import {SelectGridSize} from "../grid/GridSize/selectGridSize.js";
import {SelectWin} from "../finish/Win/selectWin.js";
import {SelectLose} from "../finish/Lose/selectLose.js";
import {SelectIntervalTime} from "./selectIntervalTime.js";


export function Settings() {
    const containerElement = document.createElement("div");
    containerElement.className = "select-style"
    const gridSizeElement = SelectGridSize()
    const winElement = SelectWin()
    const loseElement = SelectLose()
    const intervalTimeElement = SelectIntervalTime()
    containerElement.append(gridSizeElement, winElement, intervalTimeElement, loseElement)
    return containerElement
}





