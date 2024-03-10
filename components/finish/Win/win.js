import {data} from "../../../data/data.js";


export function Win() {
    const element = document.createElement("div")

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        element.append(` You WIN, points: ${data.scores.catchesCount} miss: ${data.scores.missesCount}`)
    }

    return element
}