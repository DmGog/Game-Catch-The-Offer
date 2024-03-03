import {data} from "../../data/data.js";

export function Finish(){
    const element = document.createElement("div")

    if (data.scores.catchesCount === data.settings.pointsToWin){
        element.append(` You WIN, points: ${data.settings.pointsToWin}`)
    } else {element.append(`Game Over, miss: ${data.settings.maximumMissesCount}`)}
    return element
}