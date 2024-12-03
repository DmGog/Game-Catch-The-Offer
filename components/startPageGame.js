import {SelectGridSize} from "./grid/gridSize/selectGridSize.js";
import {SelectWin} from "./finish/win/selectWin.js";
import {SelectIntervalTime} from "./settings/selectIntervalTime.js";
import {StartButton} from "./settings/startButton.js";
import {SelectLose} from "./finish/lose/selectLose.js";


export function StartPageGame() {
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