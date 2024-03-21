import {data} from "../../data/data.js";
import {Win} from "./Win/win.js";
import {Lose} from "./Lose/lose.js";

export function Finish() {
    const element = document.createElement("div")
    const winGame = Win()
    const loseGame = Lose()

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        element.append(winGame)
    } else {
        element.append(loseGame)
    }
    return element
}





