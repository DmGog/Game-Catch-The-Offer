import {data} from "../../data/data.js";
import {RestartButton} from "./restar.js";
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

    const restartButton = RestartButton();
    element.append(restartButton)

    return element
}





