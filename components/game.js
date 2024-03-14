import {Scores} from "./scores/scores.js";
import {Grid} from "./grid/grid.js";
import {Settings} from "./settings/Settings.js";


export function Game() {
    const container = document.createElement("div");

    const settingsElement = Settings();
    const scoresElement = Scores();
    const gridElement = Grid();

    container.append(settingsElement, scoresElement, gridElement);

    return container
}