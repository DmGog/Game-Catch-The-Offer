import {data} from "../../../data/data.js";
import {RenderFinish} from "../renderFinish.js";


export function Win() {
    const containerElement = document.createElement("div")
    const element = document.createElement("div")
    const renderFinish = RenderFinish()
    const winElement = document.createElement("div")
    winElement.textContent = " You WIN, points: "
    const winCount = document.createElement("div")
    winCount.textContent = data.scores.catchesCount
    const loseElement = document.createElement("div")
    loseElement.textContent = "miss: "
    const missCount = document.createElement("div")
    missCount.textContent = data.scores.missesCount

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        element.append(renderFinish, winElement, winCount, loseElement, missCount)
    }


    return element
}