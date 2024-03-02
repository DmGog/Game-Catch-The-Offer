import {Game} from "./components/game.js";
import {subscribe} from "./data/data.js";

const appElement = document.getElementById("app");

function renderUi() {
    const gameElement = Game();
    appElement.innerHTML = ""
    appElement.append(gameElement);
}

renderUi()
subscribe(renderUi)
