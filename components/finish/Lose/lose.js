import {data} from "../../../data/data.js";
import {RenderFinish} from "../renderFinish.js";




export function Lose() {
    const element = document.createElement("div")
    element.className = "lose-container"
    const renderFinish = RenderFinish()

    const containerWin = document.createElement("div")
    containerWin.className = "container win"

    const winElement = document.createElement("div")
    winElement.textContent = "Catch: "
    winElement.className = "text win"

    const winCount = document.createElement("div")
    winCount.textContent = data.scores.catchesCount
    winCount.className = "count win"



    const containerLose = document.createElement("div")
    containerLose.className = "container lose"

    const loseElement = document.createElement("div")
    loseElement.textContent = "Miss: "
    loseElement.className = "text lose"

    const missCount = document.createElement("div")
    missCount.textContent = data.scores.missesCount
    missCount.className = "count miss"
    containerWin.append(winElement, loseElement)
    containerLose.append(winCount, missCount)
    if (data.scores.missesCount === data.settings.maximumMissesCount) {
    element.append(renderFinish, containerWin, containerLose)
    }
    return element
}