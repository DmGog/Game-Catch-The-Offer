import {SelectGridSize} from "./grid/GridSize/selectGridSize.js";
import {SelectWin} from "./finish/Win/selectWin.js";
import {SelectIntervalTime} from "./settings/selectIntervalTime.js";
import {StartButton} from "./settings/startButton.js";
import {SelectLose} from "./finish/Lose/selectLose.js";


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