import {Game} from "./components/game.js";
import {data, GAME_STATUSES, subscribe} from "./data/data.js";
import {Finish} from "./components/finish/finish.js";
import {StartPageGame} from "./components/startPageGame.js";

const appElement = document.getElementById("app");

function renderUi() {
    appElement.innerHTML = "";

    switch (data.gameStatus) {
        case GAME_STATUSES.SETTINGS:
            const settingsElement = StartPageGame()
            appElement.append(settingsElement
            )
            break
        case GAME_STATUSES.IN_PROGRESS:
            const gameElement = Game();
            appElement.append(gameElement);
            break;
        case GAME_STATUSES.FINISH:
            const finishElement = Finish();
            appElement.append(finishElement)
            break;
    }
}

renderUi()
subscribe(renderUi)
