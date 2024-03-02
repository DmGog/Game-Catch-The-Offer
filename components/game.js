import {Settings} from "./settings/Settings.js";
import {Scores} from "./scores/Scores.js";
import {Grid} from "./grid/Grid.js";

export function Game() {
    const container = document.createElement("div");

    const settingsElement = Settings();
    const scoresElement = Scores();
    const gridElement = Grid();

    container.append(scoresElement, settingsElement, gridElement);
    return container
}