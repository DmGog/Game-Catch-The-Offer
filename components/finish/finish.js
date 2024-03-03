import {data, restart} from "../../data/data.js";

export function Finish() {
    const element = document.createElement("div")

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        element.append(` You WIN, points: ${data.scores.catchesCount} miss: ${data.scores.missesCount}`)
    } else {
        element.append(`Game Over, miss: ${data.scores.missesCount} points: ${data.scores.catchesCount}`)
    }

    const restartButton = RestartButton();
    element.append(restartButton)

    return element
}





function RestartButton() {
    const element = document.createElement("button")

    element.innerHTML = "PLAY AGAIN";
    element.addEventListener("click", () => {
        restart()
    })

    return element
}