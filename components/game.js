import {Settings} from "./Settings.js";
import {Scores} from "./Scores.js";
import {Grid} from "./Grid.js";

export function Game() {
    const container = document.createElement("div");

    const settingsElement = Settings();
    const scoresElement = Scores();
    const gridElement = Grid();

    container.append(scoresElement, settingsElement, gridElement);
    return container
}