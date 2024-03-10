import {data} from "../../../data/data.js";

export function Lose() {
    const element = document.createElement("div")

    if (data.scores.missesCount === data.settings.maximumMissesCount) {
        element.append(` You Game Over, points: ${data.scores.catchesCount} miss: ${data.scores.missesCount}`)
    }

    return element
}