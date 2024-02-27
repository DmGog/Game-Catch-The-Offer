import {Game} from "./components/game.js";

function renderUi() {
    const gameElement = Game();
    const appElement = document.getElementById("app");
    appElement.append(gameElement);
}

renderUi()