import {SelectGridSize} from "../grid/gridSize/selectGridSize.js";
import {SelectWin} from "../finish/win/selectWin.js";
import {SelectLose} from "../finish/lose/selectLose.js";
import {SelectIntervalTime} from "./selectIntervalTime.js";


export function Settings() {
    const containerElement = document.createElement("div");
    containerElement.className = "select-style hidden"
    const gridSizeElement = SelectGridSize()
    const winElement = SelectWin()
    const loseElement = SelectLose()
    const intervalTimeElement = SelectIntervalTime()
    containerElement.append(gridSizeElement, winElement, intervalTimeElement, loseElement)
    return containerElement
}





