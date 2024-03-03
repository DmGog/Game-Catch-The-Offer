import {data} from "../../data/data.js";

export function Finish(){
    const element = document.createElement("div")

    if (data.scores.catchesCount === data.settings.pointsToWin){
        element.append(` You WIN, points: ${data.scores.catchesCount}`)
    } else {element.append(`Game Over, miss: ${data.scores.missesCount}`)}
    return element
}